import React, { useState } from 'react';
import ExpenseTable from './ExpenseTable';
import AddButton from './AddButton';
import ExpenseModal from './ExpenseModal';

const initialValue = [
    {
        id: 1,
        title: 'Expense title1',
        quantity: 2,
        unitPrice: 10,
        totalCost: 20,
        date: new Date().toLocaleDateString()
    },
    {
        id: 2,
        title: 'Expense title2',
        quantity: 2,
        unitPrice: 10,
        totalCost: 20,
        date: new Date().toLocaleDateString()
    }
]

const initialInputsValue = {
    id: 0,
    title: '',
    quantity: 0,
    unitPrice: 0,
}
const Main = () => {

    const [data, setData] = useState(initialValue);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(initialInputsValue);

    // Modal functions
    const handleOpen = () => {
        setInput(initialInputsValue);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const removeItem = (id) => {
        const newData = [...data].filter(element => element.id !== id);
        setData(newData);
    }

    const save = (inputvalues) => {
        const copyData = [...data]
        const quantity = parseInt(inputvalues.quantity)
        const unitPrice = parseInt(inputvalues.unitPrice)
        const date = new Date().toLocaleDateString()
        if (input.id === 0) {
            const maxID = Math.max.apply(Math, copyData.map(element => element.id))
            setData([...data, {
                id: maxID > 0 ? maxID + 1 : 1,
                title: inputvalues.title,
                quantity: quantity,
                unitPrice: unitPrice,
                totalCost: quantity * unitPrice,
                date: date
            }])
        } else {
            copyData.splice(copyData.findIndex(v => v.id === input.id), 1, {
                id: input.id,
                title: inputvalues.title,
                quantity: quantity,
                unitPrice: unitPrice,
                totalCost: quantity * unitPrice,
                date: date
            })
            setData([...copyData])
        }
        setOpen(false)
    }

    const edit = id => {
        setOpen(true)
        const newData = [...data].filter(element => element.id === id)[0];
        setInput({
            id: id,
            title: newData.title,
            quantity: newData.quantity,
            unitPrice: newData.unitPrice
        })
    }

    return (
        <>
            <ExpenseModal
                open={open}
                onclose={handleClose}
                callback={(value, id) => save(value, id)}
                inputValues={input}
            />
            <AddButton callback={handleOpen} />
            <ExpenseTable
                data={data}
                removeCallback={id => removeItem(id)}
                editCallback={id => edit(id)}
            />
        </>
    );
}
export default Main
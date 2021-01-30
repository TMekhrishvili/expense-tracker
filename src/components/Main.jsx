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

const Main = () => {

    const [data, setData] = useState(initialValue)
    const [open, setOpen] = useState(false);

    // Modal functions
    const handleOpen = () => {
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
        const maxID = Math.max.apply(Math, copyData.map(element => element.id))
        const quantity = parseInt(inputvalues.quantity)
        const unitPrice = parseInt(inputvalues.unitPrice)
        const date = new Date().toLocaleDateString()
        setData([...data, {
            id: maxID > 0 ? maxID + 1 : 1,
            title: inputvalues.title,
            quantity: quantity,
            unitPrice: unitPrice,
            totalCost: quantity * unitPrice,
            date: date
        }])
        setOpen(false)
    }
    return (
        <>
            <ExpenseModal open={open} onclose={handleClose} callback={value => save(value)} />
            <AddButton callback={handleOpen} />
            <ExpenseTable data={data} callback={id => removeItem(id)} />
        </>
    );
}
export default Main
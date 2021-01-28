import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';


const initialValue = [
    {
        id: 1,
        title: 'Expense title1',
        quantity: 2,
        unitPrice: 10,
        totalCost: 20,
        date: '28.01.2021'
    },
    {
        id: 2,
        title: 'Expense title2',
        quantity: 2,
        unitPrice: 10,
        totalCost: 20,
        date: '28.01.2021'
    },
    {
        id: 3,
        title: 'Expense title3',
        quantity: 2,
        unitPrice: 10,
        totalCost: 20,
        date: '28.01.2021'
    },
    {
        id: 4,
        title: 'Expense title4',
        quantity: 2,
        unitPrice: 10,
        totalCost: 20,
        date: '28.01.2021'
    }
]

const Main = () => {
    const [data, setdata] = useState(initialValue)

    const removeItem = (id) => {
        const newData = [...data].filter(element => element.id !== id);
        setdata(newData);
    }

    return (
        <>
            <div style={{ display: 'flex', 'justifyContent': 'flex-end' }}>
                <button className="add-button">+</button>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>N</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Unit price</TableCell>
                            <TableCell align="right">Total cost</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.unitPrice}</TableCell>
                                <TableCell align="right">{row.totalCost}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right"><DeleteIcon onClick={() => removeItem(row.id)} style={{ color: 'red', cursor: 'pointer' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default Main
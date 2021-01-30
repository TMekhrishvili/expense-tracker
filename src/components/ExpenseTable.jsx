import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';


const ExpenseTable = ({ data, callback }) => {
    return (
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
                            <TableCell align="right"><DeleteIcon onClick={() => callback(row.id)} style={{ color: 'red', cursor: 'pointer' }} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default ExpenseTable
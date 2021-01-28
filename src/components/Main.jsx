import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

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

const initialInput = {
    title: '',
    quantity: 0,
    unitPrice: 0,
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Main = () => {

    const [data, setData] = useState(initialValue)
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(initialInput)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const modalStyle = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    const removeItem = (id) => {
        const newData = [...data].filter(element => element.id !== id);
        setData(newData);
    }
    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const save = () => {
        const copyData = [...data]
        const maxID = Math.max.apply(Math, copyData.map(element => element.id))
        const quantity = parseInt(input.quantity)
        const unitPrice = parseInt(input.unitPrice)
        const date = new Date().toLocaleDateString()
        setData([...data, {
            id: maxID + 1,
            title: input.title,
            quantity: quantity,
            unitPrice: unitPrice,
            totalCost: quantity * unitPrice,
            date: date
        }])
        setOpen(false)
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="fields">
                        <InputLabel style={{ marginTop: '20px' }}>Title</InputLabel>
                        <Input type="text" name="title" onChange={handleChange} />
                        <InputLabel style={{ marginTop: '20px' }}>Quantity</InputLabel>
                        <Input type="text" name="quantity" onChange={handleChange} />
                        <InputLabel style={{ marginTop: '20px' }}>Unit price</InputLabel>
                        <Input type="text" name="unitPrice" onChange={handleChange} />
                        <Button style={{ marginTop: '20px' }} onClick={save} variant="contained" color="primary">
                            Save
                        </Button>
                    </div>
                </div>

            </Modal>
            <div style={{ display: 'flex', 'justifyContent': 'flex-end' }}>
                <button onClick={handleOpen} className="add-button">+</button>
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
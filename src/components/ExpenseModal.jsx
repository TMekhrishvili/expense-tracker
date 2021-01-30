import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const initialValue = {
    title: '',
    quantity: 0,
    unitPrice: 0,
}

const ExpenseModal = ({ open, callback, onclose }) => {
    const [input, setInput] = useState(initialValue);

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const modalStyle = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <Modal
            open={open}
            onClose={onclose}
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
                    <Button style={{ marginTop: '20px' }} onClick={() => callback(input)} variant="contained" color="primary">
                        Save
                    </Button>
                </div>
            </div>

        </Modal>
    )
}
export default ExpenseModal
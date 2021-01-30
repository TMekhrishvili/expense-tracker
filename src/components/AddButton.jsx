import React from 'react';
import './style.css';

const AddButton = ({ callback }) => {
    return (
        <div style={{ display: 'flex', 'justifyContent': 'flex-end' }}>
            <button onClick={callback} className="add-button">+</button>
        </div>
    )
}
export default AddButton
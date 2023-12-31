import React from 'react';
import axios from 'axios';


const DeleteButton = (props) => {
    const {productId,successCallback} = props;
    const deleteProduct = e =>{
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res =>{
                successCallback();
            })
            .catch(err =>console.log(err))
    }

    return (
        <button className="btn btn-danger m-3" onClick={deleteProduct}>Delete</button>

    );
};

export default DeleteButton;

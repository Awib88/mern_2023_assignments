import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';


const DisplayOne = (props) => {

    const navigate = useNavigate()

    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log("API response:", res.data);
                setOneProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res) => {
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
            });
    };

    return (
        <header className="App-header d-flex ">
            <Header />
            <div className=" mt-4 border border-5 border-primary-subtle rounded-top">
                <h1>{oneProduct.title}</h1>
                <h3>Price: ${oneProduct.price}</h3>
                <h3>Description: {oneProduct.description}</h3>
                <div>
                    <button className=' btn btn-warning m-3' onClick={() => navigate(`/product/edit/${id}`)}>Edit</button>
                    <button className=' btn btn-danger m-3' onClick={handleDelete} >Delete</button>
                </div>
            </div>
        </header>
    );
};





export default DisplayOne;

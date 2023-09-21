import React from 'react';
import axios from 'axios';
import {useState} from 'react';


const NewProduct = (props) => {

    const {productList, setProductList} = props;

    const [Product, setProduct] = useState({
        title:"",
        price:"",
        description:""
    });

    const inputHandler = (e) => {
        setProduct({...Product,[e.target.name]:e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products",Product)
            .then(res => {
                setProduct({
                    title:"",
                    price:"",
                    description:""
                })
            })
            .catch(err => console.log(err));
        
        setProductList([...productList,Product]);
    }



    return (
        <div className='border border-5 border-primary-subtle rounded-top p-3'>
            <form onSubmit={submitHandler}>
                <h3 className='m-3'>Add a new product</h3>
                <div className='form-fields'>
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" name="title" onChange={inputHandler} value={Product.title}/>
                </div>
                <div className='form-fields'>
                    <label className="form-label">Price</label>
                    <input className="form-control" type="number" name="price" onChange={inputHandler} value={Product.price}/>
                </div>
                <div className='form-fields'>
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" name="description" onChange={inputHandler} value={Product.description} />
                </div>
                <input className='btn btn-primary m-3' type="submit" value="Create"/>
            </form>
        </div>
    );
};





export default NewProduct;

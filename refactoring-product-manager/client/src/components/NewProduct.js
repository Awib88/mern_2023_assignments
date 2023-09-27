import React from 'react';
import {useState} from 'react';


const NewProduct = (props) => {

  const { initialTitle,initialPrice,initalDescription,onSubmitProp} = props
  const [title,setTitle]=useState(initialTitle)
  const [price,setPrice]= useState(initialPrice)
  const [description,setDescription]=useState(initalDescription)
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({title,price,description})
    setTitle(initialTitle);
    setPrice(initialPrice)
    setDescription(initalDescription)
  }

 



    return (
        <div className='border border-5 border-primary-subtle rounded-top p-3'>
            <form onSubmit={onSubmitHandler}>
                <h3 className='m-3'>Add a new product</h3>
                <div className='form-fields'>
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className='form-fields'>
                    <label className="form-label">Price</label>
                    <input className="form-control" type="number" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className='form-fields'>
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </div>
                <input className='btn btn-primary m-3' type="submit" value="Create"/>
            </form>
        </div>
    );
};





export default NewProduct;

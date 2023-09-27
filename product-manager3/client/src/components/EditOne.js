import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';


const EditOne = () => {


    const navigate = useNavigate()

    const {id}=useParams()

    const [Product, setProduct] = useState({
        title:"",
        price:"",
        description:""
    });

    const inputHandler = (e) => {
        setProduct({...Product,[e.target.name]:e.target.value});
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log("API response:", res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/edit/${id}`,Product)
            .then(res => {
                setProduct({
                    title:"",
                    price:"",
                    description:""
                })
                navigate ("/")
            })
            .catch(err => console.log(err));
        
    }



    return (
        <div className='border border-5 border-primary-subtle rounded-top p-3'>
            <form onSubmit={submitHandler}>
                <h3 className='m-3'>Edit product</h3>
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




export default EditOne;

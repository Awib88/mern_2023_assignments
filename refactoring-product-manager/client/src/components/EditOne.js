import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import NewProduct from './NewProduct';
import DeleteButton from './DeleteButton';


const EditOne = (props) => {


    const navigate = useNavigate()

    const {id}=useParams()

    const [Product, setProduct] = useState({});
    const [loaded,setLoaded] = useState(false);



    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log("API response:", res.data);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id]);

    const productUpdate = productParams => {
        axios.put(`http://localhost:8000/api/products/edit/${id}`,productParams)
            .then(res => {
            })
            .catch(err => console.log(err));
        
    }



    return (
        <div className='border border-5 border-primary-subtle rounded-top p-3'>
            <h1>Update this Product</h1>
            {
                loaded &&  
                <NewProduct onSubmitProp = {productUpdate} initialTitle = {Product.title} initialPrice = {Product.price} initalDescription = {Product.description} />
            }
            <DeleteButton productId = {Product._id} successCallback = {()=>navigate("/")} />
        </div>
    );
};




export default EditOne;

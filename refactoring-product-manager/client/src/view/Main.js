import { useState,useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import NewProduct from '../components/NewProduct';
import DisplayAll from '../components/DisplayAll';
import axios from 'axios';


const Main = () => {

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios
            .get("http://localhost:8000/api/products")
            .then(res => {setProductList(res.data)})
            .catch(err=>console.log(err))
    },[])

    const removeFromDom = productID => {
        axios.delete(`http://localhost:8000/api/products/delete/${productID}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProductList(productList.filter(product=>product._id !== productID))
            })
            .catch(err=>console.log(err))
    }

    const createProduct = productParam => {
        axios.post("http://localhost:8000/api/products",productParam)
            .then(res=>{
                console.log(res.data)
                setProductList([...productList,res.data])
            })
            .catch(err=>console.log(err))
    }

    return (
        <header className="App-header d-flex ">
            <Header />
            <div className="d-flex justify-content-between">
                <div  className="p-3 m-3"><NewProduct onSubmitProp={createProduct} initialTitle = "" initialPrice = "" initalDescription = "" /></div>
                <div className="vr"></div>
                <div  className="p-3 m-3"><DisplayAll productList={productList} setProductList={setProductList} removeFromDom = {removeFromDom} /></div>
            </div>
      </header>
    );
};




export default Main;

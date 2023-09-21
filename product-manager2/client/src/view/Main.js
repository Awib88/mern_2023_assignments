import { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import NewProduct from '../components/NewProduct';
import DisplayAll from '../components/DisplayAll';


const Main = () => {

    const [productList, setProductList] = useState([]);
    return (
        <header className="App-header d-flex ">
            <Header />
            <div className="d-flex justify-content-between">
                <div  className="p-3 m-3"><NewProduct productList={productList} setProductList={setProductList} /></div>
                <div className="vr"></div>
                <div  className="p-3 m-3"><DisplayAll productList={productList} setProductList={setProductList} /></div>
            </div>
      </header>
    );
};




export default Main;

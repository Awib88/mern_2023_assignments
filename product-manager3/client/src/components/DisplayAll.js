import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const DisplayAll = (props) => {

    const navigate = useNavigate()
    const { productList, setProductList } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log("API response:", res.data);
                console.log("Before setting productList:", productList);
                setProductList(res.data);
                console.log("After setting productList:", productList);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res)=>{
                const updateListAfterDelete = productList.filter(product => product._id !== id)
                setProductList(updateListAfterDelete);
            })
            .catch( err => console.log(err));
    }

    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th><h3>Products List ({productList.length})</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, index) => (
                        <tr key={index}>
                            <td>
                                <Link className=' link-info link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover
                                ' to={`/products/${product._id}`}>{product.title}</Link>
                                <button className=' btn btn-warning m-3' onClick={() => navigate(`/product/edit/${product._id}`)}>Edit</button>
                                <button className=' btn btn-danger m-3' onClick={()=> deleteProduct(product._id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};




export default DisplayAll;

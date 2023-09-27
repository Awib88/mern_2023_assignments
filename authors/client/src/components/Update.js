import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Form from './Form';

const Update = (props) => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateAuthor = authorParams => {
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, authorParams)
            .then(res => {
                navigate("/")
                console.log("🚀 -------------------------------------------------🚀")
                console.log("🚀 ~ file: Update.js:27 ~ updateAuthor ~ res:", res.data)
                console.log("🚀 -------------------------------------------------🚀")

            })
            .catch(err => {
                console.log("🚀 ~ file: Main.js:38 ~ addAuthor ~ err:", err.response.data.err.errors)
                setErrors(err.response.data.err.errors)
            })
    }

    return (
        <div style={{ textAlign: "center", border: "solid 1px", width: "250px", margin: "auto", marginTop: "25px", padding: "10px" }}>

            <legend>Update author</legend>
            {
                loaded &&
                <Form onSubmitProp={updateAuthor} initialName={author.name} errors={errors} />
            }
            <button className='btn btn-warning m-2' onClick={() => navigate("/")} >Cancel</button>
        </div>
    );
};


export default Update;

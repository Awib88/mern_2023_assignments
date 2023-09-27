import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAll from '../components/DisplayAll';
import Form from '../components/Form';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';

const Main = () => {

    const [authorsList, setAuthorsList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then(res => {
                setLoaded(true)
                setAuthorsList(res.data)
            })
            .catch(err =>
                console.log("🚀 ~ file: Main.js:15 ~ useEffect ~ err:", err)
            )
    }, [])

    const removeFromDom = AuthorID => {
        axios.delete(`http://localhost:8000/api/authors/delete/${AuthorID}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setAuthorsList(authorsList.filter(author => author._id !== AuthorID))
            })
            .catch(err => {
                console.log("🚀 ~ file: Main.js:27 ~ removeFromDom ~ err:", err)
            })
    }

    const addAuthor = authorParam => {
        axios.post("http://localhost:8000/api/authors", authorParam)
            .then(res => {
                console.log(res.data)
                setAuthorsList([...authorsList, res.data])
            })
            .catch(err => {
                console.log("🚀 ~ file: Main.js:38 ~ addAuthor ~ err:", err.response.data.err.errors)
                setErrors(err.response.data.err.errors)
            })
    }



    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", border: "solid 1px", width: "850px", margin: "auto", marginTop: "25px", padding: "10px" }}>
                <header style={{ display: "block" }} >
                    <h3>My fav authors <CollectionsBookmarkOutlinedIcon color='secondary' />  </h3>
                </header>
                <main style={{ display: "flex" }} >
                    <div style={{ padding: "10px", margin: "10px", width: "65%" }}>
                        <DisplayAll authorsList={authorsList} removeFromDom={removeFromDom} loaded={loaded} />
                    </div>
                    <div style={{ padding: "10px", margin: "10px", width: "35%" }}>
                    <h6 style={{marginBottom:"5px"}}>Add author!  </h6>
                        <Form onSubmitProp={addAuthor} initialName="" errors={errors} />
                    </div>
                </main>
            </div>

        </>
    );
};



export default Main;

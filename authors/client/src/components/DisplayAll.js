import React from 'react';
import { useNavigate } from 'react-router-dom';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import { yellow } from '@mui/material/colors';


const DisplayAll = (props) => {

    const { authorsList, removeFromDom, loaded } = props;

    const navigate = useNavigate()

    return (
        <div  >
            <h6 style={{ marginBottom: "5px" }}>Your fav authors <AutoAwesomeTwoToneIcon sx={{ "color": yellow[500] }} /> </h6>
            <ol >
                {
                    loaded && authorsList.map((author, idx) => (
                        <li key={idx} >
                            {author.name}
                            <button className=' btn btn-warning m-3' onClick={() => navigate(`/author/edit/${author._id}`)}>Edit</button>
                            <button className=' btn btn-danger m-3' onClick={() => removeFromDom(author._id)} >Delete</button>
                        </li>

                    ))

                }
            </ol>
        </div>
    );
};




export default DisplayAll;


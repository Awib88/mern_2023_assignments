import React, { useState } from 'react';

const Box = (props) => {
    const { box, setBox } = props;
    const [color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setColor("");
        setBox([...box, color]);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Color :</label>
                <input type="text" className="form-control" onChange={(e) => setColor(e.target.value)} value={color} style={{width:"400px"}} />
                <input type="submit" className="btn btn-primary m-3" value="Add" />
            </form>
        </div>
    )
}
export default Box;
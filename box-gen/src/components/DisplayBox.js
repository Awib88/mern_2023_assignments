import React from 'react'

const DisplayBox = (props) => {
    const { box } = props;
    return (
        <div>
            {
                box.map((color, idx) => {
                    return <div key={idx} style={{ backgroundColor: color, width: "100px", height: "100px", display: "inline-block", margin: "10px" }}></div>
                }
                )
            }
        </div>
    )
}

export default DisplayBox
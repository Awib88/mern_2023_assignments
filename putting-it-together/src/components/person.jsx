import React from 'react'
import { useState } from 'react'

const Person = props => {
    const [age, setAge] = useState(props.age)

    const handleClick = () => {
        setAge(age + 1)
    }

    return (
        <>
            <div className='card m-2 ' style={{width: '18rem'}} >
                <div className='card-title'>
                    <h1>
                        {props.lastName}, {props.firstName}
                    </h1>
                </div>
                <div className='card-body'>
                    <p>Age: {age}</p>
                    <p>Hair Color: {props.hairColor}</p>
                </div>
                <div className='card-footer'>
                    <button className="btn btn-primary" onClick={handleClick}>Birthday button for {props.firstName} {props.lastName}</button>
                </div>
            </div>
        </>
    )
}

export default Person

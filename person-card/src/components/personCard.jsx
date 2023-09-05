import React from 'react'

function PersonCard(props) {
  return (
    <div className='container '>
        <div className='p-2'>
          <div className='card' style={{width: '22rem'}}>
            <h1 className='card-title '>{props.lastName}, {props.firstName}</h1>
            <p className='card-body '>Age: {props.age}</p>
            <p className='card-body '>Hair Color: {props.hairColor}</p>
          </div>
      </div>
    </div>
  )
}


export default PersonCard




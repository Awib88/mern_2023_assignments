import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const NumForm = (props) => {
  const navigate = useNavigate()
    const [number,setNumber]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/num/form/${number}`)
        

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className="form-label">Enter a number:</label>
            <input type='text'value={number} onChange={(e)=>{setNumber(e.target.value)}}/><br/><br/>
            {
              isNaN(number)?
              <p>please enter a number</p>:
              
            <button type='submit'>Submit</button>
            }
        </form>
    </div>
  )
}

export default NumForm
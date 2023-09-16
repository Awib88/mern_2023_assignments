import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const TextForm = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/text/form/${text}`)


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Enter a text:</label>
        <input   type='text' value={text} onChange={(e) => { setText(e.target.value) }} /> <br/>
        {
          isNaN(text) ?
            <button type='submit'>Submit</button> :
            <p>please enter a text</p>
        }
      </form>

    </div>
  )
}

export default TextForm
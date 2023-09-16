import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const StyledText = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [color, setColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#FFFFFF')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/styledtext/form/${text}/${encodeURIComponent(color)}/${encodeURIComponent(bgColor)}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label className="form-label">Select a background color: </label>
        <input  type='color' value={bgColor} onChange={(e) => { setBgColor(e.target.value) }} /> <br/>
        <label className="form-label">Select a color: </label>
        <input  type='color' value={color} onChange={(e) => { setColor(e.target.value) }} /> <br/>
        <label className="form-label">Enter a text: </label>
        <input  type='text' value={text} onChange={(e) => { setText(e.target.value) }} /><br/>
        {
          isNaN(text) ?
            <button type='submit'>Submit</button> :
            <p>please enter a text</p>
        }
      </form>
    </div>
  )
}

export default StyledText
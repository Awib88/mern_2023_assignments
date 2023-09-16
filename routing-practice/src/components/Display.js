import React from 'react'
import { useParams } from 'react-router-dom'
import './string.css';


const Display = (props) => {
  const { num, string, text, color, bgcolor } = useParams()
  return (
    <div>
      <h1>Results 🥳 </h1>
      {string &&
        <div class="wrapper two">
          <div class="neon">
            <h2>{string}</h2>
          </div>
        </div>
      }
      {num &&
        <div class="wrapper two">
          <div class="neon">
            <h2>{num}</h2>
          </div>
        </div>
      }
      {text &&
            <h2 style={
              {color:color , backgroundColor:bgcolor}
            }>{text}</h2>
      }
    </div>
  )
}

export default Display
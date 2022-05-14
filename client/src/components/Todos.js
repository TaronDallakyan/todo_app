import React from 'react'
import '../App.css'

function Todos({text, update, remove}) {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='buttons'>
            <button onClick={update}>Update</button>
            <button onClick={remove}>Delete</button>
        </div>
    </div>
  )
}

export default Todos
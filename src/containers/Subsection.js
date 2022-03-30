import React from 'react'
import js from '../assets/js.png'

const Subsection = (props) => {
  return (
    <div className='subsection'>
        <div className='subsection-title'>
        <img src={js} /> <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Subsection
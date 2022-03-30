import React from 'react'
import down from '../assets/down.png'

const Section = (props) => {
  return (
    <div className='section'>
        <div className='section-title' >
        <img src={down} /> <p>{props.title}</p>
        </div>
    </div>
    
  )
}

export default Section
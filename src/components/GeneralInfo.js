import React from 'react'
import khalil from '../assets/khalil.jpeg'

const GeneralInfo = () => {
  return (
      <div className='gen-info-wrapper'>
    <div className='greatings' >
        <h1>Hey, <br/>i'm Khalil.</h1>
    </div>
    <img className='my-img' src={khalil} />
    <div className='bio'>
        <p>A CS graduate and web developer with a small experience in ios developement.<br/> I love building web apps.<br/>  I use React js for the front end and Node js for the backend.</p>
    </div>
    </div>
  )
}

export default GeneralInfo
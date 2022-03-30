import React from 'react'
import github from '/Users/khaliljebali/Desktop/dev-portfolio/src/assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import home from '../assets/home.png'



const Links = () => {
  return (
    <div className='links-container'>
            <img  src={home}/>
            <img  src={github}/>
            <img  src={linkedin}/>
            <img  src={email}/>
    </div>
  )
}

export default Links
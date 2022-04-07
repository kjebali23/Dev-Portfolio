import React from 'react'
import github from '/Users/khaliljebali/Desktop/dev-portfolio/src/assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import home from '../assets/home.png'
import { useDispatch } from 'react-redux'
import { general , contact } from '../redux/pages'



const Links = () => {
  const dispatch = useDispatch();

  return (
    <div className='links-container'>
            <div onClick={()=> dispatch(general())} ><img  src={home}/></div>
            <a href="https://github.com/kjebali23" target='_blank' ><img  src={github}/></a>
            <a href="https://www.linkedin.com/in/khalil-jebali-60a5a7147/" target='_blank' ><img  src={linkedin}/></a>
            <div onClick={()=> dispatch(contact())} ><img   src={email}/></div>
    </div>
  )
}

export default Links
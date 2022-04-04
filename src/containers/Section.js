import React from 'react'
import down from '../assets/down.png'
import { useDispatch , useSelector } from 'react-redux';
import {education , experience , projects , resume} from '../redux/pages'

const Section = (props) => {
  const dispatch = useDispatch();
  dispatch(education)
  



  return (
    <div className='section' onClick={()=> dispatch(education) }  >
        <div className='section-title'>
        <img src={down} /> <p>{props.title}</p>
        </div>
    </div>
    
  )
}

export default Section
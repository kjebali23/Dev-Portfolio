import React from 'react'
import js from '../assets/js.png'
import { useDispatch , useSelector } from 'react-redux';
import {education , experience , projects , resume} from '../redux/pages'

const Subsection = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='subsection'  onClick={()=> props.id === 1 ? dispatch(education()) : props.id === 2 ? dispatch(experience()) : props.id === 3 ? dispatch(projects()) :  dispatch(resume())} >
        <div className='subsection-title'>
        <img src={js} /> <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Subsection
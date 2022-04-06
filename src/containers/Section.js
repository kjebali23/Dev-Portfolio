import React from 'react'
import down from '../assets/down.png'
import { useDispatch , useSelector } from 'react-redux';
import { general , education , experience , projects , resume} from '../redux/pages'

const Section = (props) => {
  const dispatch = useDispatch();
  



  return (
    <div className='section' onClick={()=> props.id === 1 ? dispatch(education()) : props.id === 2 ? dispatch(experience()) : props.id === 3 ? dispatch(projects()) :  dispatch(resume())    }  >
        <div className='section-title'>
        <img src={down} /> <p>{props.title}</p>
        </div>
    </div>
    
  )
}

export default Section
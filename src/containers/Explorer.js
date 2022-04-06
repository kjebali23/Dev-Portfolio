import React from 'react'
import down from '../assets/down.png'
import Section from './Section'
import Subsection from './Subsection'
import { useDispatch } from 'react-redux'
import { general} from '../redux/pages'

const Explorer = () => {
  const dispatch = useDispatch()

  return (
    <div className='explorer'>
        <div className='explorer-title'>
            <p>Explorer</p>
            </div>
        <div className='resume'>
          <div className='resume-title' onClick={()=> dispatch(general())}> 
            <img src={down} /> <p>Khalil-Jebali</p>
          </div>
          <div className='info-section' >
            <Section title={'Education'} id={1}  />
              <Subsection title={'Education.js'} id={1} />
            <Section title={'Experience'} id={2}  />
              <Subsection title={'Experience.js'} id={2}/>
            <Section title={'Projects'} id={3} />
              <Subsection title={'Projects.js'} id={3}/>
            <Section title={'Resume'}  id={4} />
              <Subsection title={'Resume.js'} id={4}/>
          </div>
        </div>
        
    </div>
  )
}

export default Explorer
import React from 'react'
import down from '../assets/down.png'
import Section from './Section'
import Subsection from './Subsection'

const Explorer = () => {
  return (
    <div className='explorer'>
        <div className='explorer-title'>
            <p>Explorer</p>
            </div>
        <div className='resume'>
          <div className='resume-title' > 
            <img src={down} /> <p>Khalil-Jebali</p>
          </div>
          <div className='info-section' >
            <Section title={'Education'} id={1}  />
              <Subsection title={'Education.js'} />
            <Section title={'Experience'} id={2}  />
              <Subsection title={'Experience.js'}/>
            <Section title={'Projects'} id={3} />
              <Subsection title={'Projects.js'}/>
            <Section title={'Resume'}  id={4} />
              <Subsection title={'Resume.js'}/>
          </div>
        </div>
        
    </div>
  )
}

export default Explorer
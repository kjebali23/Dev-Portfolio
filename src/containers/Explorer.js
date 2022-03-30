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
            <Section title={'Resume'} />
              <Subsection title={'Resume.js'}/>
            <Section title={'Education'} />
              <Subsection title={'Education.js'}/>
            <Section title={'Experience'} />
              <Subsection title={'Experience.js'}/>
            <Section title={'Projects'} />
              <Subsection title={'Gapplebees.js'}/>
              <Subsection title={'Node-crud.js'}/>
          </div>
        </div>
        
    </div>
  )
}

export default Explorer
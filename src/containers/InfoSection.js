import React from 'react'
import GeneralInfo from '../components/GeneralInfo'
import InfoSectionTopBar from '../components/InfoSectionTopBar'
import './InfoSection.css'
import ResumeSection from '../components/ResumeSection'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from './Projects'


const InfoSection = () => {
  return (
    <div className='data-section'>
        {/* <InfoSectionTopBar/> */}
        {/* <GeneralInfo/> */}
        {/* <Education/> */}
        <Experience/>
        {/* <Projects/> */}
        {/* <ResumeSection/> */}

        
    </div>
  )
}

export default InfoSection
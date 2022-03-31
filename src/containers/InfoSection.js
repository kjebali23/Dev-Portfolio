import React from 'react'
import GeneralInfo from '../components/GeneralInfo'
import InfoSectionTopBar from '../components/InfoSectionTopBar'
import './InfoSection.css'
import ResumeSection from '../components/ResumeSection'
import Education from '../components/Education'


const InfoSection = () => {
  return (
    <div className='data-section'>
        <InfoSectionTopBar/>
        {/* <GeneralInfo/> */}
        <Education/>
        {/* <ResumeSection/> */}

        
    </div>
  )
}

export default InfoSection
import React from 'react'
import GeneralInfo from '../components/GeneralInfo'
import './InfoSection.css'
import ResumeSection from '../components/ResumeSection'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from './Projects'

import { useSelector } from 'react-redux'
import Email from './Email'

const InfoSection = () => {

  const page = useSelector((state)=> state.pages.value )
  console.log(page)

  return (
    <div className='data-section'>

        {page === 0 &&  <GeneralInfo/>}
        {page ===1 && <Education/> }
        {page ===2 && <Experience/> }
        {page ===3 && <Projects/> }
        {page ===4 && <ResumeSection/>}
        {page ===5 && <Email/>}

        
    </div>
  )
}

export default InfoSection
import React from 'react'
import ResumeSection from '../components/ResumeSection'
import Explorer from './Explorer'
import InfoSection from './InfoSection'
import LeftBar from './LeftBar'

const WorkspaceContainer = () => {
  return (
      <div className='workspace-container'>
    <LeftBar/>
    <Explorer/>
    <InfoSection/>
    </div>
  )
}

export default WorkspaceContainer
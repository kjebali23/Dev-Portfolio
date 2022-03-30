import React from 'react'
import Explorer from './Explorer'
import LeftBar from './LeftBar'

const WorkspaceContainer = () => {
  return (
      <div className='workspace-container'>
    <LeftBar/>
    <Explorer/>
    </div>
  )
}

export default WorkspaceContainer
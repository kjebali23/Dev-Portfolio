import React from 'react'
import TopBar from './TopBar'
import './Main.css'
import WorkspaceContainer from './WorkspaceContainer'
import AppTopBar from '../components/AppTopBar'

const Main = () => {
  return (
    <div>
      <AppTopBar/>
    <div className='main'>
        {/* <TopBar/>
    <WorkspaceContainer /> */}
    </div>
    <div className='doc'>
      </div>
    </div>
  )
}

export default Main
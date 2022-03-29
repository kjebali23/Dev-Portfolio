import React from 'react'
import LeftBar from './LeftBar'
import TopBar from './TopBar'
import './Main.css'
import WorkspaceContainer from './WorkspaceContainer'

const Main = () => {
  return (
    <div>
        <TopBar/>
    <WorkspaceContainer />
    </div>
  )
}

export default Main
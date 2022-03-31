import React from 'react'
import TopBar from './TopBar'
import './Main.css'
import WorkspaceContainer from './WorkspaceContainer'
import AppTopBar from '../components/AppTopBar'
import finder from '../assets/finder.png'
import bin from '../assets/bin.png'
import vscode from '../assets/vscode.svg'
import chrome from '../assets/chrome.svg'
import launchpad from '../assets/launchpad.png'

const Main = () => {
  return (
    <div>
      <AppTopBar/>
    <div className='main'>
        {/* <TopBar/>
    <WorkspaceContainer /> */}
    </div>
    <div className='doc'>
      <button className='doc-btn'><img className='doc-img' src={finder} /></button>
      <button className='doc-btn'><img className='doc-img' src={launchpad} /></button>
      <button className='app-doc-btn'><img className='s-img' src={vscode} /></button>
      <button className='app-doc-btn'><img className='s-img' src={chrome} /></button>
      <div className='vl' ></div>
      <button className='doc-btn'><img className='doc-img' src={bin} /></button>
      </div>
    </div>
  )
}

export default Main
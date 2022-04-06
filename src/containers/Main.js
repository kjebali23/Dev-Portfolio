import React ,{useState} from 'react'
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
  const [desktop , setDesktop] = useState(0);
  console.log(desktop)
  const showDesktop = ()=>{
    setDesktop(0);
  }
  return (
    <div>
      <AppTopBar/>
    { desktop === 0 && 
      <div className='main'>
        <TopBar showDesktop={setDesktop} />
    <WorkspaceContainer />
    </div>}
    <div className='doc'>
      <button className='doc-btn'><img className='doc-img' src={finder} /></button>
      <button className='doc-btn'><img className='doc-img' src={launchpad} /></button>
      <button className='app-doc-btn'><img className='s-img' src={vscode} onClick={()=> showDesktop()}  /></button>
      <button className='app-doc-btn'><img className='s-img' src={chrome} /></button>
      <div className='vl' ></div>
      <button className='doc-btn'><img className='doc-img' src={bin} /></button>
      </div>
    </div>
  )
}

export default Main
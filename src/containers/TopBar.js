import React from 'react'
import Circle from '../components/Circle'
import Title from '../components/Title'
import './TopBar.css'

const TopBar = (props) => {
  return (
      <div className='top-bar'>
        <div className='circles-container'>
          <Circle id={'1'}  showDesktop ={props.showDesktop}/>
          <Circle id={'2'}  showDesktop ={props.showDesktop}/>
          <Circle id={'3'}  showDesktop ={props.showDesktop}/>
        </div>
        <Title/>
    </div>
  )
}

export default TopBar
import React from 'react'
import Circle from '../components/Circle'
import Title from '../components/Title'
import './TopBar.css'

const TopBar = () => {
  return (
      <div className='top-bar'>
        <div className='circles-container'>
          <Circle id={'1'} />
          <Circle id={'2'} />
          <Circle id={'3'} />
        </div>
        <Title/>
    </div>
  )
}

export default TopBar
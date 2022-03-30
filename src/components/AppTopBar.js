import React from 'react'
import apple from '../assets/apple.png'

const AppTopBar = () => {
  return (
    <div className='apple-top-bar' >
        <div className='shortcuts' >
            <img src={apple} />
            <h4>Code</h4>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Window</p>
            <p>Help</p>
        </div>
      </div>
  )
}

export default AppTopBar
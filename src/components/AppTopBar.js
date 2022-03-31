import React from 'react'
import moment from 'moment'
import apple from '../assets/apple.png'
import wifi from '../assets/wifi.png'
import search from '../assets/search.png'

const AppTopBar = () => {
    
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var localTime = new Date(),

    time = localTime.getHours() + ':' + localTime.getMinutes();

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
        <div className='app-left-bar'>
            <img src={wifi} />
            <img src={search} />
            <p>{date}</p>
            <p>{time}</p>
        </div>
      </div>
  )
}

export default AppTopBar
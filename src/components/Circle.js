import React from 'react'
import x from '../assets/x.png'

const Circle = (props) => {
    const color = props.id ==='1'? 'rgb(237,106,94)' : props.id === '2' ? 'rgb(245,191,79)' : 'rgb(98,198,85)';
    const displayDesktop = ()=>{
      props.showDesktop(1)
    }
    return (
    <div className='top-bar-circle'style={{background: color}} onClick={()=> displayDesktop() } > 
      {props.id === '1' && <img src={x} />}
    </div>
  )
}

export default Circle
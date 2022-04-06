import React from 'react'

const Circle = (props) => {
    const color = props.id ==='1'? 'rgb(237,106,94)' : props.id === '2' ? 'rgb(245,191,79)' : 'rgb(98,198,85)';
    const displayDesktop = ()=>{
      props.showDesktop(1)
      // console.log('onclick te5dem')
    }
    return (
    <div className='top-bar-circle'style={{background: color}} onClick={()=> displayDesktop() } >    </div>
  )
}

export default Circle
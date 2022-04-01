import React from 'react'
import github from '../assets/github.png'

const Project = () => {
  return (
    <div className='project'>
        <div className='project-info'>
        <h3>Project title</h3>
        <div>Tech used</div>
        <div>Bullet points</div>
        </div>
        <div className='project-show'>
            <div className='project-links' >
                <button><img src={github}  /></button>
            </div>
        </div>
    </div>
  )
}

export default Project
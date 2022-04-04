import React from 'react'
import Project from '../components/Project'
import github from '../assets/github.png'

const Projects = () => {
  return (
    <div className='projects-section'>
        <h3>Projects</h3>
        <div className='project'>
        <div className='project-info'>
        <h3>Gapplebees</h3>
        <div className='tech-used' ><h4>Tech used: </h4> <p>React js , Redux , Node js , Graphql</p> </div>
        <div className='project-description'>
          <h4>Description :</h4>
          <p>A tinder like web app but for Petrol heads.</p>
        </div>
        </div>
        <div className='project-show'>
            <div className='project-links' >
                <button><img src={github}  /></button>
            </div>
        </div>
    </div>

    <div className='project'>
        <div className='project-info'>
        <h3>Node js Crud</h3>
        <div className='tech-used' ><h4>Tech used: </h4> <p>Node js , Express js</p> </div>
        <div className='project-description'>
          <h4>Description :</h4>
          <p>A tinder like web app but for Petrol heads.</p>
        </div>
        </div>
        <div className='project-show'>
            <div className='project-links' >
                <button><img src={github}  /></button>
            </div>
        </div>
    </div>

    <div className='project'>
        <div className='project-info'>
        <h3>Student Database</h3>
        <div className='tech-used' ><h4>Tech used: </h4> <p>Java , Jframe</p> </div>
        <div className='project-description'>
          <h4>Description :</h4>
          <p>A Student management desktop app built with java. (coursework)</p>
        </div>        
        </div>
        <div className='project-show'>
            <div className='project-links' >
                <button><img src={github}  /></button>
            </div>
        </div>
    </div>

    <div className='project'>
        <div className='project-info'>
        <h3>Bitcoin Ticker</h3>
        <div className='tech-used' ><h4>Tech used: </h4> <p>Swift</p> </div>
        <div className='project-description'>
          <h4>Description :</h4>
          <p>An ios mobile app that keeps track of bitcoin's price</p>
        </div>       
        </div>
        <div className='project-show'>
            <div className='project-links' >
                <button><img src={github}  /></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects
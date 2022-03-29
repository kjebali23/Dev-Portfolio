import React from 'react'
import github from '/Users/khaliljebali/Desktop/dev-portfolio/src/assets/github.png'



const Links = () => {
  return (
    <div className='links-container'>
        <ul>
            <li><img  src={github}/></li>
            <li>Github</li>
            <li>Linkedin</li>
        </ul>    

    </div>
  )
}

export default Links
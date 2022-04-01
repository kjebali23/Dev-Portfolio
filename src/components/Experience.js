import React from 'react'
import ExperienceDetails from '../components/ExperienceDetails'

const Experience = () => {

  return (
//temporary fix needs to change:

    <div className='experience-section'>
        <h3>Experience</h3>
        <div className='role-info' >
        <h3>Levana :  Software developer Intern</h3>
        </div>
    <div className='experience'>
        <div className='bullet-points'>
        <p><span>&#8226;</span>Designed and developed Apex Classes, Controller Classes, Controller Extensions and Apex triggers for various functional needs in the application.</p>
        <p><span>&#8226;</span>Performed the roles of Salesforce.com administrator in the organization.</p>
        <p><span>&#8226;</span>Created and Customized existing Visualforce pages.</p>
        </div>
        </div>

        

        <div className='role-info' >
        <h3>Cloudshift :  Power Apps Developer Intern</h3>
        </div>
    <div className='experience'>
        <div className='bullet-points'>
        <p><span>&#8226;</span>Design, develop, test, integrate and refine Power Apps-based applications and solutions to meet company needs.</p>
        <p><span>&#8226;</span>Assist in designing, developing, managing site content and capabilities, and assist in providing daily maintenance of the Share Point site.</p>
        <p><span>&#8226;</span>Used Microsoft Power Automate to automate notify users of important in app changes.</p>
        </div>
        </div>

        <div className='role-info' >
        <h3>BNP Paribas :  Intern</h3>
        </div>
    <div className='experience'>
        <div className='bullet-points'>
        <p><span>&#8226;</span>Worked on loan contracts for more than 30 client.</p>
        <p><span>&#8226;</span>Managed and shipped loan paperwork.</p>
        <p><span>&#8226;</span>Developed a python script in spare time to scrape emails and populate Microsoft word Forms that helped in reducing work time on various tasks.</p>
        </div>
        </div>

    </div>
  )
}

export default Experience
import React from 'react'
import './InfoSection.css'

const Email = () => {
  return (
      <div className='email-section' >
    <div className='email-section-title' > <h2>Contact me</h2> </div>

    <div className='email-section-container' >
        <form className='email-form'>
            <div className='form-input' >
                <label>Email :</label>
                <input placeholder='Enter your email' />
            </div>
            <div className='form-input' >
                <label>Subject :</label>
                <input placeholder='Subject' />
            </div>
            <div className='form-message' >
                <label>Message :</label>
                <input placeholder='Enter your message'/>
            </div>
            <button>Send</button>
            

        </form>
    </div>
    </div>
  )
}

export default Email
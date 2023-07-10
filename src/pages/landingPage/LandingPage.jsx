import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-container'>
    <div className='landing-main-div'>
        <h1>Gleam</h1>
        <div className='landing-text-div'>
            <p>
            Connect, share, and shine on Gleam - the social media app that lets your true self sparkle.
            </p>
        </div>
        <div className='landing-auth-div'>
        <div>
            <button><Link to="/signup">Create an Account</Link></button>
        </div>
        
        <Link className="landing-login-link"to="/login">Already have an account?</Link>
        </div>
      
    </div>
    </div>
  )
}

export default LandingPage
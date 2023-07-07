import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <h1>Gleam</h1>
        <div>
            <p>
            Connect, share, and shine on Gleam - the social media app that lets your true self sparkle.
            </p>
        </div>

        <div>
            <button><Link to="/signup">Create an Account</Link></button>
        </div>
        <Link to="/login">Already have an account?</Link>
    </div>
  )
}

export default LandingPage
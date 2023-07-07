

import React from 'react'
import SignUp from '../../components/signup/SignUp'
import { Link } from 'react-router-dom'


const SignupPage = () => {
  return (
    <div>
        <SignUp/>
        <Link to="/login">Already have an account?</Link>
    </div>
  )
}

export default SignupPage
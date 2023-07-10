import React from 'react';
import SignUp from '../../components/signup/SignUp';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <SignUp />
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    await login(formData);
    navigate('/home');
  };

  const handleLoginAsAdarshBalika = async () => {
    await login({ username: 'adarshbalika', password: 'adarshBalika123' });
    navigate('/home');
  };


  return (
    <div>
      <form className="login-form" id="loginForm" onSubmit={handleLogin}>
        <label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
        
      </form>
      <button className="login-default"onClick={handleLoginAsAdarshBalika}>Login as adarshbalika</button>
     
    </div>
  );
};

export default Login;

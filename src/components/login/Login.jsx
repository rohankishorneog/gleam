import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'


const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }



  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(formData)
    await login(formData)
    navigate("/home")
  }

  return (
    <div>
      <form id="loginForm"
      onSubmit={handleLogin}>
        <label>
          <input
            type="text"
            placeholder='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login

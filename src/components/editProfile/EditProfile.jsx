 import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router'
 
 const EditProfile = () => {

    const {editUser}=useContext(UserContext)
    const navigate=useNavigate()


    const [formData,setFormData]=useState({
        firstName:""
    })

    const handleChange=(e)=>{
        const { name, value } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await editUser(formData)
        navigate(`/home`)
    }


   return (
     <div>
        <form onSubmit={handleSubmit}>
            <label >
                <input type="text"
                placeholder='first name'
                name='firstName'
                value={formData.name}
                onChange={handleChange}
                 />
                 <button type='submit'>save changes</button>
            </label>
        </form>
     </div>
   )
 }
 
 export default EditProfile
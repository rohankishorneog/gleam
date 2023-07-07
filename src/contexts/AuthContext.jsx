import { createContext, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
        const [loggedInUser, setLoggedInUser]=useState(null)
        

        const signup= async({ 
        
        firstName,
        lastName,
        username,
        password})=>{
          
            try{
            const response= await axios.post(`/api/auth/signup`,{ 
                
                firstName,
                lastName,
                username,
                password})

        
            const { user, encodedToken}= response.data
            
           
            setLoggedInUser(user)
            localStorage.setItem('token',encodedToken)

            }
            catch(error){
                
                alert(error)
            }
        }

        const login= async({userData}) => {

            try {
                const response = await axios.post(`/api/auth/login`, userData)
                const {user, encodedToken}=response.data
                localStorage.setItem('token', encodedToken)
            
                setLoggedInUser(user)
            } catch (error) {
                alert(error)
            }
        }

 return(
    <AuthContext.Provider value={{ loggedInUser, signup, login}}>
        {children}
    </AuthContext.Provider>
 )       





}
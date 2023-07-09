import { createContext, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const signup = async ({ firstName, lastName, username, password }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, { 
        firstName,
        lastName,
        username,
        password
      });
      console.log(response)
      const { createdUser, encodedToken } = response.data;
      
      setLoggedInUser(createdUser); 
      localStorage.setItem('token', encodedToken);
    } catch (error) {
      alert(error);
    }
  };

  const login = async ({ username, password }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username,
        password
      });
      
      const {foundUser, encodedToken } = response.data;
      console.log(foundUser )
      localStorage.setItem('token', encodedToken);
      setLoggedInUser(foundUser ); 
      console.log(loggedInUser);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

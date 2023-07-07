import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const RequiresAuth = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);

  return loggedInUser!==null?children: <span>auth required</span>
};


export default RequiresAuth
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert(error);
      }
    };

    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};

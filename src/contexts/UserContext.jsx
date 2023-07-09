import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser,setSelectedUser]=useState(null)
  
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
  }, [users]);

  const getUserById=async(id)=>{

    try {
        const response = await axios.get(`/api/users/${id}`);
        console.log(response.data.user);
        if (response.status === 200) {
          setSelectedUser(response.data.user);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error);
      }
  }


  const editUser = async (userData) => {
    const token = localStorage.getItem('token');
    console.log(userData);
    try {
      const response = await axios.post(`/api/users/edit`,{ userData}, {
        headers: { authorization: token },
      });
      console.log(response.data.user);
      if (response.status === 201) {
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            return user.id === response.data.user.id? 
             { ...user, ...response.data.user }: user;
          })
        );
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error);
    }
  };



  



  return (
    <UserContext.Provider value={{ users , selectedUser, getUserById,editUser}}>
      {children}
    </UserContext.Provider>
  );
};

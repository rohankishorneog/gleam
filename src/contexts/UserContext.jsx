import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser,setSelectedUser]=useState(null)
  const [bookmarks, setBookmarks] = useState([]);
  
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


  //bookmarks


  const bookmarkPost = async (postId) => {
    console.log(postId)
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`/api/users/bookmark/${postId}`, {}, {
        headers: {
          authorization: token
        }
      });

      console.log(response);

      if (response.status === 200) {
        const updatedBookmarks = response.data.bookmarks;
        setBookmarks(updatedBookmarks);
        console.log(updatedBookmarks);
      }

      // Optionally, you can perform any other actions after bookmarking the post

    } catch (error) {
      // Handle errors
      console.error('Error bookmarking post:', error);
    }
  };


  const removeBookmark = async (postId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.post(`/api/users/remove-bookmark/${postId}`, {}, {
        headers: {
          authorization: token
        }
      });
  
      console.log(response.status);
  
      if (response.status === 200) {
        const updatedBookmarks = response.data.bookmarks;
        setBookmarks(updatedBookmarks);
        console.log(updatedBookmarks);
      }
  
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  };


  const followUser = async (followUserId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.post(`/api/users/follow/${followUserId}`, {}, {
        headers: {
          authorization: token
        }
      });
  
      console.log(response.status);
  
      if (response.status === 200) {
        const { user, followUser } = response.data.data;
        console.log(user);
        console.log(followUser);
    
      }
  
    } catch (error) {

      console.error('Error following user:', error);
    }
  };

  const unfollowUser = async (followUserId) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.post(`/api/users/unfollow/${followUserId}`, {}, {
        headers: {
          authorization: token
        }
      });
  
      console.log(response);
  
      if (response.status === 200) {
        const { user, followUser } = response.data.data;
        console.log(user);
        console.log(followUser);
        // Optionally, you can perform any other actions after unfollowing the user
      }
  
    } catch (error) {
      // Handle errors
      console.error('Error unfollowing user:', error);
    }
  };
  



  




  //follow/unfollow


  



  return (
    <UserContext.Provider value={{ users , selectedUser, getUserById,editUser,bookmarks, bookmarkPost,removeBookmark, followUser, unfollowUser}}>
      {children}
    </UserContext.Provider>
  );
};

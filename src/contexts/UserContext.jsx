import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser,setSelectedUser]=useState(null)
  const [bookmarks, setBookmarks] = useState([]);
  const avatars = {
    avatarOne: "https://robohash.org/avatar1.png",
    avatarTwo: "https://robohash.org/avatar2.png",
    avatarThree: "https://robohash.org/avatar3.png",
    avatarFour: "https://robohash.org/avatar4.png",
    avatarFive: "https://robohash.org/avatar5.png",
    avatarSix: "https://robohash.org/avatar6.png",
    avatarSeven: "https://robohash.org/avatar7.png"
  };
  const defaultAvatar ="https://robohash.org/default.png"
  const {loggedInUser,setLoggedInUser}=useContext(AuthContext)
  
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
    console.log(id)

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
      const response = await axios.post(`/api/users/edit`, { userData }, {
        headers: { authorization: token },
      });
      console.log(response.data.user);
      if (response.status === 201) {
        setLoggedInUser(response.data.user);
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            return user._id === loggedInUser._id ? { ...user, ...response.data.user } : user;
          })
        );
        toast.success("Profile Saved")
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
        toast.success("Bookmark Succesfully Added")
      }

      

    } catch (error) {
     
      toast.error( error);
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
        toast.success("Bookmark removed")
      }
  
    } catch (error) {
      toast.error( error);
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
        const { user, followUser } = response.data;
        console.log(user);
        console.log(followUser);

        toast.success("followed successfully")
    
      }
  
    } catch (error) {

      toast.error('Error following user:', error);
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
        const { user, followUser } = response.data;
        console.log(user);
        console.log(followUser);
        toast.success("unfollowed ")
        
      }
  
    } catch (error) {
      // Handle errors
      toast.error('Error unfollowing user:', error);
    }
  };
  



  




  //follow/unfollow


  



  return (
    <UserContext.Provider value={{ users , selectedUser, getUserById,editUser,bookmarks, bookmarkPost,removeBookmark, followUser, unfollowUser, avatars, defaultAvatar}}>
      {children}
    </UserContext.Provider>
  );
};

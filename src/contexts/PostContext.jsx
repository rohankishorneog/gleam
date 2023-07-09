import axios from "axios";
import { createContext, useEffect, useState} from "react";

export const PostContext=createContext();


export  const PostContextProvider=({children})=>{

    const [posts, setPosts]=useState([])
    const[isLoading, setIsloading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const getPosts=async()=>{

            try {
               const response= await axios.get(`/api/posts`) 
               if(response.status===200){
                setPosts(response.data.posts)
               }else{
                setError(response.message)
               }
    
            } catch (error) {
                setError(error)
            }
            finally{
                setIsloading(false)
            }
        }
        getPosts()
    },[])

    const createPost = async ({ postData: { content } }) => {
       
        const token = localStorage.getItem('token');
      
        try {
          const response = await axios.post(
            '/api/posts',
            {
              postData: {
                content
              }
            },
            {
              headers: {
                authorization: token
              }
            }
          );
          
          if (response.status === 201) {
           
            setPosts(response.data.posts);
          } else {
            setError('response: ' + response);
          }
        } catch (error) {
          setError(error.essage);
        } finally {
          setIsloading(false);
        }
      };
      

        //for likes
        const addLike = async (postId) => {

            
            try {
              const token = localStorage.getItem('token');
          
              const response = await axios.post(`/api/posts/like/${postId}`,{},{
                headers: {
                  authorization: token,
                }
              });
              console.log(response.data);
          
              if (response.status === 201) {
                setPosts(response.data.posts)
              }
            } catch (error) {
              // Handle errors
              console.error('Error adding like:', error);
            }
          };

          //for dislike
          const dislike = async (postId) => {

            
            try {
              const token = localStorage.getItem('token');
          
              const response = await axios.post(`/api/posts/dislike/${postId}`,{},{
                headers: {
                  authorization: token,
                }
              });
              console.log(response.data);
          
              if (response.status === 201) {
                setPosts(response.data.posts)
              }
            } catch (error) {
              // Handle errors
              console.error('Error adding like:', error);
            }
          };

          //edit post
          const editPost = async (postId,postData) => {
                console.log(postId)

                console.log(postData)
            try {
              const token = localStorage.getItem('token');
          
              const response = await axios.post(`/api/posts/edit/${postId}`, {
                postData:postData
              }, {
                headers: {
                  authorization: token,
                }
              });
              
              console.log(response.status);
          
              if (response.status === 201) {
                setPosts(response.data.posts)
              }
              
            } catch (error) {
              // Handle errors
              console.error('Error adding like:', error);
            }
          };

          //delete post
          const deletePost = async (postId) => {
            try {
              const token = localStorage.getItem('token');
              
              const response = await axios.delete(`/api/posts/${postId}`, {
                headers: {
                  authorization: token
                }
              });
          
              console.log(response.status);
          
              if (response.status === 201) {
                setPosts(response.data.posts);
                
              }
            } catch (error) {
              
              console.error('Error deleting post:', error);
            }
          };


    return(
        <PostContext.Provider value={{posts,isLoading,error,createPost,addLike,dislike,editPost,deletePost}}>
            {children}
        </PostContext.Provider>
    )
}

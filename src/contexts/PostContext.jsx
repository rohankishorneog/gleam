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
    },[posts])

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
          
          if (response.status === 200) {
           
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
      
        
    
  


    return(
        <PostContext.Provider value={{posts,isLoading,error,createPost}}>
            {children}
        </PostContext.Provider>
    )
}

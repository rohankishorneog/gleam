import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Bookmark = ({id}) => {
    const {bookmarkPost}=useContext(UserContext)
   const handleClick=(id)=>{
        bookmarkPost(id)
    }
  return (
    <button onClick={()=>handleClick(id)}>Bookmark it</button>
  )
}

export default Bookmark
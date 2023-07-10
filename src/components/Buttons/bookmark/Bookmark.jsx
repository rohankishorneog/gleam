import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { FaBookmark } from 'react-icons/fa'; 
import './Bookmark.css'

const Bookmark = ({ id }) => {
    const { bookmarkPost } = useContext(UserContext)

    const handleClick = (id) => {
        bookmarkPost(id)
    }

    return (
        <button onClick={() => handleClick(id)} className="bookmark-button">
            <FaBookmark className="bookmark-icon" /> 
        </button>
    )
}

export default Bookmark;

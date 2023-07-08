import React from 'react'
import {Link} from 'react-router-dom'

const SideLinks = () => {
  return (
    <div>
        <div>
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/explore">Explore</Link></div>
            <div><Link to="/bookmark">Bookmarks</Link></div>
            <div><Link to="/profile">Profile</Link></div>
            <div><Link to="/createPost">Create</Link></div>
        </div>
        <div></div>
    </div>
  )
}

export default SideLinks
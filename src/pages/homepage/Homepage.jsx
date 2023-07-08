import React from 'react'
import './Homepage.css'
import Posts from '../../components/posts/Posts'
import CreatePost from '../../components/createPost/CreatePost'
import SideLinks from '../../components/sideLinks/SideLinks'

const Homepage = () => {
  return (
    <div className='main-div'>
        <div className='left-section'>
       <SideLinks/>
    </div>
    <div>
        <CreatePost/>
        <Posts/>

    </div>
    
    <div className='right-section'>
    right-section``
    </div>
        
    </div>
    
  )
}

export default Homepage
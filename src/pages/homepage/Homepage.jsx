import React from 'react'
import './Homepage.css'
import Posts from '../../components/posts/Posts'
import CreatePost from '../../components/createPost/CreatePost'
import SideLinks from '../../components/sideLinks/SideLinks'
import Users from '../../components/users/Users'
import Header from '../../components/Header/Header'

const Homepage = () => {
  return (
    <div>
      <Header/>
    <div className='main-div'>
        <div className='left-section'>
       <SideLinks/>
    </div>
    <div className='second-section'>
    <div className='mid-section'>
        <CreatePost/>
        <Posts/>

    </div>
    
    <div className='right-section'>
            <Users/>
    </div>
        
    </div>
    </div>
    </div>
  
    
  )
}

export default Homepage
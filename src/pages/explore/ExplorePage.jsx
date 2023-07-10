import React from 'react'
import Posts from '../../components/posts/Posts'
import SideLinks from '../../components/sideLinks/SideLinks'
import Users from '../../components/users/Users'

const ExplorePage = () => {
  return (
    <div className='main-div'>
        <div className='left-section'>
       <SideLinks/>
    </div>
    <div className='second-section'>
    <div className='mid-section'>
        <Posts/>

    </div>
    
    <div className='right-section'>
            <Users/>
    </div>
        
    </div>
    </div>
  
    
  )
}

export default ExplorePage
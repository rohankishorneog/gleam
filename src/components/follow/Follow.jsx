import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Follow = ({ id }) => {
  const { followUser, unfollowUser } = useContext(UserContext)
  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = (id) => {
    if (isFollowing) {
      // Call the unfollowUser function
      unfollowUser(id)
    } else {
      // Call the followUser function
      followUser(id)
    }
    // Toggle the follow state
    setIsFollowing(!isFollowing)
  }

  return (
    <button onClick={() => handleClick(id)}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default Follow

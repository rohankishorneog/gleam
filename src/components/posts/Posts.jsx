import React, { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const Posts = () => {
    const { posts, isLoading } = useContext(PostContext)

    return isLoading ? (<div>
        Loading
    </div>) : <div>
        {posts.map(post => (
        <div>
            <h3>{post.username}</h3>
            <p>c{post.content}</p>
            <p>
                <span>{post.likes.likeCount}</span>
                
            </p>
            <hr/>
        </div>
        

        ))
        }
    </div>

}

export default Posts
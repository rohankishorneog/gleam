import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const BookmarksPage = () => {
  const { bookmarks , removeBookmark} = useContext(UserContext);

    const handleRemove=(id)=>{
        removeBookmark(id)
    }


  return (
    <div>
        <h1>Bookmarks</h1>
      {bookmarks.map((bookmark) => (
       
        <div key={bookmark._id}>
            { console.log(bookmark._id)}
          <h3>{bookmark.username}</h3>
          <p>{bookmark.content}</p>
          <p>{bookmark.likeCount}</p>
          <button onClick={()=>handleRemove(bookmark._id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default BookmarksPage;

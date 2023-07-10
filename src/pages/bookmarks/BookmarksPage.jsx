import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './BookmarksPage.css'; 
import Header from '../../components/Header/Header';

const BookmarksPage = () => {
  const { bookmarks, removeBookmark } = useContext(UserContext);

  const handleRemove = (id) => {
    removeBookmark(id);
  };

  return (
    <div>
        <Header/>
      <h1>Bookmarks</h1>
      {bookmarks.map((bookmark) => (
        <div key={bookmark._id} className="card">
          <h3 className="card-title">{bookmark.username}</h3>
          <p className="card-content">{bookmark.content}</p>
          <p className="card-like-count">{bookmark.likeCount}</p>
          <button
            className="remove-button"
            onClick={() => handleRemove(bookmark._id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookmarksPage;

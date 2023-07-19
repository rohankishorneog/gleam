import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './BookmarksPage.css'; 
import Header from '../../components/Header/Header';
import SideLinks from '../../components/sideLinks/SideLinks';
import Users from '../../components/users/Users';
// import Header from '../../components/Header/Header';

const BookmarksPage = () => {
  const { bookmarks, removeBookmark } = useContext(UserContext);

  const handleRemove = (id) => {
    removeBookmark(id);
  };

  return (
    <div>
        <Header/> 
        <div className='main-div'> 
          <div className='left-section'>
            <SideLinks/>

          </div>
          <div className='second-section'> 
            <div className='mid-section'>
            <h1>Bookmarks</h1>
                <div className='bookmark-container'>
                        {bookmarks.length!==0?bookmarks.map((bookmark) => (
                          <div key={bookmark._id} className="bookmark-card">
                            <h3 className="bookmark-card-title">{bookmark.username}</h3>
                            <p className="bookmark-card-content">{bookmark.content}</p>
                            <p className="bookmark-card-like-count">{bookmark.likeCount}</p>
                            <button
                              className="remove-button"
                              onClick={() => handleRemove(bookmark._id)}
                            >
                              Remove
                            </button>
                          </div>
                        )):<div className='bookmark-card bookmark-empty'>
                          <p>
                            Please add bookmarks to see here !!!
                          </p>
                          </div>}

            </div>
            </div>
            <div className='right-section'>
              <Users/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BookmarksPage;

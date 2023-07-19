import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import { makeServer } from './server';
import { AuthContextProvider } from './contexts/AuthContext';
import { PostContextProvider } from './contexts/PostContext';
import { UserContextProvider } from './contexts/UserContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <PostContextProvider>
          <Router>
            <App />
          </Router>
        </PostContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

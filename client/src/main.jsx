import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContext } from './UserContext';
import { MyMountainsContext } from './components/mountainsDisplay/MyMountainsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <MyMountainsContext>
        <App />
      </MyMountainsContext>
    </UserContext>
  </React.StrictMode>,
);

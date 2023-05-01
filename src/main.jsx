import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// import router
import { BrowserRouter } from 'react-router-dom';

// import context
import HouseContextProvider from './context/HouseContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HouseContextProvider>
);

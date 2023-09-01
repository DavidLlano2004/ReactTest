import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './hooks/Context/ApiContext';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider><App /></ApiProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);
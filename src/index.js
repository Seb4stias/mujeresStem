import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // seba wok, sin esta linea el codigo no sirve 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


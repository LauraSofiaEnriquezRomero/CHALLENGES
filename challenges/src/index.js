import React from 'react';
import ReactDOM from 'react-dom/client';
import App from'./App';
import ComponentApp from './ComponentApp';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ComponentApp /> 
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
// import './App.css' 
import './index.css' 

// import App from './App.jsx';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bọc Provider ngoài cùng để phân phối dòng điện Redux/RTK Query toàn app */}
      {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

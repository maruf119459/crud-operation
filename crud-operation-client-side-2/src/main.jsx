import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Users.jsx';
import UpdateUsers from './UpdateUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/users",
    element:<Users/>,
    loader:()=> fetch('http://localhost:5000/users')
  },
  {
    path:"/update-users/:id",
    element:<UpdateUsers/>,
    loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

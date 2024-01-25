import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './componants/About/About.jsx';
import Contract from './componants/Contact/Contract.jsx';
import Home from './componants/Home/Home.jsx';
import Users from './componants/users/user.jsx';
import UserDetails from './componants/users/userDetails.jsx';
import Post from './componants/Post/post.jsx';
import PostDetails from './componants/Post/Postdetails.jsx';
import Error from './componants/ErorrPage/Error.jsx';


const router = createBrowserRouter([

  
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/contact",
    
        element: <Contract></Contract>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
       //  data loading
      {
        path: "/user",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users') ,
        element: <Users></Users>,
      },

      // dynamic data loading
      {
        path: "/user/:userId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },

      {
        path: '/post',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Post></Post>
      }
      ,
      {
        path: '/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        element:<PostDetails></PostDetails>
      }
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>,
)

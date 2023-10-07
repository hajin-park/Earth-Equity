import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import { Layout} from "./utils/layouts.jsx";
import Covid from "./Pages/Covid/Covid";
import Home from "./Pages/Home/Home";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/covid",
            element: <Covid />,
        }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)

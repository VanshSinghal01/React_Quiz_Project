import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Two from './2nd.jsx'
import Three from './3rd.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

let data =createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/2nd",
    element:<Two/>
  },
  {
    path:"/3rd",
    element:<Three/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={data}>
    <App/>
  </RouterProvider>
)

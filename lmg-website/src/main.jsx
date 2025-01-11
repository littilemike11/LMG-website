import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import WebGamesPage from './components/WebGamesPage.jsx';
import DeveloperNotesPage from './components/DeveloperNotesPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import WheresOne from './webGames/WheresOne/WheresOne.jsx';
import NoEsc from './webGames/NoEsc/NoEsc.jsx';
import NerdBowl from './webGames/NerdBowl/NerdBowl.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/WebGames',
    element: <WebGamesPage />,
  },
  {
    path: '/Extra',
    element: <DeveloperNotesPage />
  },
  {
    path: '/Credits',
    element: <AboutPage />
  },
  // webgame pgs
  {
    path:'/WheresOne',
    element:<WheresOne/>
  },
  {
    path:'/NoEsc',
    element:<NoEsc/>
  },
  {
    path:'/NerdBowl',
    element:<NerdBowl/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

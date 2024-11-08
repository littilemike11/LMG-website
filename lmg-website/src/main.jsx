import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import WebGamesPage from './components/WebGamesPage.jsx';
import DeveloperNotesPage from './components/DeveloperNotesPage.jsx';
import AboutPage from './components/AboutPage.jsx';

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createAchievements } from '/src/data/achievements.js'
import WebGamesPage from './components/WebGamesPage.jsx';
import AchievementsPage from './components/AchievementsPage.jsx'
import DeveloperNotesPage from './components/DeveloperNotesPage.jsx';
import SettingsPage from './components/SettingsPage.jsx'
import AboutPage from './components/AboutPage.jsx';
import WheresOne from './webGames/WheresOne/WheresOne.jsx';
import NoEsc from './webGames/NoEsc/NoEsc.jsx';
import NerdBowl from './webGames/NerdBowl/NerdBowl.jsx';
import DoYouTube from './webGames/DoYouTube/DoYouTube.jsx'
import ChainGame from './webGames/ChainGame/ChainGame.jsx';

// Initialize achievements and themes globally
const initializeStorage = () => {
  if (!localStorage.getItem("achievements")) {
    createAchievements();
  }

  if (!localStorage.getItem("unlockedThemes")) {
    localStorage.setItem("unlockedThemes", JSON.stringify(["default", "light", "dark"]));
  }
};
initializeStorage()

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
    path: '/Achievements',
    element: <AchievementsPage />
  },
  {
    path: '/Extra',
    element: <DeveloperNotesPage />
  },
  {
    path: '/Settings',
    element: <SettingsPage />
  },
  {
    path: '/Credits',
    element: <AboutPage />
  },
  // webgame pgs
  {
    path: '/WheresOne',
    element: <WheresOne />
  },
  {
    path: '/NoEsc',
    element: <NoEsc />
  },
  {
    path: '/NerdBowl',
    element: <NerdBowl />
  },
  {
    path: '/DoYouTube',
    element: <DoYouTube />
  },
  {
    path: '/ChainGame',
    element: <ChainGame />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

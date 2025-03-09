import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import WebGamesPage from './components/WebGamesPage.jsx';
import AchievementsPage from './components/AchievementsPage.jsx';
import DeveloperNotesPage from './components/DeveloperNotesPage.jsx';
import SettingsPage from './components/SettingsPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import WheresOne from './webGames/WheresOne/WheresOne.jsx';
import NoEsc from './webGames/NoEsc/NoEsc.jsx';
import NerdBowl from './webGames/NerdBowl/NerdBowl.jsx';
import DoYouTube from './webGames/DoYouTube/DoYouTube.jsx';
import ChainGame from './webGames/ChainGame/ChainGame.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/WebGames" element={<WebGamesPage />} />
        <Route path="/Achievements" element={<AchievementsPage />} />
        <Route path="/Extra" element={<DeveloperNotesPage />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/Credits" element={<AboutPage />} />
        <Route path="/WheresOne" element={<WheresOne />} />
        <Route path="/NoEsc" element={<NoEsc />} />
        <Route path="/NerdBowl" element={<NerdBowl />} />
        <Route path="/DoYouTube" element={<DoYouTube />} />
        <Route path="/ChainGame" element={<ChainGame />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

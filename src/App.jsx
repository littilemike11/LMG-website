import './App.css';
import ArcadeBG from './components/ArcadeBG';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import WebGamesPage from "./components/WebGamesPage";
import PageTitle from './components/PageTitle';
import GameItem from './components/GameItem';
import catalogue from './data/games.jsx';
import { useState, useRef } from 'react';
function App() {
  const [activeGame, setActiveGame] = useState(null);
  const modalRef = useRef(null);

  const openModal = (game) => {
    setActiveGame(game);
    // Open modal on next animation frame
    requestAnimationFrame(() => {
      modalRef.current?.showModal();
    });
  };

  const closeModal = () => {
    modalRef.current?.close();
    setActiveGame(null);
  };
  return (
    <>
      <NavBar />
      {/* <Hero /> */}

      <PageTitle title="Web Game Hub" />
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Browse and play mobile or pc games</h2>

      <ul className="bg-base-100 mb-10 grid grid-cols-1 justify-items-center items-center gap-x-10 gap-y-14 sm:gap-y-5 m-auto sm:p-10 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 ">
        {catalogue.map((game) => (
          <li key={game.id}>
            {/* Pass openModal to GameItem */}
            <GameItem game={game} onInfoClick={openModal} />
          </li>
        ))}
      </ul>

      {/* Single modal shared by all games */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        {activeGame && (
          <div className="modal-box max-w-lg">
            <h3 className="font-bold text-lg mb-2">About {activeGame.title}</h3>
            <div className="text-left text-pretty max-h-64 overflow-auto">{activeGame.info}</div>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>

      <Footer />

    </>
  );
}

export default App;

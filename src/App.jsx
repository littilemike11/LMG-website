import './App.css';
import ArcadeBG from './components/ArcadeBG';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import WebGamesPage from "./components/WebGamesPage";
import PageTitle from './components/PageTitle';
import GameItem from './components/GameItem';
import catalogue from './data/games';
function App() {
  return (
    <>
        <NavBar/>
          {/* <Hero /> */}
  
                 
                <PageTitle title="The Start of a Bountiful Collection ..." />
                
                <ul className="bg-base-100 mb-10 grid grid-cols-1 justify-items-center items-center gap-x-10 gap-y-14 sm:gap-y-5 m-auto sm:p-10 sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 ">
                    {catalogue.map(game=>(
                        <li key={game.id}>
                          <GameItem game={game}/>
                          </li>
                    ))}
                    
                </ul>
            
          <Footer />
    
    </>
  );
}

export default App;

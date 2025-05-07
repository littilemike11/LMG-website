import './App.css';
import ArcadeBG from './components/ArcadeBG';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WebGamesPage from "./components/WebGamesPage";

function App() {
  return (
    <>
    <ArcadeBG
      content={
        <div>
          <Hero />
          <WebGamesPage />
          <Footer />
        </div>
      }
    />
    
    
    </>
  );
}

export default App;

import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero';
import WebGamesPage from "./components/WebGamesPage"
import catalogue from './data/games';
function App() {

  return (
    <>
        <Hero/>  
        <WebGamesPage/>    
        <Footer />     

      <div className="min-h-screen w-full bg-black flex items-center justify-center p-10">
      <div className="z-40 inset-0 fixed rounded-3xl border-8 border-pink-600 shadow-[0_0_40px_#ff00ff] w-full overflow-hidden">

        {/* Scanlines */}
        {/* <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[linear-gradient(transparent_95%,#ff00ff_96%)] bg-[length:100%_2px]"></div> */}
        {/* <div className="absolute inset-0 z-10 pointer-events-none scanlines"></div> */}


        {/* Header */}
        <div className=" z-40 text-center text-white mb-6">
            <header className="bg-gradient-to-r from-pink-500 to-purple-700 py-6 text-center shadow-lg ">
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest neon-glow">
                LMG Arcade
              </h1>
              <p className="text-xl mt-2 text-gray-200">
              Learn · Make · Game
              </p>
            </header>
          
        </div>

        {/* Fake Buttons */}
        {/* <div className="flex justify-center absolute bottom-0 gap-4">
          <div className="w-8 h-8 bg-red-600 rounded-full shadow-lg"></div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full shadow-lg"></div>
        </div> */}
        </div>
        </div>


    </>
  )
}

export default App

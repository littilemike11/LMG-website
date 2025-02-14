import './App.css'
import Footer from './components/Footer'
import TitleScreenLinks from './components/TitleScreenLinks'
function App() {


  return (
    <>
      <div className=' bgContainer'>
        <div className="flex flex-col justify-end items-end w-full h-full ">
          <ul className="mr-6 mb-12 menu menu-vertical rounded-box">
            <TitleScreenLinks
              link={"/WebGames"}
              title="Start Game"
              delayTime={0}
            />
            <TitleScreenLinks
              link={"/Extra"}
              title="Extra"
              delayTime={.3}
            />
            <TitleScreenLinks
              link={"/Settings"}
              title="Settings"
              delayTime={.6}
            />
            <TitleScreenLinks
              link={"/Credits"}
              title="Credits"
              delayTime={.9}
            />
          </ul>
        </div>
        <div className='absolute bottom-0 left-0'>
          <Footer />
        </div>

      </div>

    </>
  )
}

export default App

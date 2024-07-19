import { Link } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <div className='relative bgContainer'>
        <div className="absolute lg:inset-x-0 lg:bottom-10 right-0 bottom-52 w-48 lg:w-full h-16 ...">
          <ul className=" text-2xl font-bold text-slate-950 gap-x-64 menu menu-vertical lg:menu-horizontal rounded-box">
            <li className='hover:scale-110'>
              <Link to="/WebGames">Start Game</Link>
            </li>
            <li className='hover:scale-110'>
              <Link to="/Extra">Extra</Link>
            </li>
            <li className='hover:scale-110'>
              <Link to="/Credits">Credits</Link>
            </li>
          </ul>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App

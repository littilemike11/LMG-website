import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">LMG</h1>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <Link to="/WebGames">Start Game</Link>
        </li>
        <li>
          <Link to="/Extra">Extra</Link>
        </li>
        <li>
          <Link to="/Credits">Credits</Link>
        </li>
      </ul>
    </>
  )
}

export default App

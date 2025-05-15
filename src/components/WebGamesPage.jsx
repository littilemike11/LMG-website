import NavBar from "./NavBar";
import Sidebar from "./Sidebar"
import Footer from "./Footer.jsx"
import PageTitle from "./PageTitle.jsx"
// import "../webgamepg.css"

import catalogue from "../data/games.js";
import GameItem from "./GameItem.jsx";
export default function WebGamesPage() {

    return (
        <>
            {/* can have a banner for new games */}

            {/* <NavBar /> */}
            <div>
                 <div className="">
                <PageTitle title="The Start of a Bountiful Collection ..." />
                </div>
                <div className="bg-base-100 grid grid-cols-1 justify-items-center items-center gap-x-10 gap-y-14 sm:gap-y-5 m-auto sm:p-10 sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 ">
                    {catalogue.map(game=>(
                        <GameItem key={game.id} game={game}/>
                    ))}
                    
                </div>
            </div>
           

            {/* <Sidebar catalogue={catalogue}/> */}
            
        </>
    )
}
import NavBar from "./NavBar";
import Sidebar from "./Sidebar"
import Footer from "./Footer.jsx"
import PageTitle from "./PageTitle.jsx"
import "../webgamepg.css"

import catalogue from "../data/games.jsx";
import GameItem from "./GameItem.jsx";
export default function WebGamesPage() {

    return (
        <>
            {/* can have a banner for new games */}

            {/* <NavBar /> */}
            <div className="flex lg:ml-6 justify-center lg:justify-start">
                <PageTitle title="The Start of a Bountiful Collection ..." />
            </div>
            <div className="bg-base-100 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3 place-items-center">
                {catalogue.map(game=>(
                    <GameItem key={game.id} game={game}/>
                ))}

            </div>

            {/* <Sidebar catalogue={catalogue}/>
            <Footer /> */}
        </>
    )
}
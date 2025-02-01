import NavBar from "./NavBar";
import Sidebar from "./Sidebar"
import "../webgamepg.css"

import catalogue from "../data/games.jsx";
export default function WebGamesPage() {

    return (
        <>
            {/* can have a banner for new games */}

            <NavBar />
            <div className="webGamePage ">
                <div className="flex lg:ml-6 text-3xl justify-center lg:justify-start">
                    <p>The Start of a Bountiful Collection ...</p>
                </div>

                <Sidebar
                    catalogue={catalogue}
                />

            </div>
        </>
    )
}
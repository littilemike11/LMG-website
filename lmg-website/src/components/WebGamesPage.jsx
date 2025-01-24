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
                <Sidebar
                    catalogue={catalogue}
                />

            </div>
        </>
    )
}
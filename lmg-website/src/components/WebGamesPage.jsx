import NavBar from "./NavBar";
import Sidebar from "./Sidebar"
import "../webgamepg.css"
import GameShowcase from "./GameShowcase";

import UnderConstruction from "../assets/webGameIcons/UnderConstruction.jpg"
import WheresOneIcon from "../assets/webGameIcons/WheresOneIcon.jpg"

export default function WebGamesPage() {
    let catalogue = [
        {
            id: "WheresOne",
            Title: "Where's 1",
            img: WheresOneIcon,
            summary: "wheres 1 summary"
        },
        {
            id: "AbsurdApp",
            Title: "Absurd App",
            img: UnderConstruction,
            summary: "Absurd summary"
        }
    ]
    return (
        <>
            {/* can have a banner for new games */}

            <NavBar />

            <div className="webGamePage relative px-[2rem]">
                <h1 className="text-3xl my-4">Game Select</h1>
                <Sidebar
                    titles={catalogue.map((game, index) => (
                        <li key={index}><a href={`#${game.id}`} >{game.Title}</a></li>
                    ))}
                />
                <GameShowcase
                    catalogue={catalogue}
                />
            </div>
        </>
    )
}
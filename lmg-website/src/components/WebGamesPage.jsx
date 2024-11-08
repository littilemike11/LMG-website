import NavBar from "./NavBar";
import Sidebar from "./Sidebar"
import "../webgamepg.css"

import UnderConstruction from "../assets/webGameIcons/UnderConstruction.jpg"
import WheresOneIcon from "../assets/webGameIcons/WheresOneIcon.jpg"

export default function WebGamesPage() {
    let catalogue = [
        {
            id: "WheresOne",
            title: "Where's 1",
            img: WheresOneIcon,
            summary: "wheres 1 summary"
        },
        {
            id: "AbsurdApp",
            title: "Absurd App",
            img: UnderConstruction,
            summary: "Absurd summary"
        }
    ]
    
    
    return (
        <>
            {/* can have a banner for new games */}

            <NavBar />

            <div className="webGamePage px-[2rem]">
                <h1 className="text-3xl my-4">Game Select</h1>
                <Sidebar
                    catalogue={catalogue}
                />

            </div>
        </>
    )
}
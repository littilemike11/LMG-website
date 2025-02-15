import NavBar from "./NavBar";
import Sidebar from "./Sidebar"
import Footer from "./Footer.jsx"
import PageTitle from "./PageTitle.jsx"
import "../webgamepg.css"

import catalogue from "../data/games.jsx";
export default function WebGamesPage() {

    return (
        <>
            {/* can have a banner for new games */}

            <NavBar />
            <div className="flex lg:ml-6 justify-center lg:justify-start">
                <PageTitle title="The Start of a Bountiful Collection ..." />
            </div>

            <Sidebar
                catalogue={catalogue}
            />
            <Footer />
        </>
    )
}
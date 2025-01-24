import LMG from "../../components/game-components/LMG"
import "../../game.css"
import CategorySelect from "../../components/game-components/CategorySelect"
import videoCategories from "./youtubeCategories"
import { useState } from "react"
export default function DoYouTube() {
    const [categoryID, setCategoryID] = useState("")
    const [gameState, setGameState] = useState("Menu")
    const playGame = () => {
        if (categoryID) {
            setGameState("Playing")
        }
    }

    return (
        <>
            <div className="Game">
                <LMG />
                {gameState == "Menu" &&
                    <CategorySelect
                        categories={videoCategories}
                        categoryID={categoryID}
                        setCategoryID={setCategoryID}
                        playGame={playGame}
                    />
                }
                <div className="flex w-full flex-col lg:flex-row">

                    <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
                        content
                    </div>
                    <div className="divider lg:divider-horizontal">vs</div>
                    <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
                        content
                    </div>
                </div>
            </div>
        </>
    )
}
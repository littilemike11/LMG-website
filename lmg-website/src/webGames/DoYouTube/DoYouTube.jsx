import LMG from "../../components/game-components/LMG"
import "../../game.css"
import CategorySelect from "../../components/game-components/CategorySelect"
import videoCategories from "./youtubeCategories"
import { useState } from "react"
import VideoHalf from "./VideoHalf"
export default function DoYouTube() {
    const [categoryID, setCategoryID] = useState("")
    const [gameState, setGameState] = useState("Menu")
    const [score, setScore] = useState(0)
    const apikey = import.meta.env.VITE_API_KEY
    console.log(apikey)
    //round num is score +1
    const playGame = () => {
        if (categoryID) {
            setGameState("Playing")
        }
    }
    const submitAnswer = (answer) => {
        //if answer correct
        console.log(answer)

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
                {
                    gameState == "Playing" &&
                    (
                        <div>

                            <p>Score:  {score}</p>
                            <p>Round Number: {score + 1}</p>
                        </div>
                    )
                }
                <div className="flex w-full h-[80vh] flex-col lg:flex-row">

                    <VideoHalf
                        isRight={false}

                    />
                    <div className="divider lg:divider-horizontal">vs</div>
                    <VideoHalf
                        isRight={true}
                        submitAnswer={submitAnswer}
                    />
                </div>
            </div>
        </>
    )
}
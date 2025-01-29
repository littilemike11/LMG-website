import LMG from "../../components/game-components/LMG"
import "../../game.css"
import CategorySelect from "../../components/game-components/CategorySelect"
import videoCategories from "./youtubeCategories"
import { useState } from "react"
import VideoHalf from "./VideoHalf"
import axios from "axios"
import EndScreen from "./EndScreen"
export default function DoYouTube() {
    const [categoryID, setCategoryID] = useState("")
    const [gameState, setGameState] = useState("Menu")
    const [score, setScore] = useState(0)
    const [round, setRound] = useState(0)
    const [videos, setVideos] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const apiKey = import.meta.env.VITE_API_KEY
    //round num is score +1
    const playGame = async () => {
        if (!categoryID) return
        setGameState("Playing")
        await fetchData();
    }
    const wait = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

    const revealAnswer = async () => {
        console.log("Waiting...");
        setSubmitted(true)
        await wait(1000); // Waits 1 second
        console.log("Done waiting!");
        setSubmitted(false)
    }
    const submitAnswer = async (answer) => {
        console.log(answer ? "i think its higher" : "i think its lower")
        let isHigher = Number(videos[round + 1].statistics.viewCount) >= Number(videos[round].statistics.viewCount)
        //if answer correct
        console.log("right video views: " + videos[round + 1].statistics.viewCount + " left video views: " + videos[round].statistics.viewCount)
        console.log(isHigher ? " right was higher" : "right was lower")
        if (isHigher == answer) {
            setScore(prev => prev + 1)
        }
        else {
            await revealAnswer();
            endGame();
            return;
        }
        await revealAnswer();
        if (round >= videos.length - 2) {
            endGame();
        } else {
            // setSubmitted(false); // Reset `submitted` at the start of the new round
            setRound(prev => prev + 1)

        }


    }
    //Fisher-Yates Shuffle
    function shuffle(array) {
        let m = array.length,
            t,
            i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        //may not need to return
        return array;
    }

    async function fetchData() {
        try {
            let url =
                "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=" +
                categoryID +
                "&key=" +
                apiKey;
            let response = await axios.get(url);
            console.log(response.data)
            setVideos(shuffle(response.data.items))
            console.log(response.data.items)
        }
        catch (error) {
            console.log(error)
        }
    }
    const endGame = () => {
        setGameState("End")
    }
    //reset game variables
    const resetGame = () => {
        setScore(0)
        setRound(0)
    }

    //  go to 1st question
    function restartQuiz() {
        resetGame();
        //shuffle videos to save on api calls
        setVideos(prev => shuffle(prev))
        setGameState("Playing")

    }
    //go back to category select screen
    function changeCategory() {
        resetGame();
        setGameState("Menu")
    }
    return (
        <>
            <div className="Game">
                <LMG />
                {gameState == "Menu" &&
                    <div>
                        <h1 className="text-5xl font-serif m-4">Do YouTube?</h1>
                        <CategorySelect
                            categories={videoCategories}
                            categoryID={categoryID}
                            setCategoryID={setCategoryID}
                            playGame={playGame}
                        />
                    </div>

                }
                {
                    gameState == "Playing" &&
                    (
                        <div>
                            <div >
                                <p>Score:  {score}</p>
                                <p>Round Number: {round + 1}</p>
                            </div>
                            <div className="flex w-full h-[80vh] flex-col lg:flex-row">
                                <VideoHalf
                                    isRight={false}
                                    videos={videos}
                                    round={round}
                                    submitted={submitted}
                                    submitAnswer={submitAnswer}

                                />
                                <div className="divider lg:divider-horizontal">vs</div>
                                <VideoHalf
                                    isRight={true}
                                    videos={videos}
                                    round={round}
                                    submitted={submitted}
                                    submitAnswer={submitAnswer}

                                />
                            </div>
                        </div>

                    )
                }
                {gameState == "End" &&
                    < EndScreen
                        score={score}
                        round={videos.length}
                        submitted={submitted}
                        restartQuiz={restartQuiz}
                        changeCategory={changeCategory}
                    />
                }

            </div>
        </>
    )
}
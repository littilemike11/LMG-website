import LMG from "../../components/game-components/LMG"
import ToolTip from "../../components/game-components/ToolTip"
import "../../game.css"
import CategorySelect from "../../components/game-components/CategorySelect"
import videoCategories from "./youtubeCategories"
import { useState } from "react"
import { unlockAchievement, isUnlocked } from '/src/data/achievements';
import Banner from '/src/components/Banner';
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
    const [achievements, setAchievements] = useState([])
    const [isCorrect, setIsCorrect] = useState(null)
    const [userChoice, setUserChoice] = useState(null);


    const apiKey = import.meta.env.VITE_API_KEY

    const playGame = async () => {
        if (!categoryID) return
        setGameState("Playing")
        await fetchData();
    }
    const wait = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

    const revealAnswer = async () => {

        setSubmitted(true)
        await wait(1500); // Waits 1 second

        setSubmitted(false)
    }
    const submitAnswer = async (answer) => {
        setUserChoice(answer); // store the user's selected side

        let isHigher = Number(videos[round + 1].statistics.viewCount) >= Number(videos[round].statistics.viewCount)
        //if answer correct
        if (isHigher == answer) {
            setScore(prev => prev + 1)
            setIsCorrect(true)
        }
        else {
            setIsCorrect(false)
            await revealAnswer();
            endGame();
            return;
        }
        await revealAnswer();
        setIsCorrect(null)
        setUserChoice(null); // reset for next round

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
            setVideos(shuffle(response.data.items))

        }
        catch (error) {
            console.log(error)
        }
    }
    const endGame = () => {
        setGameState("End")
        //set achievements 
        let unlockedAchievements = []
        if (!isUnlocked(3)) {
            unlockedAchievements.push(unlockAchievement(3))
        }
        if (!isUnlocked(4) && (round >= videos.length - 2)) {
            unlockedAchievements.push(unlockAchievement(4))
        }
        setAchievements(unlockedAchievements);
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
                {/* show achievements */}
                <div className="toast z-50 flex flex-col gap-2">
                    {achievements.map((achievement, index) => (
                        <Banner key={index} achievement={achievement} />
                    ))}
                </div>
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
                            {/* <ToolTip
                                tip={"Determine if the youtube video on the Right(PC)/Bottom(Mobile) has more views than the video on the Left(PC)/Top(Mobile)"}
                                direction={"tooltip-bottom"}
                            /> */}
                            <p className="text-xl sm:text-2xl font-semibold mb-4">Click on the video with more views</p>
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
                                    isCorrect={isCorrect}
                                    selected={userChoice === false}

                                />
                                <div className="divider lg:divider-horizontal text-2xl font-bold text-center text-base-content">
                                    {!submitted ? "vs" : isCorrect ? "✔️" : "❌"}
                                </div>
                                <VideoHalf
                                    isRight={true}
                                    videos={videos}
                                    round={round}
                                    submitted={submitted}
                                    submitAnswer={submitAnswer}
                                    isCorrect={isCorrect}
                                    selected={userChoice === true}
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
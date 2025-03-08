import { useEffect, useState } from "react";
import LMG from "../../components/game-components/LMG"
import "../../game.css"
import axios from "axios";
import CategorySelect from "../../components/game-components/CategorySelect";
import { unlockAchievement, isUnlocked } from '/src/data/achievements';
import Banner from '/src/components/Banner';
import GameScreen from "./GameScreen";
import EndScreen from "./EndScreen";
// achievements = perfect score on quiz categories
export default function NerdBowl() {
    const [score, setScore] = useState(0) //keep track of player score
    const [questionCount, setQuestionCount] = useState(0)//keeps track which question # user on
    const [questions, setQuestions] = useState([])//store data from api
    const [selectedAnswer, setSelectedAnswer] = useState(false)
    // const [uri, setUri] = useState("") // url to call api
    const [categoryID, setCategoryID] = useState("") // state of user selected category
    const [categories, setCategories] = useState([])
    const [startGame, setStartGame] = useState(false);
    const [endGame, setEndGame] = useState(false)
    // states used to prevent shuffling after selecting answer
    const [answerChoices, setAnswerChoices] = useState([])
    // depending on user category choice, return corresponding url
    const [achievements, setAchievements] = useState([])

    async function playGame() {
        if (!categoryID) return
        let uri = createApi();
        await fetchData(uri);
    }
    const fetchCategories = async () => {
        const response = await axios.get("https://opentdb.com/api_category.php")
        setCategories(response.data.trivia_categories)
    }
    //get all categories at pg load
    useEffect(() => {
        fetchCategories();
    }, [])
    function createApi() {
        let url =
            "https://opentdb.com/api.php?amount=10&category=" + categoryID;
        console.log(url);
        return url
    }
    async function fetchData(uri) {
        try {
            //const response = await axios.get(uri);
            const response = await axios.get(uri);
            console.log(response.data)
            // Define the order of difficulty
            const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
            // Sort the array based on difficulty
            response.data.results.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
            questions.sort
            //for each element in results copy it into question array
            //api results and questions arr should be same
            setQuestions(response.data.results)
            setStartGame(true)
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    function submitAnswer(answer) {
        if (selectedAnswer) return;
        setSelectedAnswer(true)
        //give a point if correct
        if (answer) {
            setScore(prev => prev + 1)
            return true // return true if correct otherwise return false
        }
        return false

    }
    const nextQuestion = () => {
        //go to next question
        setQuestionCount(prev => prev + 1)
        //reset answer
        setSelectedAnswer(false)
        setAnswerChoices([])
        // setUserAnswer("")
        if (questionCount >= 9) {
            finishGame();
        }
    }
    const finishGame = () => {
        setEndGame(true)
        //set achievements 
        let unlockedAchievements = []
        if (!isUnlocked(5)) {
            unlockedAchievements.push(unlockAchievement(5))
        }
        if (!isUnlocked(6) && score >= 10) {
            unlockedAchievements.push(unlockAchievement(6))
        }
        setAchievements(unlockedAchievements);
    }
    //reset game variables
    const resetGame = () => {
        setScore(0)
        setQuestionCount(0)
    }

    // new api call
    //  go to 1st question
    async function restartQuiz() {
        resetGame();
        await playGame();
        setEndGame(false)

    }
    //go back to category select screen
    function changeCategory() {
        resetGame();
        setStartGame(false)
        setEndGame(false)
    }

    return (
        <>
            <div className="Game">
                <LMG />

                <h1 className="text-5xl font-serif m-4">Nerd Bowl</h1>
                {!startGame && !endGame &&
                    <CategorySelect
                        categories={categories}
                        setCategoryID={setCategoryID}
                        playGame={playGame}
                        categoryID={categoryID}
                    />
                }
                {startGame && !endGame &&
                    <GameScreen
                        score={score}
                        questions={questions}
                        questionCount={questionCount}
                        selectedAnswer={selectedAnswer}
                        submitAnswer={submitAnswer}
                        nextQuestion={nextQuestion}
                        answerChoices={answerChoices}
                        setAnswerChoices={setAnswerChoices}
                        setEndGame={setEndGame}
                        quit={changeCategory}
                    />
                }
                {
                    endGame &&
                    <EndScreen
                        score={score}
                        restartQuiz={restartQuiz}
                        changeCategory={changeCategory}
                    />
                }
                <div className="mt-6">
                    <p>Special Thanks to <a className="underline italic" target="_blank" href="https://opentdb.com/">Open Trivia Database</a> for all the questions!</p>
                </div>
                {/* show achievements */}
                <div className="toast z-50 flex flex-col gap-2">
                    {achievements.map((achievement, index) => (
                        <Banner key={index} achievement={achievement} />
                    ))}
                </div>

            </div>
        </>
    )
}
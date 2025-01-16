import { useState } from "react";
import LMG from "../../components/game-components/LMG"
import "../../game.css"
import axios from "axios";
import CategorySelect from "./CategorySelect";
import GameScreen from "./GameScreen";
import EndScreen from "./EndScreen";
// achievements = perfect score on quiz categories
export default function NerdBowl() {
    const [score, setScore] = useState(0) //keep track of player score
    const [questionCount, setQuestionCount] = useState(0)//keeps track which question # user on
    const [questions, setQuestions] = useState([])//store data from api
    const [selectedAnswer, setSelectedAnswer]= useState(false)
    // const [uri, setUri] = useState("") // url to call api
    const [categoryID, setCategoryID] = useState("") // state of user selected category
    const [startGame, setStartGame] = useState(false);
    const [endGame,setEndGame] = useState(false)
    // states used to prevent shuffling after selecting answer
    const [answerChoices, setAnswerChoices] = useState([])
    // depending on user category choice, return corresponding url
    
    async function playGame(){
        if(!categoryID) return
        console.log(categoryID)
        let uri = createApi();
        await fetchData(uri);
    }
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
        if(selectedAnswer)return ;
        setSelectedAnswer(true)
        //give a point if correct
        if (answer) {
            setScore(prev => prev + 1)
            return true // return true if correct otherwise return false
        }
        return false
        
    }
    const nextQuestion = ()=>{
        //go to next question
        setQuestionCount(prev => prev + 1)
        //reset answer
        setSelectedAnswer(false)
        setAnswerChoices([])
        // setUserAnswer("")
        if(questionCount>=9){
            setEndGame(true)
        }
    }
    
    //reset game variables
    const resetGame = ()=>{
        setScore(0)
        setQuestionCount(0)
    }

    // new api call
    //  go to 1st question
    async function restartQuiz(){
        resetGame();
        await playGame();
        setEndGame(false)

    }
    //go back to category select screen
    function changeCategory(){
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
                        setCategoryID={setCategoryID}
                        playGame={playGame}
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
                

            </div>
        </>
    )
}
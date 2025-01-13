import { useState } from "react";
import LMG from "../../components/game-components/LMG"
import "../../game.css"
import axios from "axios";
import CategorySelect from "./CategorySelect";
import GameScreen from "./GameScreen";
export default function NerdBowl() {
    const [score, setScore] = useState(0) //keep track of player score
    const [questionCount, setQuestionCount] = useState(0)//keeps track which question # user on
    const [userAnswer, setUserAnswer] = useState("") //stores user current answer
    const [correctAnswer, setCorrectAnswer] = useState("") //store correct answer from api
    const [questions, setQuestions] = useState([])//store data from api
    const [question, setQuestion] = useState({})
    const [uri, setUri] = useState("") // url to call api
    const [categoryID, setCategoryID] = useState("") // state of user selected category
    const [startGame, setStartGame] = useState(false);
    // states used to prevent shuffling after selecting answer
    const [answerChoices, setAnswerChoices] = useState([])
    async function fetchData(Category) {

        try {
            //const response = await axios.get(uri);
            const response = await axios.get("https://opentdb.com/api.php?amount=10&category=31");
            console.log(response.data.results)
            //for each element in results copy it into question array
            //api results and questions arr should be same
            setQuestions(response.data.results)
            console.log(questions);
            setQuestion(questions[questionCount])
            console.log(question)
            // //   console.log(response.data.results[0].question);
            // //   console.log(response.data.results[0].correct_answer);
            // correctAnswer = questions[0].correct_answer;
            // //setting question text to the question on api
            // //innerhtml used to make text more readable ( instead of &quot)
            // questionText.innerHTML = questions[0].question;
            // questionCounter.textContent = "1.";
            setStartGame(true)
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        //console.log(response.data);
    }

    function submitAnswer() {
        console.log(questions[questionCount].correct_answer)
        console.log(userAnswer)
        //give a point if correct
        if (userAnswer == questions[questionCount].correct_answer) {
            setScore(prev => prev + 1)
        }
        //reset user answer
        setUserAnswer("")
        setAnswerChoices([])
        //go to next question
        setQuestionCount(prev => prev + 1)
    }

    return (
        <>
            <div className="Game">
                <LMG />

                <h1 className="text-5xl font-serif m-4">Nerd Bowl</h1>
                {
                    <CategorySelect
                        fetchData={fetchData}
                    />
                }
                {startGame &&
                    <GameScreen
                        score={score}
                        questions={questions}
                        questionCount={questionCount}
                        setUserAnswer={setUserAnswer}
                        submitAnswer={submitAnswer}
                        answerChoices={answerChoices}
                        setAnswerChoices={setAnswerChoices}
                    />
                }

            </div>
        </>
    )
}
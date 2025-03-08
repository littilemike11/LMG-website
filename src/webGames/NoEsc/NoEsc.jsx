import LMG from "../../components/game-components/LMG"
import Modal from "./Modal"
import "../../game.css"
import questions from "./questions"
import background from "./bgImages"
import { useState, useEffect } from "react"


const introDialogue = [
    "Hello Player. Are you ready to be tested?",
    "Ok, Lets Begin.",
    "This is your score : 5",
    "The goal of this experiment is the accumulate as many points as you can...",
    "... we will ask you a series of questions for you to answer...",
    "... the questions will gradually increase in difficulty...",
    "... correct answers will garner points and incorrect answers will deduct points.",
    "A negative score will result in termination... ",
    "... of the experiment.",
    "Once begun, the experiment cannot be left until completed. Attempts to abandon the experiment will be met with corrective behavior.",
    "Are you ready to be tested Player?"
]
export default function NoEsc() {

    const [bgIndex, setBgIndex] = useState(0)
    const [type, setType] = useState("intro")
    const [quizStart, setQuizStart] = useState(false)
    const [score, setScore] = useState(5)// global variable to keep track of player score for quiz
    const [cost, setCost] = useState(1)// cost of questions
    const [dialogueIndex, setDialogueIndex] = useState(0)
    const [questionNum, setQuestionNum] = useState(1)
    const [question, setQuestion] = useState(questions[0])
    const [answer, setAnswer] = useState("")
    const [modalText, setModalText] = useState(introDialogue[dialogueIndex])
    const [strikeNum, setStrikeNum] = useState(0)// num of times player got an "extreme" wrong answer
    const [isAlert, setIsAlert] = useState(true)
    const [isConfirm, setIsConfirm] = useState(false)
    console.log(questions.length)
    let desertion = "Desertion will not be tolerated. Desertion results in 1 strike"
    function submitAnswer() {
        console.log("submitted answer")
        if (answer.trim() == "") {
            issueStrike();
            return;
        }
        if (answer.toLowerCase() == question.correctAnswer) {
            setModalText(question.onCorrectResponse);
            setScore(prev => prev + cost)
        } else {
            setModalText(question.onIncorrectResponse)
            setScore(prev => prev - cost)
        }
        setType("confirm")
        setQuestionNum(prev => prev + 1)
        setQuestion(questions[questionNum])
        setAnswer("")
    }
    const nextQuestion = () => {
        setType("question")
        setModalText(question.text)
    }
    const nextModal = () => {
        if (dialogueIndex >= 10) {
            setQuizStart(true)
            setModalText(question.text)
            setType("question")
            return;
        }
        setDialogueIndex(prev => prev + 1)
        setModalText(introDialogue[dialogueIndex + 1])
        setBgIndex(prev => (prev + 1) % background.length)
    }
    const showModal = () => {
        document.getElementById("my_modal_5").classList.add("modal-open")
    }
    const hideModal = () => {
        document.getElementById("my_modal_5").classList.remove("modal-open")
        setIsAlert(true)// reset
        setDialogueIndex(0)
        setModalText(introDialogue[0])
    }
    //says goodbye to player during intro
    const farewell = () => {
        setIsAlert(false)
        setModalText("We'll be seeing you.")

    }
    const issueStrike = () => {
        console.log("issue strike")
        console.log(strikeNum)
        let message = ""
        switch (strikeNum) {
            case 0:
                message = "This is your first Strike. Some questions have answer choices deemed to be unacceptable. The penalty of selecting these choices is the deduction of DOUBLE the COST points from you SCORE. As the saying goes: 3 STRIKES and you're out. We advise you to avoid this.";

                break;
            case 1:
                message = "This is your second Strike. We will not tolerate any disobedience."
                break;
            case 2:
                message = "You were warned."
                break;
            case 3:
                message = "game over crash"
                break;
            default:
                message = "game over crash"
        }

        setModalText(message)
        setType("confirm")
        setScore(prev => prev - 2 * cost)
        setStrikeNum(prev => prev + 1)
    }

    const endGame = () => {
        let message = "You have failed the experiment. You have not been chosen for the exodus."
        setType("exit")
        setModalText(message)

    }

    useEffect(() => {
        if (score < 0 || strikeNum >= 3) {
            endGame();
        }
    }, [score, strikeNum])


    console.log(background.length)
    return (
        <>
            <div className="Game h-[95vh]">

                <LMG />
                <div
                    className="flex items-center justify-center w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${background[bgIndex]})` }}>
                    <Modal
                        type={type}
                        dialogue={introDialogue}
                        farewell={farewell}
                        setBgIndex={setBgIndex}
                        questions={questions}
                        showModal={showModal}
                        hideModal={hideModal}
                        cost={cost}
                        score={score}
                        modalText={modalText}
                        question={question}
                        answer={answer}
                        setAnswer={setAnswer}
                        submitAnswer={submitAnswer}
                        issueStrike={issueStrike}
                        isAlert={isAlert}
                        nextModal={nextModal}
                        quizStart={quizStart}
                        nextQuestion={nextQuestion}

                    />

                </div>



            </div>

        </>
    )
}
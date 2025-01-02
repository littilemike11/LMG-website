import LMG from "../../components/game-components/LMG"
import Modal from "./Modal"
import asciiArt from "./images/asciiArt.png"
import ascii_art_sharp from "./images/ascii_art_sharp.png"
import "../../game.css"
import questions from "./questions"
import { useState } from "react"

export default function NoEsc(){

const [score,setScore] = useState(5)// global variable to keep track of player score for quiz
const [cost, setCost] = useState(1)// cost of questions
const [questionNum,setQuestionNum] = useState(0)
const [question,setQuestion]= useState()// variable to hold question text
const [strikeNum, setStrikeNum]= useState(0)// num of times player got an "extreme" wrong answer
const [playerAnswer,setPlayerAnswer] =useState("") // A B C D 
const [warning, setWarning]= useState("")// warning message on if player can lose
const [isPlaying, setIsPlaying]=useState(true)
const [showModal, setShowModal] = useState(false)
const [bgIndex, setBgIndex] =useState(0)
    
    const background=[
        asciiArt,
        ascii_art_sharp
    ]
    const dialogue =[
        "Hello Player. Are you ready to be tested?",
        "Ok Lets Begin",
        `this is your score ${score}`,
        "The goal of this experiment is the accumulate as many points as you can..."
    ]
    const farewell="We'll be seeing you."
    function AskQuestion(){
        let q={};
        q.cost=1

        console.log(q)
        return q
    }
    console.log(questions)
    return(
        <>
            <div className="Game h-[95vh]">
    
                <LMG/>
                <div
                    className="flex items-center justify-center w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage:`url(${background[bgIndex]})`}}>
                    <Modal
                        dialogue={dialogue}
                        farewell={farewell}
                        setBgIndex={setBgIndex}
                    />
                    {/* {questions.map((question)=>(
                        <Modal
                            key={question.Qnum}
                            question={question}
                        />
                    ))} */}
                </div>
                
                {/* <img src={asciiArt} alt="" /> */}
                
            </div>
            
        </>
    )
}
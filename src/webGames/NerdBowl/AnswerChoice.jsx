import { useState } from "react"

export default function AnswerChoice({answer,type, submitAnswer, selectedAnswer, decodeHTMLEntities}){
    const [bgColor, setBgColor] =useState("")
    const handleClick =() =>{
        let isCorrect = submitAnswer(answer.isCorrect)
        //if player selects wrong answer, change bg to red
        if(!isCorrect && !selectedAnswer){
            setBgColor("bg-error hover:bg-error")
        }
    }
    return(
    <>  
    {/* once player chooses an answer, reveil the correct answer */}
        <li onClick={handleClick} className={`btn ${type == "multiple" && "flex"} text-xl m-4 h-max ${bgColor} ${selectedAnswer && answer.isCorrect && "bg-success hover:bg-success"}`}>
            {decodeHTMLEntities(answer.text)}
        </li>
    </>
    )
}
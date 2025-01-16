import AnswerChoice from "./AnswerChoice";
import { useEffect, useState } from "react";

export default function GameScreen({ score, questionCount, questions, submitAnswer, nextQuestion, answerChoices, setAnswerChoices, selectedAnswer }) {
    // get current question
    let question = questions[questionCount]
    console.log(question)
    // the questions or answer may contain some html elements
    //remove them for easier readability
    function decodeHTMLEntities(encodedString) {
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(encodedString, 'text/html').documentElement.textContent;
        return decodedString;
    }
    //shuffle multiple choice answer choices for new questions
    useEffect(() => {
         
        // for each old incorrect answer, make a label for it being wrong
        let answers = [
            ...question.incorrect_answers.map((answer) => ({
                text: answer,
                isCorrect: false,
            })), // add a label to correct answer being true
            { text: question.correct_answer, isCorrect: true },
        ];// shuffle answers
        if (question.type === "multiple"){
            setAnswerChoices(shuffleAnswers(answers));
        }
        else{// question is true or false
            if (answers[0].text==false) {
                //swap to keep true as first response
                let temp = answers[0]
                answers[0]=answers[1]
                answers[1]= temp
            }   
            setAnswerChoices(answers)
        }
        
        
    }, [questionCount]);
    
    function shuffleAnswers(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array
    }


    return (
        <>
            <div className="text-xl flex flex-col m-auto gap-2 md:w-1/2 ">
                <p>Score: {score}</p>
                <p>{questionCount + 1}.{decodeHTMLEntities(question.question)} </p>
                <ul >
                    {
                            //shuffle incorrect and correct answer
                        answerChoices.map((answer, index) => (
                            <AnswerChoice             
                                key={index}
                                answer={answer}
                                type={question.type}
                                submitAnswer={submitAnswer}
                                selectedAnswer={selectedAnswer}
                                decodeHTMLEntities={decodeHTMLEntities}
                                
                            />
                        ))
                    }
                </ul>
            <button onClick={nextQuestion} className="btn w-max self-end btn-ghost">Next</button>
            </div>
        </>
    )
}
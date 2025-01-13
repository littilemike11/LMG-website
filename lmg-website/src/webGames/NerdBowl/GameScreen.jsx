import { useEffect, useState } from "react";

export default function GameScreen({ score, questionCount, questions, submitAnswer, setUserAnswer, answerChoices, setAnswerChoices }) {
    // get current question
    // const [question, setQuestion] = useState(questions[questionCount])
    let question = questions[questionCount]
    console.log(question)
    // the questions may contain some html elements
    //remove them for easier readability
    function decodeHTMLEntities(encodedString) {
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(encodedString, 'text/html').documentElement.textContent;
        return decodedString;
    }
    //shuffle multiple choice answer choices for new questions
    useEffect(() => {
        if (question.type == "multiple") {
            setAnswerChoices(shuffleAnswers([...question.incorrect_answers, question.correct_answer]))
            console.log("shuffle")
        }
    }, [questionCount])
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
            <div>
                <p>Score: {score}</p>
                <p>{questionCount + 1}.{decodeHTMLEntities(question.question)} </p>
                {question.type == "boolean" &&


                    <div className="flex-col items-center border ">
                        <div className="flex p-2">
                            <input onClick={() => setUserAnswer("True")} value={"True"} type="radio" name="radio-2" className="radio radio-primary mr-2" />
                            <p htmlFor="radio-2">True</p>
                        </div>
                        <div className="flex p-2">
                            <input onClick={() => setUserAnswer("False")} value={"False"} type="radio" name="radio-2" className="radio radio-primary mr-2" />
                            <p htmlFor="radio-2">False</p>
                        </div>

                    </div>
                }
                {question.type == "multiple" &&
                    //shuffle incorrect and correct answer
                    answerChoices.map((answer, index) => (

                        <li key={index} className="flex p-2">
                            <input onClick={() => setUserAnswer(answer)} value={answer} type="radio" name="radio-2" className="radio radio-primary mr-2" />
                            <p htmlFor="radio-2">{decodeHTMLEntities(answer)}</p>
                        </li>
                    ))
                }

                <button onClick={submitAnswer} className="btn">Next</button>
            </div>
        </>
    )
}
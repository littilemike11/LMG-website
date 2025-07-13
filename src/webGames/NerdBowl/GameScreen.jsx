import AnswerChoice from "./AnswerChoice";
import { useEffect } from "react";

export default function GameScreen({ score, questionCount, questions, submitAnswer, nextQuestion, answerChoices, setAnswerChoices, selectedAnswer, quit }) {
    // get current question
    let question = questions[questionCount]
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
        if (question.type === "multiple") {
            setAnswerChoices(shuffleAnswers(answers));
        }
        if (question.type !== "multiple") {
            const sortedAnswers = answers.sort((a, b) => (a.text === "True" ? -1 : 1));
            setAnswerChoices(sortedAnswers);
        }



    }, [questionCount, question]);

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

            <div className=" flex flex-col m-auto gap-2 md:w-1/2 ">
                <p className="text-lg font-medium text-gray-600">Category: {decodeHTMLEntities(question.category)}</p>
                <p className="text-lg font-medium text-gray-600">Difficulty: {question.difficulty.toUpperCase()}</p>
                <p className="text-lg font-medium text-gray-600 mb-2">Score: {score}</p>

                <p className="text-2xl font-semibold mb-4">{questionCount + 1}. {decodeHTMLEntities(question.question)}</p>
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
                <div className="flex justify-between mt-6">
                    <button onClick={quit} className="btn btn-outline btn-error">Quit</button>
                    <button onClick={nextQuestion} className="btn btn-primary">Next</button>
                </div>


            </div>
        </>
    )
}
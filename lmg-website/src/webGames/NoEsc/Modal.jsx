import { useState } from "react"
import { Link } from "react-router-dom";
export default function Modal({
    type,
    showModal,
    quizStart,
    cost,
    score,
    modalText,
    question,
    answer,
    setAnswer,
    submitAnswer,
    issueStrike,
    farewell,
    isAlert,
    nextModal,
    hideModal,
    nextQuestion
}) {
    return (
        <>
            {/* Button to open the modal */}
            <button className="btn" onClick={showModal}>
                Start?
            </button>

            {/* Modal structure */}

            <div id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* Close button */}
                    <button
                        onClick={quizStart ? issueStrike : farewell}
                        className="btn btn-sm btn-circle btn-ghost absolute right-6 sm:right-2 top-2"
                    >
                        ✕
                    </button>

                    {/* Display cost and score if the quiz has started */}
                    {quizStart && (
                        <>
                            <h3 className="font-bold text-lg">Cost: {cost}</h3>
                            <h3 className="font-bold text-lg">Score: {score}</h3>
                        </>
                    )}

                    {/* Modal text */}
                    <p className="py-4">{modalText}</p>

                    {/* Modal action area */}
                    <div className="modal-action">
                        {type == "confirm" && (
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <button onClick={nextQuestion} className="btn">
                                        ok
                                    </button>
                                </div>
                            </div>
                        )}
                        {type == "question" && (
                            <div className="w-full">
                                {question?.type === "Open" && (
                                    <input
                                        type="text"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder={question.placeholder}
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                )}
                                <div className="flex justify-between">
                                    <button onClick={submitAnswer} className="btn">
                                        Submit
                                    </button>
                                    <button onClick={issueStrike} className="btn">
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                        {type == "intro" && (
                            <div className="w-full flex justify-between">
                                <button
                                    onClick={isAlert ? nextModal : hideModal}
                                    className="btn"
                                >
                                    Ok
                                </button>
                                {isAlert && (
                                    <button onClick={farewell} className="btn">
                                        Close
                                    </button>
                                )}
                            </div>
                        )}
                        {type == "exit" && (
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <Link to={"/WebGames"}>
                                        <button className="btn">
                                            ok
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}
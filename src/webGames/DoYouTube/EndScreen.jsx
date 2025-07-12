export default function EndScreen({ score, round, restartQuiz, changeCategory }) {
    return (
        <>
            <>
                <div className="text-xl">
                    <p>Final Score: {score} / {round}</p>
                    <p>Would you like to try again?</p>
                    <button onClick={restartQuiz} className="btn m-2 btn-primary">Restart Quiz</button>
                    <p>Or?</p>
                    <button onClick={changeCategory} className="btn m-2 btn-secondary">Change Category</button>
                </div>
            </>
        </>
    )
}
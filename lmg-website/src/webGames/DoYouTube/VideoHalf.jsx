export default function VideoHalf({ videos, isRight, submitAnswer }) {
    return (
        <>
            <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
                <p>video title</p>
                <p> by: author/ channel name</p>
                <p>published on date : </p>
                <p>has</p>

                {isRight &&
                    (
                        <div className="flex gap-8">
                            <button onClick={() => submitAnswer("higher")} className="btn glass">Higher ▲</button>
                            <button onClick={() => submitAnswer("lower")} className="btn glass">Lower ▼</button>
                        </div>

                    )
                }
                {!isRight &&
                    (<p>insert views</p>)
                }


            </div>
        </>
    )
}
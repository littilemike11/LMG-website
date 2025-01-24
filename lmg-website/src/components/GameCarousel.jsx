import GameSummary from "./GameSummary";

export default function GameCarousel(props) {
    console.log(props)
    return (
        <>
            <div className="mx-2">
                {/* <div className="text-3xl ">
                    {props.highlightedGame.title}
                </div> */}

                <div className=" carousel carousel-center bg-neutral rounded-box max-w-xl space-x-4 p-4 m-4">
                    {props.content}
                </div>

                <GameSummary
                    title={props.highlightedGame.title}
                    summary={props.highlightedGame.summary}
                    link={props.highlightedGame.link}
                />

            </div>






        </>
    )
}
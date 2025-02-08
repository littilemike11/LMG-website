import GameSummary from "./GameSummary";

export default function GameCarousel(props) {
    return (
        <>
            <div className="mx-2">
                <div className=" carousel carousel-center bg-neutral rounded-box  max-w-lg lg:max-w-xl space-x-4 p-4 m-4">
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
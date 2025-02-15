import GameItem from "./GameItem"
export default function GameCarousel({ catalogue, setActiveGame }) {
    let length = catalogue.length
    return (
        <>
            <div className="mx-2">
                <div className=" carousel carousel-center bg-neutral rounded-box w-96 sm:w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl space-x-10 p-4 m-4">
                    {
                        catalogue.map((game, index) => (

                            < GameItem
                                key={index}
                                game={game}
                                prev={index == 0 ? catalogue[length - 1] : catalogue[index - 1]}
                                next={catalogue[(index + 1) % length]}
                                setActiveGame={setActiveGame}
                            // highlightedGame={props.highlightedGame}
                            />

                        ))
                    }
                </div>


            </div>






        </>
    )
}
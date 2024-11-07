import GameCarousel from "./GameCarousel";
import GameSummary from "./GameSummary";
import GameItem from "./GameItem";

export default function GameShowcase(props) {
    let games = props.catalogue;
    let length = games.length
    //stupid js cant handle negative mods
    // console.log(Math.max(0 - 1 % 2, 0))
    console.log(props)
    return (
        <>
            <div className="">
                <GameCarousel
                    content={
                        games.map((game, index) => (

                            < GameItem
                                key={index}
                                img={game.img}
                                id={game.id}
                                prev={index == 0 ? games[length - 1].id : games[index - 1].id}
                                next={games[(index + 1) % length].id}

                            />

                        ))
                    }
                    games={games}
                />

            </div>

        </>
    )
}
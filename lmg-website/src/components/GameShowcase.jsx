import GameCarousel from "./GameCarousel";
import GameItem from "./GameItem";
import { useState } from "react";

export default function GameShowcase(props) {
    const [highlightedGame, setHighlightedGame] = useState(props.catalogue[0])
    let games = props.catalogue;
    let length = games.length
    //stupid js cant handle negative mods
    // console.log(Math.max(0 - 1 % 2, 0))

    return (
        <>
            <div>
                <GameCarousel
                    content={
                        games.map((game, index) => (

                            < GameItem
                                key={index}
                                img={game.img}
                                icon={game.icon}
                                id={game.id}
                                prev={index == 0 ? games[length - 1] : games[index - 1]}
                                next={games[(index + 1) % length]}
                                setHighlightedGame={setHighlightedGame}
                                catalogue={games}
                            />

                        ))
                    }
                    highlightedGame={
                        highlightedGame
                    }
                />

            </div>

        </>
    )
}
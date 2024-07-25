import GameCarousel from "./GameCarousel";
import GameSummary from "./GameSummary";
import GameItem from "./GameItem";

export default function GameShowcase(props) {

    return (
        <>
            <div>
                <GameCarousel
                    content={
                        props.catalogue.map((game, index) => (
                            < GameItem
                                key={index}
                                img={game.img}
                            />
                        ))
                    }
                />
                {/* <GameCarousel
                    content={content}
                /> */}

                <GameSummary

                />
            </div>

        </>
    )
}
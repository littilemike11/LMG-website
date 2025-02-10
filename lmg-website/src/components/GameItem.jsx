import { Link } from "react-router-dom"

export default function GameItem({ game, prev, next }) {
    console.log(game)
    return (
        <>
            {/* id needed fot links + arrows */}
            <div id={game.id} className="carousel-item w-96 md:h-10/12 lg:h-11/12 relative ">
                <div className="card card-compact bg-base-200 w-full shadow-xl">
                    <figure className="shadow-lg">
                        {game.img ?
                            (<img
                                src={game.img}
                                className="w-full aspect-square rounded-box" />) :
                            game.icon
                        }
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{game.title}</h2>
                        <p>{game.summary}</p>
                        <div className="card-actions justify-end">
                            <Link
                                to={game.link}
                                className="self-end">
                                <button className="btn btn-primary">Play</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href={`#${prev.id}`} className="btn btn-secondary btn-circle">❮</a>
                    <a href={`#${next.id}`} className="btn btn-secondary btn-circle">❯</a>
                </div>
            </div>
        </>
    )
}
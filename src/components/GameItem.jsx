import { Link } from "react-router-dom"

export default function GameItem({ game, prev, next, setActiveGame }) {
    return (
        <>
            
                <div className="card w-80 h-96 bg-base-300 shadow-xl rounded-2xl p-4 hover:scale-105 transition">
                    <figure className="h-48 shadow-lg">
                        {game.img ?
                            (<img
                                src={game.img}
                                className="w-full object-cover aspect-square rounded-box" />) :
                            game.icon
                        }
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-semibold">{game.title}</h2>
                        <p>{game.summary}</p>
                        <div className="card-actions  justify-end">
                            <Link
                                to={game.link}
                                className="self-end">
                                <button className="btn btn-primary">{game.link ? "Play ▶" : "Under Development"}</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a onClick={() => setActiveGame(prev.id)} href={`#${prev.id}`} className="btn btn-secondary btn-circle">❮</a>
                    <a onClick={() => setActiveGame(next.id)} href={`#${next.id}`} className="btn btn-secondary btn-circle">❯</a>
                </div> */}
            
        </>
    )
}
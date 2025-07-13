import { Link } from "react-router-dom";
export default function GameItem({ game, onInfoClick }) {
    return (
        <div className="card w-80 h-96 bg-base-300 shadow-xl rounded-2xl p-4 transition">
            <figure className="h-48 relative shadow-lg">
                {game.img ? (
                    <img
                        src={game.img}
                        className="w-full object-cover aspect-square rounded-box"
                        alt={game.title}
                    />
                ) : (
                    game.icon
                )}

                {/* Info button */}
                <button
                    className="cursor-pointer hover:scale-110 absolute top-0 left-0 text-2xl z-10 p-2"
                    onClick={() => onInfoClick(game)}
                    aria-label={`More info about ${game.title}`}
                >
                    ℹ️
                </button>

                {game.isPCOnly && (
                    <div className="absolute top-0 right-0 text-3xl text-black z-10 ">
                        📵
                    </div>
                )}
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-semibold arcade-font">
                    {game.title}
                </h2>
                <p>{game.summary}</p>
                <div className="card-actions justify-end">
                    <Link to={game.link} className="self-end">
                        {game.link ? (
                            <button className="btn btn-primary btn-lg">Play ▶</button>
                        ) : (
                            <button disabled className="btn">Coming Soon!</button>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
}

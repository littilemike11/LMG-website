import { Link } from "react-router-dom"

export default function GameItem({ game, prev, next, setActiveGame }) {
    return (
        <>
            
                {/* <div className="card w-80 h-96 bg-base-300 shadow-xl rounded-2xl p-4 hover:scale-105 transition">
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
                </div> */}
                <div className="relative flex-col place-items-center h-96 w-96 sm:h-full sm:w-full">
                    <Link to={game.link}>
                    <div className="relative hover:scale-105 transition duration-300">
                         <img src={game.img} alt={`image of ${game.title} icon`} className="h-80 w-80 object-cover rounded-box shadow-lg" />  
                         {game.isPCOnly && <div className="absolute top-2 right-5 text-3xl text-black z-10">📵</div>}
                    </div>
                    </Link>

                    <div className="w-72 sm:cursor-help text-left p-2 relative group">
                        <h2 className="text-xl sm:text-2xl italic font-semibold arcade-font transition-opacity duration-300 opacity-100 sm:group-hover:opacity-0">
                            {game.title}
                        </h2>
                        <p className="text-sm sm:text-lg sm:absolute p-2 top-0 left-0 text-pretty transition-opacity duration-300  opacity-100 sm:opacity-0 group-hover:opacity-100">
                            {game.summary}
                        </p>
                        </div>
                </div>
            
        </>
    )
}
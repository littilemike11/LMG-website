import { Link } from "react-router-dom"
export default function GameInfo({ game }) {
    return (
        <>
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
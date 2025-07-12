import { useState } from "react"
import { Link } from "react-router-dom"
import catalogue from "/src/data/games.jsx"
export default function Banner({ achievement }) {
    const [isVisible, setIsVisible] = useState(true)
    const [toggleOpen, setToggleOpen] = useState(false)
    console.log(achievement)
    const link = catalogue.find((game) => game.title == achievement.game).link.slice(1)
    return (
        <>
            {
                isVisible && (
                    <div>
                        {
                            toggleOpen ?
                                (
                                    <div className="card card-sm card-border bg-info text-info-content w-96 shadow-xs">
                                        <div className="card-body">
                                            <div className="card-actions justify-between">
                                                <h1 className="card-title" >Achievement Unlocked!</h1>
                                                <button onClick={() => setIsVisible(false)} className="btn btn-square btn-xs btn-info">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <h2 className="card-title italic">{achievement.title}</h2>
                                            <p className="break-words whitespace-normal">{achievement.description}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-info">
                                                    <Link to={`/Achievements#${link}`}>
                                                        See Now
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <div className="alert alert-info flex items-baseline justify-between">
                                        <p>Achievement Unlocked: {achievement.title}</p>
                                        <div>
                                            <button onClick={() => setToggleOpen(true)} className="btn btn-sm btn-info">more...</button>
                                            <button onClick={() => setIsVisible(false)} className="btn btn-square btn-xs btn-info">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                )
                        }

                    </div>
                )
            }

        </>
    )
}
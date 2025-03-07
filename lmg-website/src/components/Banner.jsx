import { useState } from "react"
import { Link } from "react-router-dom"
export default function Banner(achievement) {
    const [isVisible, setIsVisible] = useState(false)
    console.log(achievement)
    return (
        <>
            {
                isVisible && (
                    <div className="toast z-50">
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
                                <h2 className="card-title italic">{achievement.achievement.title}</h2>
                                <p>{achievement.achievement.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-info">
                                        <Link to={"/Achievements"}>
                                            Go Now
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}
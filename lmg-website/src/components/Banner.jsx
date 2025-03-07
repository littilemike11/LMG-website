export default function Banner(achievement) {
    console.log(achievement)
    return (
        <>
            <div className="toast z-50">
                {/* <div className="alert alert-info">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0">✕</button>
                    <span>You unlocked an Achievement!</span>
                    <p>{achievement.achievement.title}</p>
                    <p>hi</p>
                </div> */}
                <div className="card bg-base-100 w-96 shadow-xs">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
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
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
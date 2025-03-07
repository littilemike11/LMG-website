export default function Banner(achievement){
    console.log(achievement)
    return(
        <>
        <div className="toast z-50">
            <div className="alert alert-info">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0">✕</button>
                <span>You unlocked an Achievement!</span>
                <p>{achievement.achievement.title}</p>
                <p>hi</p>
            </div>
        </div>
        </>
    )
}
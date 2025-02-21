import { FaLock, FaLockOpen } from "react-icons/fa"
import ThemeCard from "./ThemeCard"
export default function Achievement({achievement}){
    return(
        <>
            <label className="swap swap-flip text-9xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-off">
                    <div className={`card card-compact bg-base-100 w-96 shadow-xl ${achievement.isUnlocked ? "bg-primary text-primary-content" : "bg-neutral text-neutral-content"}`}>
                        <div className="card-body items-center text-center">
                            {achievement.isUnlocked? <FaLockOpen/> :<FaLock/>}
                            <h2 className="card-title flex items-center">
                                {achievement.title}
                            </h2>
                            <p>{achievement.description}</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">{achievement.game}</div>
                            {/* maybe add a go now/ play button from here */}
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swap-on">
                    {
                       achievement.rewardType === "theme"  && <ThemeCard theme={achievement.reward}/>
                    }
                    
                </div>
            </label>
            
        </>
    )
}
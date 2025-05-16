import { FaLock, FaLockOpen, FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeCard from "./ThemeCard";

export default function Achievement({ achievement, link }) {
  return (
    <>
      <label className="swap swap-flip  relative group cursor-pointer transition-transform duration-300 hover:scale-105">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* Front Side */}
        <div className={`swap-off card bg-base-100 w-96 shadow-xl ${achievement.isUnlocked ? "bg-primary text-primary-content" : "bg-neutral text-neutral-content"}`}>
          <div className="card-body items-center text-center relative">
            {achievement.isUnlocked ? <FaLockOpen className="text-6xl mb-2" /> : <FaLock className="text-6xl mb-2" />}
            <h2 className="card-title flex arcade-font italic text-xl  items-center">
              {achievement.title}
            </h2>
            <p className="text-lg">{achievement.description}</p>
            <div className={`badge badge-outline ${!achievement.isUnlocked && "badge-primary"}`}>{achievement.game}</div>
            <div className="card-actions">
              <Link to={link} className={`btn ${achievement.isUnlocked ? "btn-neutral" : "btn-primary"}`}>
                {achievement.isUnlocked ? "Try Theme" : "Go To"}
              </Link>
            </div>

            {/* Flip Icon with Tooltip */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              <FaSyncAlt className="text-lg" />
              <span className="text-xs">Flip Me</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="swap-on">
          {achievement.rewardType === "theme" && <ThemeCard theme={achievement.reward} />}
        </div>
      </label>
    </>
  );
}

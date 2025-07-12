import { useState } from "react";

/**
 * 
 * @param {*} content - component to be displayed in rules, usually a list 
 * @returns collapsable component with content as rules of game
 */
function Rules({ content }) {
  const [toggleOpen, setToggleOpen] = useState(true)
  return (
    <>
      {/* open on default as people dont read tutorials */}
      <div
        onClick={() => setToggleOpen(!toggleOpen)}
        className={`collapse collapse-plus border border-base-300 bg-base-200 transition-all duration-300 ease-in-out hover:shadow-md ${toggleOpen ? "collapse-open" : "collapse-close"
          }`}
      >
        <div className="collapse-title text-lg sm:text-xl font-semibold text-primary-content">
          🎮 How to Play
        </div>
        <div className="collapse-content text-base-content">
          {content}
        </div>
      </div>
    </>
  );
}

export default Rules;

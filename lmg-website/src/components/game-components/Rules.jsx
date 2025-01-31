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
      <div onClick={() => setToggleOpen(!toggleOpen)} className={`collapse bg-base-200 collapse-plus border-base-300 hover:cursor-pointer border ${toggleOpen ? "collapse-open" : "collapse-close"}`}>
        <div className="collapse-title text-xl font-medium">How to Play</div>
        <div className="collapse-content">
          {content}
        </div>
      </div>
    </>
  );
}

export default Rules;

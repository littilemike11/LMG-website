/**
 * 
 * @param {*} content - component to be displayed in rules, usually a list 
 * @returns collapsable component with content as rules of game
 */
function Rules({ content }) {
  return (
    <>
      <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
        <div className="collapse-title text-xl font-medium">Rules</div>
        <div className="collapse-content">
          {content}
        </div>
      </div>
    </>
  );
}

export default Rules;

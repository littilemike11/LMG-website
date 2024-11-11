
function Rules(props) {
  return (
   <>
    <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
        <div className="collapse-title text-xl font-medium">Rules</div>
        <div className="collapse-content">
            {props.content}
        </div>
    </div>
   </>
  );
}

export default Rules;

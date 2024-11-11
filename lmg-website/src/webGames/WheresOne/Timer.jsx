import React, { useState } from 'react';

function Timer(props) {
    const [isTimerOn, setIsTimerOn]=useState(props.isTimerOn)
    const [startTime, setStartTime]= useState(props.startTime)
    const [time, setTime]=useState(props.startTime)
    const [progress, setProgress] =useState(time/startTime*100)
  let barColor = 'green';
  if (progress <= 33) barColor = 'red';
  else if (progress <= 66) barColor = 'yellow';
    
  return (

    <>
        <p>{progress}</p>
        <span className="countdown font-mono text-6xl">
            <span style={{"--value":time}}></span>
        </span>
        <progress className="progress progress-secondary w-56" value={progress} max="100"></progress>
    
        <div className="radial-progress text-primary" style={{ "--value": progress }} role="progressbar">
            {progress}
        </div>
    
    </>
  );
}

export default Timer;

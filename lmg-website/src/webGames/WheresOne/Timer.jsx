import React, { useState,useEffect } from 'react';

function Timer(props) {
    let startTime = props.startTime
    const [time, setTime] = useState(startTime); // Initialize with the starting time
    
  // Update the timer every second when it's active
  useEffect(() => {
    if (time === 0) return; // Stop when time reaches 0
    if (!props.isActive) return; // Don't do anything if timer is paused

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the interval when the timer ends or the component is unmounted
    return () => clearInterval(intervalId);
  }, [time, props.isActive]); // Depend on time and isActive

    const [progress, setProgress] =useState(time/props.startTime*100)
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

import React, { useState,useEffect } from 'react';

function Timer(props) {    
  // Update the timer every second when it's active
  useEffect(() => {
    if (!props.isActive) return; // Don't do anything if timer is paused
    if (props.timer === 0) {
      // props.setIsTimerOn(false);
      
      //functions to do when timer reaches 0
      props.onTimerEnd()
      console.log("time end")
      return;
    }; // Stop when time reaches 0

    const intervalId = setInterval(() => {
      props.setTimer((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the interval when the timer ends or the component is unmounted
    return () => clearInterval(intervalId);
  }, [props.timer, props.isActive]); // Depend on time and isActive

    const [progress, setProgress] =useState(100)
  let barColor = 'green';
  if (progress <= 33) barColor = 'red';
  else if (progress <= 66) barColor = 'yellow';

  return (

    <>
        <p>{progress}</p>
        <span className="countdown font-mono text-6xl">
            <span style={{"--value":props.timer}}></span>
        </span>
        <progress className="progress progress-secondary w-56" value={progress} max="100"></progress>
    
        <div className="radial-progress text-primary" style={{ "--value": progress }} role="progressbar">
            {progress}
        </div>
    
    </>
  );
}

export default Timer;

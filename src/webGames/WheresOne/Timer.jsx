import React, { useState, useEffect } from 'react';

function Timer(props) {
  // const [progress, setProgress] =useState(100)   
  // Update the timer every second when it's active
  let barColor = 'progress-success';
  if (props.progress <= 34) barColor = 'progress-error';
  else if (props.progress <= 67) barColor = 'progress-warning';

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
      props.setProgress((props.timer / (props.round + 2) * 100))
    }, 1000);

    // Cleanup function to clear the interval when the timer ends or the component is unmounted
    return () => clearInterval(intervalId);
  }, [props.timer, props.isActive]); // Depend on time and isActive




  return (

    <>

      <span className="countdown font-mono text-2xl ">
        <span style={{ "--value": props.timer }}></span>
      </span>
      <progress className={`progress w-full max-w-lg ${barColor}`} value={props.progress} max="100"></progress>

      {/* <div className="radial-progress text-primary" style={{ "--value": progress }} role="progressbar">
            {progress}
        </div> */}

    </>
  );
}

export default Timer;

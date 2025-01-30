import React, { useState } from 'react';
import Grid from './Grid';
import Timer from './Timer';
import Lives from './Lives';
import Rules from '../../components/game-components/Rules';
import LMG from '../../components/game-components/LMG';
import './WheresOne.css'; // Import the CSS

function WheresOne() {
  const [round, setRound] = useState(1);
  const [prevRound, setPrevRound] = useState(1);
  const [resetTrigger, setResetTrigger] = useState(false)
  const [gridSize, setGridSize] = useState(0);
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(round + 2);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [progress, setProgress] = useState(100)
  const [gameStart, setGameStart] = useState(false);


  const startGame = () => {
    if (gameStart) return;
    setGameStart(true);
    setResetTrigger(true)
    setGridSize(2); // Start with a 2x2 grid
    setIsTimerOn(true);
    setTimer(round + 2); // Set the timer based on the round number
  };

  const handleGridClick = (isCorrect) => {
    if (isCorrect) {
      setRound(prev => prev + 1);
      setGridSize(prev => prev + 1); // Increment grid size only if the answer is correct
      setTimer(round + 2); // Add more time for the next round
    } else {
      lostRound();
    }
  };


  const loseLife = () => {
    setLives(prev => prev - 1);
    if (lives <= 1) {
      endGame();
    }
  };

  const endGame = () => {
    setGameStart(false);
    setLives(3);
    setRound(1);
    setGridSize(0);
    setTimer(3); // Reset to initial timer value
    setIsTimerOn(false);
    setPrevRound(round);
    setProgress(100)
  };

  const lostRound = () => {
    setResetTrigger((prev) => !prev); // Toggle to trigger grid reset
    setGridSize(round + 1); // Increase grid size after losing the round
    setTimer(round + 2); // Reset the timer for the next round
    loseLife();
  };

  return (
    <div className="Game">
      <LMG />

      <main>
        <div className="">
          <div className='flex justify-normal'>
            <Rules
              content={
                <ol>
                  <li>Find and Click on the "1" within the time limit to go to the next Round.</li>
                  <li>Time limit = Round number + 2s (i.e., if Round #10, the timer starts with 12s).</li>
                  <li>You get <span className="heart">3 &hearts; &hearts; &hearts;</span> lives.</li>
                  <li>Click on an incorrect box, you lose a <span className="heart">&hearts;</span>.</li>
                  <li>Fail to find the "1" within the time limit, you lose a <span className="heart">&hearts;</span> and the grid reshuffles.</li>
                  <li>Lose all <span className="heart">&hearts; &hearts; &hearts;</span> and you lose the Game.</li>
                  <li>Try and get to a High Round.</li>
                  <li>Brag to your friends/family that you have Amazing "1" acquisition!</li>
                </ol>
              }
            />
          </div>

          <div className='flex flex-col items-start'>
            <div className="">
              <button className='btn' onClick={startGame}>Start</button>
            </div>
            <div>
              <button className='btn' onClick={endGame}>Restart Game</button>
            </div>
          </div>

          <p>Previous Round: {prevRound}</p>
          <p>Round: {round}</p>
          <Lives lives={lives} />

          <Timer
            onTimerEnd={() => { lostRound(); }}
            isActive={isTimerOn}
            setIsTimerOn={setIsTimerOn}
            timer={timer}
            setTimer={setTimer}
            round={round}
            progress={progress}
            setProgress={setProgress}
          />
        </div>

        <Grid
          gridSize={gridSize}
          onGridClick={handleGridClick}
          resetTrigger={resetTrigger}
        />
      </main>
    </div>
  );
}

export default WheresOne;

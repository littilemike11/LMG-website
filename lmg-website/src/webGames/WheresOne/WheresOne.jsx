import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Timer from './Timer';
import Lives from './Lives';
import Rules from './Rules';
import LMG from '../../components/game-components/LMG';

import './WheresOne.css'; // Import the CSS

const wrongLetters = ["i", "l", "!", "|"];

function WheresOne() {
  const [round, setRound] = useState(1);
  const [gridSize, setGridSize] = useState(0);
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(round + 2);
  const [isTimerOn, setIsTimerOn] = useState(false);

//   useEffect(() => {
//     startTimer()
//   }, [isTimerOn, round, lives]);

  const startTimer=()=>{
    setIsTimerOn(true)
  }


  const startGame = () => {
    setIsTimerOn(true);
    setGridSize(2)
  };

  const handleGridClick = (isCorrect) => {
    if (isCorrect) {
      setRound(prev => prev + 1);
      setGridSize(prev => prev + 1);
    } else {
      setLives(prev => prev - 1);
      if (lives <= 0) {
        resetRound();
      }
    }
  };

  const loseLife = () => {
    setLives(prev => prev - 1);
    if (lives <= 0) {
      endGame();
    }
  };

  const resetTimer = () => {
    setTimer(round+2); // Reset the timer to initial time
    setIsTimerOn(true); // Ensure it's active when reset
  };

  const endGame=() =>{
    setLives(3)
    setRound(1)
    setGridSize(0)
    setTimer(3)
    setIsTimerOn(false)
  }

  const resetRound = () => {
    setGridSize(round+1);
    resetTimer()
  };

  return (
    <div className="Game">
      <LMG/>

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
              </ol>}
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
          
          <p id="roundNum">Round: {round}</p>
          <Lives lives={lives} />
          <Timer resetTimer={resetTimer} isActive={isTimerOn} startTime={timer} />
        </div>

        <Grid gridSize={gridSize} onGridClick={handleGridClick} />
      </main>
    </div>
  );
}

export default WheresOne;

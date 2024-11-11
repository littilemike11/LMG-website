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
  const [rcount, setRcount] = useState(2);
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(round + 2);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    if (isTimerOn) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev === 1) {
            clearInterval(interval);
            handleTimeout();
            return round + 2;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerOn, round]);

  const handleStartClick = () => {
    setIsTimerOn(true);
  };

  const handleGridClick = (isCorrect) => {
    if (isCorrect) {
      setRound(prev => prev + 1);
      setRcount(prev => prev + 1);
    } else {
      setLives(prev => prev - 1);
      if (lives <= 0) {
        resetGame();
      }
    }
  };

  const handleTimeout = () => {
    setLives(prev => prev - 1);
    if (lives <= 0) {
      resetGame();
    }
  };

  const resetGame = () => {
    setLives(3);
    setRound(1);
    setRcount(2);
    setTimer(round + 2);
    setIsTimerOn(false);
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
                <button className='btn' onClick={handleStartClick}>Start</button>
            </div>
            <div>
                <button className='btn' onClick={resetGame}>Restart Game</button>
            </div>
          </div>
          
          <p id="roundNum">Round: {round}</p>
          <Lives lives={lives} />
          <Timer startTime={timer} />
        </div>

        <Grid gridSize={rcount} onGridClick={handleGridClick} />
      </main>
    </div>
  );
}

export default WheresOne;

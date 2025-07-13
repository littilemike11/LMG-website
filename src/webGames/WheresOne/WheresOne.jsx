import React, { useState } from 'react';
import Grid from './Grid';
import Timer from './Timer';
import Lives from './Lives';
import Rules from '../../components/game-components/Rules';
import LMG from '../../components/game-components/LMG';
import './WheresOne.css'; // Import the CSS
import { unlockAchievement, isUnlocked } from '/src/data/achievements';
import Banner from '/src/components/Banner';

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
  const [achievements, setAchievements] = useState([])

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
    //set achievements 
    let unlockedAchievements = []
    if (!isUnlocked(1)) {
      unlockedAchievements.push(unlockAchievement(1))
    }
    if (!isUnlocked(2) && round >= 50) {
      unlockedAchievements.push(unlockAchievement(2))
    }
    setAchievements(unlockedAchievements);
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
          {/* show achievements */}
          <div className="toast z-50 flex flex-col gap-2">
            {achievements.map((achievement, index) => (
              <Banner key={index} achievement={achievement} />
            ))}
          </div>

          <div className='flex justify-normal'>
            <Rules
              content={
                <ol className=" space-y-2">
                  <li>
                    Find and click the <strong>"1"</strong> before time runs out to advance to the next round.
                  </li>
                  <li>
                    Time limit = <strong>Round number + 2 seconds</strong> (e.g., Round 10 = 12 seconds).
                  </li>
                  <li>
                    You get <strong>3 lives</strong> ❤️❤️❤️.
                  </li>
                  <li>
                    Wrong click or timeout = lose 1 ❤️, grid reshuffles, and timer resets.
                  </li>
                  <li>
                    Lose all 3 lives = <strong>Game Over</strong>.
                  </li>
                  <li>
                    <strong>Goal:</strong> Reach the highest round possible.
                  </li>
                  <li>
                    <strong>Bonus:</strong> Brag about your elite "1" spotting skills!
                  </li>
                </ol>
              }

            />
          </div>

          <div className="space-y-6">
            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <button className="btn btn-primary" onClick={startGame}>
                Start
              </button>
              <button className="btn btn-secondary" onClick={endGame}>
                Restart Game
              </button>
            </div>

            {/* Game Info */}
            <div className="text-sm sm:text-base space-y-1">
              <p>
                <span className="font-medium text-base-content/80">Previous Round:</span> {prevRound}
              </p>
              <p>
                <span className="font-medium text-base-content/80">Current Round:</span> {round}
              </p>
              <Lives lives={lives} />
            </div>
          </div>


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

import { useState, useEffect } from "react";
import Cell from "./Cell";

const wrongLetters = ["i", "l", "!", "|", "I", "L", "¦"];

function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * wrongLetters.length);
  return wrongLetters[randomIndex];
}

function spawnAnswerSpot(r) {
  return Math.floor(Math.random() * (r * r));
}

function Grid({ gridSize, onGridClick, resetTrigger }) {
  const [grid, setGrid] = useState([]);
  const [answerIndex, setAnswerIndex] = useState(spawnAnswerSpot(gridSize));

  // Function to generate a new grid
  const generateGrid = () => {
    const newAnswerIndex = spawnAnswerSpot(gridSize);
    setAnswerIndex(newAnswerIndex);

    const newGrid = Array.from({ length: gridSize * gridSize }).map((_, index) => ({
      content: index === newAnswerIndex ? 1 : getRandomLetter(),
      isCorrect: index === newAnswerIndex,
    }));
    setGrid(newGrid);
  };

  // Regenerate grid when `resetTrigger` or `gridSize` changes
  useEffect(() => {
    generateGrid();
  }, [resetTrigger, gridSize]);

  const handleCellClick = (isCorrect) => {
    onGridClick(isCorrect);
    if (isCorrect) {
      generateGrid();
    }
  };

  return (
    <div className="flex justify-center">
      <div
        style={{
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
        className="grid border aspect-square max-w-screen-md w-full h-full gap-1 bg-base-200"
      >
        {grid.map((cell, index) => (
          <Cell
            key={index}
            onClick={() => handleCellClick(cell.isCorrect)}
            content={cell.content}
            isCorrect={cell.isCorrect}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;

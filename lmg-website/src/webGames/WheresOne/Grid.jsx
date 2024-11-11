import Cell from "./Cell";

const wrongLetters = ["i", "l", "!", "|"];

function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * wrongLetters.length);
  return wrongLetters[randomIndex];
}

function spawnAnswerSpot(r) {
  return Math.floor(Math.random() * (r * r));
}
// if gridSize = 2 , its a 2x2 grid 
function Grid({ gridSize, onGridClick }) {
  const spawn = spawnAnswerSpot(gridSize);

  const handleCellClick = (isCorrect) => {
    onGridClick(isCorrect);
  };

  return (
    <>
        <div className="flex justify-center">
            <div className="border aspect-square max-h-screen h-full min-h-96 min-w-96 w-full overflow-auto">
                <div className={`grid grid-cols-${gridSize}`}>
                    {Array.from({length:gridSize*gridSize}).map((_,index)=>{
                        const isCorrect = index === spawn
                        return(
                            <Cell 
                                key ={index}
                                onClick={()=>handleCellClick(isCorrect)}
                                className ={isCorrect ? "cellCorrect" : "cellIncorrect"}
                                content={isCorrect? 1 : getRandomLetter()}
                            />
                        )
                    })}
                </div>
                

            </div>
            
        </div>
        
    </>
    // <div
    //   className="grid"
    //   style={{
    //     gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    //     gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    //   }}
    // >
    //   {Array.from({ length: gridSize * gridSize }).map((_, index) => {
    //     const isCorrect = index === spawn;
    //     return (
    //       <button
    //         key={index}
    //         onClick={() => handleCellClick(isCorrect)}
    //         className={isCorrect ? "cellCorrect" : "cellIncorrect"}
    //       >
    //         {isCorrect ? "1" : getRandomLetter()}
    //       </button>
    //     );
    //   })}
    // </div>
  );
}

export default Grid;

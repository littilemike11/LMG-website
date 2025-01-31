import { useState } from "react"
import LMG from "../../components/game-components/LMG"
import Rules from "../../components/game-components/Rules"
import "../../game.css"
import GridRow from "./GridRow"
export default function ChainGame() {
    const [wordChain, setWordChain] = useState( ["Door", "Handle", "Grip", "Strength", "Training", "Gym", "Equipment", "Weight"])
    const [activeRow,setActiveRow] = useState(1)
    const [solvedRows, setSolvedRows]=useState([])
    const [solveTop, setSolveTop]= useState(true)
    const [topRow, setTopRow] = useState(1)
    const [botRow, setBotRow] = useState(6)
    const [input,setInput] =useState("")
    const [isEndgame,setIsEndgame]=useState(false)
    const [revealedLetters, setRevealedLetters] = useState({});


    const handleToggle =()=>{
        //if solving top, switch to bottom, and vice versa
        if(solveTop){
            setActiveRow(botRow)
        }
        else{
            setActiveRow(topRow)
        }
        setSolveTop(!solveTop)
    }
    const giveHint = () => {
        // reveal letter based on active row
        setRevealedLetters((prev) => {
            const currentRevealed = prev[activeRow] || [0];
            if (currentRevealed.length >= wordChain[activeRow].length) return prev; // Prevent extra hints
    
            const nextRevealed = [...currentRevealed, currentRevealed.length]; // add next index
    
            return { ...prev, [activeRow]: nextRevealed };
        });
        console.log(revealedLetters)
    };
    
    

    const endgame = () =>{
        setIsEndgame(true)
        console.log("Woohoooo")
    }
    const submitAnswer = () =>{
        if(input.toLocaleLowerCase() == wordChain[activeRow].toLocaleLowerCase()){
            console.log("correct")
            setSolvedRows([...solvedRows,activeRow])
            if(wordChain.length-3<= solvedRows.length){
                endgame();
                return
            }
            if(solveTop){
                setActiveRow(topRow + 1 )
                setTopRow(topRow + 1)
            }
            else{
                setActiveRow(botRow - 1)
                setBotRow(botRow - 1)
            }

        }else{
            console.log("incorrect")
        }
        setInput("")
    }
    return (
        <>
            <div className="Game">
                <LMG />

                <Rules
                    content={
                        <ol>
                        <li>Pick a direction to start from, either Top or Bottom</li>
                        <li>Guess word based on adjecent words</li>
                        <li>Continue until you guess all the words</li>
                    </ol>
                    }
                />
                <div className="grid grid-cols-12">
                    {wordChain.map((word, index) => (
                        <GridRow
                            key={index}
                            revealedLetters={revealedLetters[index]||[0]}
                            isActiveRow ={index==activeRow}
                            isRevealed={index == 0 || index == wordChain.length - 1 || solvedRows.includes(index)}
                            word={word.padEnd(12, ' ').toUpperCase()}
                        />
                    ))}

                </div>
                <div> 
                    <label className="swap">
                    <input type="checkbox" />
                    <div onClick={handleToggle} className="swap-on btn">Solve Top</div>
                    <div onClick={handleToggle} className="swap-off btn">Solve Bottom</div>
                    </label>
                </div>
                <div>
                    <button onClick={giveHint} className="btn"> Hint?</button>
                </div>
                <div>
                <div className="join">
                    <input onChange={(e)=>setInput(e.target.value)} className="input input-bordered join-item" value={input} placeholder="Enter Guess" />
                    <button onClick={submitAnswer} className="btn join-item rounded-r-full">Submit</button>
                    </div>
                </div>
                {isEndgame && 
                    (
                        <div>
                            <p>You Won</p>
                            <button className="btn">Play Again?</button>
                        </div>
                    
                    )
                }
            </div>
        </>
    )
}
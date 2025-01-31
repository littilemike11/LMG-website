import { useEffect, useState } from "react"
import LMG from "../../components/game-components/LMG"
import Rules from "../../components/game-components/Rules"
import "../../game.css"
import GridRow from "./GridRow"
import axios from "axios"
export default function ChainGame() {
    // achievement win without hints + errors
    const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_KEY
    const OPEN_AI_ORG = import.meta.env.VITE_OPEN_AI_ORG
    const OPEN_AI_PROJ = import.meta.env.VITE_OPEN_AI_PROJ
    const [wordChain, setWordChain] = useState([])
    const [activeRow, setActiveRow] = useState(1)
    const [solvedRows, setSolvedRows] = useState([0, 7])
    const [solveTop, setSolveTop] = useState(true)
    const [topRow, setTopRow] = useState(1)
    const [botRow, setBotRow] = useState(6)
    const [input, setInput] = useState("")
    const [isEndgame, setIsEndgame] = useState(false)
    const [revealedLetters, setRevealedLetters] = useState({});
    const [isWrong, setIsWrong] = useState(false)
    const [hintCount, setHintCount] = useState(0)
    const [incorrectCount, setIncorrectCount] = useState(0)

    const fetchWordChain = async () => {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-4o-mini", // or 'gpt-3.5-turbo'
                    messages: [
                        { role: "system", content: "Given game show Chain Reaction" },
                        { role: "user", content: "Can you generate 8 words as an example chain, where each consecutive word pair is commonly said together. The list of words must be unique, cannot not repeat and nonhyponated. Only return the 8 words separated by commas." }
                    ]
                },
                {
                    headers: {
                        Authorization: `Bearer ${OPEN_AI_API_KEY}`,
                        "Content-Type": "application/json",
                        "OpenAi-Organization": OPEN_AI_ORG,
                        "OpenAi-Project": OPEN_AI_PROJ,
                    },
                }
            );
            console.log(response.data)
            console.log(response.data.choices[0].message.content)
            setWordChain(
                response.data.choices[0].message.content
                    .split(',', 8)
                    .map(word => word.trim().toUpperCase()) // Trim each word
            );

        } catch (error) {
            console.log(error)
        }
    }
    const playAgain = async () => {
        await fetchWordChain();
        //reset all variables
        setHintCount(0)
        setIncorrectCount(0)
        setActiveRow(1)
        setSolvedRows([0, wordChain.length - 1])
        setSolveTop(true)
        setTopRow(1)
        setBotRow(6)
        setIsEndgame(false)
        setRevealedLetters({})

    }

    useEffect(() => {
        fetchWordChain()
    }, [])

    const handleToggle = () => {
        //if solving top, switch to bottom, and vice versa
        setIsWrong(false)
        solveTop ? setActiveRow(botRow) : setActiveRow(topRow)
        setSolveTop(!solveTop)
    }
    const giveHint = () => {
        setHintCount(hintCount + 1)
        // reveal letter based on active row
        setRevealedLetters((prev) => {
            //mapping active row with index revealed
            const currentRevealed = prev[activeRow] || [0];
            if (currentRevealed.length >= wordChain[activeRow].length) return prev; // Prevent extra hints

            const nextRevealed = [...currentRevealed, currentRevealed.length]; // add next index

            return { ...prev, [activeRow]: nextRevealed };
        });
        console.log(revealedLetters)
    };

    const endgame = () => {
        setIsEndgame(true)
    }
    const submitAnswer = () => {
        //if player right
        if (input.toUpperCase() == wordChain[activeRow]) {
            setSolvedRows([...solvedRows, activeRow])
            //if player won
            if (wordChain.length - 1 <= solvedRows.length) {
                endgame();
                setInput("")
                return;
            }
            if (solveTop) {
                setActiveRow(topRow + 1)
                setTopRow(topRow + 1)
            }
            else {
                setActiveRow(botRow - 1)
                setBotRow(botRow - 1)
            }
            //if player wrong
        } else {
            setIsWrong(true)
            setIncorrectCount(incorrectCount + 1)
        }
        setInput("")
    }
    return (
        <>
            <div className="Game mx-4">
                <LMG />

                <Rules
                    content={
                        <ol>
                            <li></li>
                            <li>Goal: Guess a chain of words based on commonly said word pairs</li>
                            <li>Example: Door ={">"} H _ _ _ _ _ ={">"} B _ _ ={">"} S _ _ _ _ ={">"} Chair</li>
                            <li>Solution: Door ={">"} Handle ={">"} Bar ={">"} Stool ={">"} Chair</li>
                            <li>Pairs : "Door Handle" ={">"} "Handle bar" ={">"} "Bar Stool" ={">"} "Stool Chair" </li>
                            <li>Use the <span className="italic">Hint</span> Button to reveal the next letter in the word</li>
                            <li>Press the <span className="italic">Solve Bottom</span> button to solve from the end first</li>
                        </ol>
                    }
                />
                {wordChain.length > 0 ?
                    (<div className="animate-fadeIn">
                        <div className=" grid grid-cols-12">
                            {wordChain.map((word, index) => (
                                <GridRow
                                    key={index}
                                    row={index}
                                    revealedLetters={revealedLetters[index] || [0]}
                                    isActiveRow={index == activeRow}
                                    solvedRows={solvedRows}
                                    isWrong={isWrong}
                                    isRevealed={index == 0 || index == wordChain.length - 1 || solvedRows.includes(index)}
                                    word={word.trim().padEnd(12, ' ')}
                                />
                            ))}

                        </div>
                    </div>) :
                    // loader while fetching
                    <div className="flex justify-center">
                        <div className="skeleton h-96 w-96">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                    </div>

                }

                <div>
                    <label className="swap">
                        <input type="checkbox" />
                        <div onClick={handleToggle} className="swap-on btn">Solve Top</div>
                        <div onClick={handleToggle} className="swap-off btn">Solve Bottom</div>
                    </label>
                </div>
                <div>
                    <div className="join">
                        <button onClick={giveHint} data-tip="Reveal a Letter on active row" className="btn join-item rounded-l-full tooltip tooltip-bottom " > Hint?</button>
                        <input onChange={(e) => { setIsWrong(false), setInput(e.target.value) }} className="input input-bordered join-item" value={input} placeholder="Enter Guess Here" />
                        <button onClick={submitAnswer} className="btn join-item rounded-r-full">Submit</button>
                    </div>
                </div>
                {
                    isWrong &&
                    <div className="text-error text-xl">
                        <p>Incorrect. Try Again.</p>
                    </div>
                }

                {isEndgame && (
                    <div className="flex justify-center items-center">
                        <div className="flex w-96 flex-col gap-2 items-center border p-4 bg-base-200 shadow-lg rounded-lg">
                            <p className="text-xl font-bold">End Game Summary</p>
                            {hintCount === 0 && incorrectCount === 0 && <p className="text-success">Perfect</p>}
                            <p>Congratulations! You Won!</p>
                            <p>You used {hintCount} hints</p>
                            <p>You were wrong {incorrectCount} times</p>
                            <button onClick={playAgain} className="btn btn-primary">Play Again?</button>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
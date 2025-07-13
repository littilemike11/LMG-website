import { useEffect, useState, useRef } from "react"
import LMG from "../../components/game-components/LMG"
import Rules from "../../components/game-components/Rules"
import "../../game.css"
import GridRow from "./GridRow"
import axios from "axios"
import { unlockAchievement, isUnlocked } from '/src/data/achievements';
import Banner from '/src/components/Banner';
export default function ChainGame() {
    // achievement win without hints + errors
    // const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_KEY
    // const OPEN_AI_ORG = import.meta.env.VITE_OPEN_AI_ORG
    // const OPEN_AI_PROJ = import.meta.env.VITE_OPEN_AI_PROJ
    const [wordChain, setWordChain] = useState([])
    const [activeRow, setActiveRow] = useState(1)
    const [solvedRows, setSolvedRows] = useState([0, 7])
    const [input, setInput] = useState("")
    const [isEndgame, setIsEndgame] = useState(false)
    const [revealedLetters, setRevealedLetters] = useState({});
    const [isWrong, setIsWrong] = useState(false)
    const [hintCount, setHintCount] = useState(0)
    const [incorrectCount, setIncorrectCount] = useState(0)
    const [achievements, setAchievements] = useState([])
    const inputRef = useRef(null)

    const chains = [
        "Fire, Alarm, Clock, Tower, Bridge, Gap, Year, Book",
        "Light, House, Party, Trick, Shot, Glass, Window, Seat",
        "Paper, Plane, Ticket, Booth, Box, Office, Chair, Lift",
        "Water, Bottle, Cap, Lock, Key, Ring, Bell, Tower",
        "Road, Trip, Wire, Fence, Post, Office, Space, Bar",
        "Power, Plant, Pot, Hole, Card, Trick, Shot, Glass",
        "Ice, Cream, Cone, Head, Start, Line, Dance, Floor",
        "Hand, Shake, Well, Done, Deal, Breaker, Room, Service",
        "Chain, Link, Up, Front, Door, Step, Stone, Wall",
        "Gold, Medal, Stand, Still, Life, Guard, Rail, Track",
        "Star, Light, Bulb, Socket, Wrench, Monkey, Bar, Code",
        "Moon, Walk, Way, Point, Blank, Page, Number, Line",
        "Green, House, Plant, Food, Chain, Reaction, Time, Zone",
        "Fast, Track, Record, Label, Maker, Space, Bar, Stool",
        "Blue, Print, Shop, Keeper, Key, Lock, Down, Town",
        "Sound, Wave, Length, Cut, Corner, Store, Room, Service",
        "Deep, Sea, Shell, Shock, Wave, Length, Line, Graph",
        "Hot, Dog, House, Party, Line, Dance, Floor, Mat",
        "Cold, Case, File, Cabinet, Door, Bell, Tower, Clock",
        "Sun, Flower, Pot, Hole, Punch, Line, Dance, Floor",
        "Rock, Star, Light, House, Party, Trick, Shot, Glass",
        "Wind, Mill, Stone, Wall, Street, Light, Bulb, Socket",
        "Sharp, Edge, Case, Study, Guide, Book, Store, Front",
        "Full, Moon, Walk, Way, Out, Door, Step, Stool",
        "Clear, Sky, Line, Dance, Floor, Mat, Finish, Touch",
        "Glass, Window, Seat, Belt, Buckle, Up, Front, Door",
        "Hot, Dog, Food, Court, House, Party, Time, Zone",
        "Electric, Chair, Lift, Ticket, Booth, Box, Office, Space",
        "Fire, Escape, Room, Key, Ring, Door, Bell, Tower",
        "Quick, Draw, Bridge, Club, House, Party, Hat, Trick",
        "Light, Bulb, Socket, Plug, In, Place, Setting, Sun",
        "Ice, Cube, Tray, House, Plant, Food, Court, Case",
        "Silver, Spoon, Handle, Bar, Code, Breaker, Room, Service",
        "Green, Tea, Pot, Luck, Charm, Stone, Wall, Street"
    ]


    const fetchWordChain = async () => {
        // ### MAY NEED TO FIND ALTERNATE MODES ###
        try {
            let randomIndex = Math.floor(Math.random() * chains.length);
            // console.log(chains[randomIndex])
            setWordChain(
                chains[randomIndex]
                    .split(',', 8)
                    .map(word => word.trim().toUpperCase()) // Trim each word
            );
            // const response = await axios.post(
            //     "https://api.openai.com/v1/chat/completions",
            //     {
            //         model: "gpt-4o-mini", // or 'gpt-3.5-turbo'
            //         messages: [
            //             { role: "system", content: "Given game show Chain Reaction" },
            //             { role: "user", content: "Can you generate 8 words as an example chain, where each consecutive word pair is commonly said together. The list of words must be unique, cannot not repeat and nonhyponated. Only return the 8 words separated by commas." }
            //         ]
            //     },
            //     {
            //         headers: {
            //             Authorization: `Bearer ${OPEN_AI_API_KEY}`,
            //             "Content-Type": "application/json",
            //             "OpenAi-Organization": OPEN_AI_ORG,
            //             "OpenAi-Project": OPEN_AI_PROJ,
            //         },
            //     }
            // );
            // console.log(response.data)
            // console.log(response.data.choices[0].message.content)
            // setWordChain(
            //     response.data.choices[0].message.content
            //         .split(',', 8)
            //         .map(word => word.trim().toUpperCase()) // Trim each word
            // );

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
        //set achievements 
        let unlockedAchievements = []
        if (!isUnlocked(7)) {
            unlockedAchievements.push(unlockAchievement(7))
        }
        if (!isUnlocked(8) && hintCount === 0) {
            unlockedAchievements.push(unlockAchievement(8))
        }
        if (!isUnlocked(9) && hintCount === 0 && incorrectCount === 0) {
            unlockedAchievements.push(unlockAchievement(9))
        }
        setAchievements(unlockedAchievements);
    }
    const submitAnswer = () => {
        //if player right
        if (!input) return
        if (input.toUpperCase() == wordChain[activeRow]) {
            setSolvedRows([...solvedRows, activeRow])
            //if player won
            if (wordChain.length - 1 <= solvedRows.length) {
                endgame();
                setInput("")
                return;
            }
            let nextUnsolved = (activeRow + 1) % wordChain.length;
            let attempts = 0;

            while (solvedRows.includes(nextUnsolved) && attempts < wordChain.length) {
                nextUnsolved = (nextUnsolved + 1) % wordChain.length;
                attempts++;
            }

            if (attempts < wordChain.length) {
                setActiveRow(nextUnsolved);
            }
            //if player wrong
        } else {
            setIsWrong(true)
            setIncorrectCount(prev => prev + 1)
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
                            <li><strong>Goal:</strong> Complete a chain where each word pair forms a common phrase.</li>
                            <li><strong>Example:</strong> Door → H _ _ _ _ _ → B _ _ → S _ _ _ _ → Chair</li>
                            <li><strong>Solution:</strong> Door → Handle → Bar → Stool → Chair</li>
                            <li><em>Phrases:</em> "Door Handle", "Handle Bar", "Bar Stool", "Stool Chair"</li>
                            <li>Click on the row to solve for it</li>
                            <li>Use <span className="italic">Hint</span> to reveal a letter</li>
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
                                    setActiveRow={setActiveRow}
                                    inputRef={inputRef}
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
                    <div className="join">
                        <button onClick={giveHint} data-tip="Reveal a Letter on active row" className="btn btn-info text-info-content join-item rounded-l-full tooltip tooltip-bottom " >🔍Hint?</button>
                        <input
                            autoFocus
                            ref={inputRef}
                            value={input}
                            onChange={(e) => {
                                const value = e.target.value.toUpperCase();
                                if (/^[A-Z]*$/.test(value)) {
                                    setIsWrong(false);
                                    setInput(value);
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    submitAnswer();
                                }
                            }}
                            className="input input-bordered join-item"
                            placeholder="Enter Guess Here"
                        />

                        <button onClick={submitAnswer} className="btn btn-primary join-item rounded-r-full">Submit</button>
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
                        <div className="w-full max-w-md p-6 bg-base-200 border rounded-xl shadow-lg text-center space-y-3">
                            <h2 className="text-2xl font-bold">🎉 Game Over</h2>
                            {hintCount === 0 && incorrectCount === 0 && <p className="text-success font-semibold">Perfect Score! 🏆</p>}
                            <p>Congratulations! You completed the chain!</p>
                            <p>🔍 Hints used: {hintCount}</p>
                            <p>❌ Incorrect guesses: {incorrectCount}</p>
                            <button onClick={playAgain} className="btn btn-primary mt-2">Play Again</button>
                        </div>
                    </div>
                )}

                {/* show achievements */}
                <div className="toast z-50 flex flex-col gap-2">
                    {achievements.map((achievement, index) => (
                        <Banner key={index} achievement={achievement} />
                    ))}
                </div>

            </div>
        </>
    )
}
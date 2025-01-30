import { useState } from "react"
import LMG from "../../components/game-components/LMG"
import "../../game.css"
import GridRow from "./GridRow"
export default function ChainGame() {
    const [wordChain, setWordChain] = useState(["Sun", "Light", "Bulb", "Idea", "Spark", "Fire", "Smoke", "Signal"])
    // Sun → Light → Bulb → Idea → Spark → Fire → Smoke → Signal
    return (
        <>
            <div className="Game">
                <LMG />
                <div className="grid grid-cols-12">
                    {wordChain.map((word, index) => (
                        <GridRow
                            key={index}
                            isRevealed={index == 0 || index == wordChain.length - 1}
                            word={word.padEnd(12, ' ').toUpperCase()}
                        />
                    ))}

                </div>
                <div>
                    <input type="text" placeholder="Enter Guess" className="input input-bordered w-full max-w-xs" />

                </div>
            </div>
        </>
    )
}
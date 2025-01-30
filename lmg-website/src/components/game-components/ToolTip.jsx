import { useState } from "react"
/**
 * 
 * @param {String} tip -  tool tip to be shown on hover/click
 * @param {String} label - label for button optional - default is "How to Play"
 * @param {String} direction - direction for tooltip to display. Default is "tooltip-top". Options are "tooltip-bottom", "tooltip-left" and "tooltip-right"
 * @returns 
 */
export default function ToolTip({ tip, label = "How to Play", direction = "tooltip-top" }) {
    const [toggleTip, setToggleTip] = useState(false)

    return (
        <>
            <div className={`tooltip ${toggleTip ? "tooltip-open" : "tooltip-close"} ${direction}`} data-tip={tip}>
                {/* button click is for mobile devices */}
                <button onClick={() => { setToggleTip(!toggleTip) }} className="btn">{label}</button>
            </div>

        </>
    )
}
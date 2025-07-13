import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import GameInfo from './GameInfo';
export default function LMG() {
    //get theme from local storage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "default");
    },);
    return (
        <>
            <div className='flex justify-start gap-4'>
                <Link to="/">
                    <button className='btn arcade-font outline hover:scale-105 text-xl sm:text-3xl' >LMG Games</button>
                </Link>
                <GameInfo />
            </div>
        </>
    )
}
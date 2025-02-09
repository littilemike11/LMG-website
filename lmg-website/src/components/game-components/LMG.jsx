import { Link } from 'react-router-dom'
import { useEffect } from 'react';
export default function LMG() {
    //get theme from local storage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "default");
    },);
    return (
        <>
            <div className='flex justify-start'>
                <Link to="/webgames">
                    <button className='btn outline hover:scale-110 text-3xl' >LMG Games</button>
                </Link>
            </div>
        </>
    )
}
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function NavBar() {
    //get theme from local storage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "default");
    },);
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow-sm">
                            <li><Link to={"/Achievements"}>Achievements</Link></li>
                            <li>
                                <Link to={"/Extra"}>Extra</Link>
                                <ul className="p-2">
                                    <li><Link to={"/Extra"}>Cuber</Link></li>
                                    <li><Link to={"/Extra#BombBlitz"}>Bomb Blitz</Link></li>
                                </ul>
                            </li>
                            <li><Link to={"/Settings"}>Settings</Link></li>
                            <li><Link to={"/Credits"}>Credits</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">LMG Games</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu z-10  menu-horizontal px-1">
                        <li><Link to={"/Achievements"}>Achievements</Link></li>
                        <li>
                            <details>
                                <summary>Extra</summary>
                                <ul className="p-2">
                                    <li><Link to={"/Extra"}>Cuber</Link></li>
                                    <li><Link to={"/Extra#BombBlitz"}>Bomb Blitz</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={"/Settings"}>Settings</Link></li>
                        <li><Link to={"/Credits"}>Credits</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/WebGames"} className="btn btn-neutral">Games</Link>
                </div>
            </div>
        </>
    )
}
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

export default function SettingsPage() {
    //retro by default?
    // have achievement unlock more themes
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "retro");

    // Apply theme to <html> tag whenever it changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Persist theme selection
    }, [theme]);

    const handleInput = (value) => {
        console.log(value)
        setTheme(value)
    }
    return (
        <>
            <NavBar />
            <div >
                <h1 className="text-5xl my-4 ">Settings</h1>
            </div>
            <div className="join join-vertical">
                <div className="join-item text-2xl ">
                    Theme Selector
                </div>
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Default"
                    value="default" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Retro"
                    value="retro" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Cyberpunk"
                    value="cyberpunk" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Valentine"
                    value="valentine" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Aqua"
                    value="aqua" />
            </div>
            <Footer />
        </>
    )
}
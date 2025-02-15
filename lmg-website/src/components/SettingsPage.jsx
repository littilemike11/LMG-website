import Footer from "./Footer";
import NavBar from "./NavBar";
import PageTitle from "./PageTitle";
import { useState, useEffect } from "react";

export default function SettingsPage() {
    //retro by default?
    // have achievement unlock more themes
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

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
            <PageTitle title={"Settings"}/>
            <div className="join join-vertical">
                <div className="join-item text-2xl ">
                    Theme Selector
                </div>
                <input
                    checked={theme === "default"}
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Default"
                    value="default" />
                <input
                    checked={theme === "retro"}
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Retro"
                    value="retro" />
                <input
                    checked={theme === "cyberpunk"}
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Cyberpunk"
                    value="cyberpunk" />
                <input
                    checked={theme === "valentine"}
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    onChange={(e) => handleInput(e.target.value)}
                    aria-label="Valentine"
                    value="valentine" />
                <input
                    checked={theme === "aqua"}
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
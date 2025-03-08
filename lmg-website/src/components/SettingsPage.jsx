import Footer from "./Footer";
import NavBar from "./NavBar";
import PageTitle from "./PageTitle";
import { useState, useEffect } from "react";
import { getUnlockedAchievements } from "/src/data/achievements";

export default function SettingsPage() {
    //retro by default?
    // have achievement unlock more themes
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");
    const [unlockedThemes, setUnlockedThemes] = useState(JSON.parse(localStorage.getItem("unlockedThemes")))
    // Apply theme to <html> tag whenever it changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Persist theme selection
    }, [theme]);

    // useful for if i decide to change the rewards for achievements and have player keep old theme/reward
    useEffect(() => {
        let achievements = getUnlockedAchievements()
        // Filter only theme-related achievements
        let themeAchievements = achievements.filter(achievement => achievement.rewardType === "theme");
        // Extract rewards from the filtered achievements
        console.log(themeAchievements)
        let newThemes = themeAchievements.map(achievement => achievement.reward.toLowerCase());
        // Update state while preserving previous themes
        //set to avoid duplicate themes
        setUnlockedThemes(prev => [... new Set(prev.concat(newThemes))]);
    }, [])

    const handleInput = (value) => {
        console.log(value)
        setTheme(value)
    }
    function capitalize(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <NavBar />
            <PageTitle title={"Settings"} />
            <div className="join join-vertical">
                <div className="join-item text-2xl ">
                    Theme Selector
                </div>
                {unlockedThemes.map((themeOption, index) => (
                    <input
                        key={index}
                        checked={theme === themeOption}
                        type="radio"
                        name="theme-buttons"
                        className="btn theme-controller join-item"
                        onChange={(e) => handleInput(e.target.value)}
                        aria-label={capitalize(themeOption)}
                        value={themeOption} />
                ))}
            </div>
            <Footer />
        </>
    )
}
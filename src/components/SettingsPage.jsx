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
        // if coming from link set theme
        const hash = window.location.hash.replace("#", ""); // Remove '#' from hash
        console.log(hash)
        if (hash) {
            setTheme(hash)
        }
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
        <div className="min-h-screen flex flex-col"> {/* Ensures the full height is used */}
            <NavBar />
            <main className="flex-grow">

                <PageTitle title={"Themes"} />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Try on different unlocked themes</h2>

                <div className="flex flex-col md:flex-row place-items-center justify-around md:items-baseline flex-grow pb-20">
                    <div className="join join-vertical shadow-2xl">
                        <div className="join-item arcade-font font-semibold text-2xl">Theme Selector</div>
                        {unlockedThemes.map((themeOption, index) => (
                            <input
                                key={index}
                                checked={theme === themeOption}
                                type="radio"
                                name="theme-buttons"
                                className="btn theme-controller w-full join-item"
                                onChange={(e) => handleInput(e.target.value)}
                                aria-label={capitalize(themeOption)}
                                value={themeOption}
                            />
                        ))}
                    </div>

                    <div className="pt-10 sm:pt-0 sm:border-2 p-4 shadow-2xl">
                        <div className="text-2xl arcade-font font-semibold">Theme Preview</div>
                        <div className="w-96 h-fit p-2">
                            <div className="h-48 w-full border border-base-content grid grid-flow-col grid-rows-3">
                                <div className="row-span-3 bg-base-200">BG 2</div>
                                <div className="col-span-2 bg-base-100">BG 1</div>
                                <div className="col-span-2 row-span-2 border bg-base-300">BG 03</div>
                            </div>
                            <div className="flex gap-2 p-2 flex-wrap  justify-center">

                                <button className="btn btn-primary">Primary</button>
                                <button className="btn btn-secondary">Secondary</button>
                                <button className="btn btn-accent">Accent</button>
                                <button className="btn btn-neutral">Neutral</button>
                                <button className="btn btn-info">Info</button>
                                <button className="btn btn-success">Success</button>
                                <button className="btn btn-warning">Warning</button>
                                <button className="btn btn-error">Error</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );

}
import NavBar from "./NavBar"
import Footer from "./Footer"
import PageTitle from "./PageTitle"
import { getAchievements } from "/src/data/achievements"
import Achievement from "./Achievement"
import catalogue from "/src/data/games"
import { useState, useEffect } from "react"
export default function AchievementsPage() {
    const [selected, setSelected] = useState("all")

    useEffect(() => {
        const hash = window.location.hash.replace("#", ""); // Remove '#' from hash
        const game = catalogue.find(game => game.id === hash);
        if (game) {
            setSelected(game.title);
        }
    }, []); // Run only on mount

    const achievements = getAchievements();
    return (
        <>
            <NavBar />
            <PageTitle title="Achievements" />
            {/* game choices */}
            <ul>
                <li
                    className={` btn btn-outline hover:btn-secondary ${selected === "all" ? "bg-secondary text-secondary-content" : ""}`}
                    onClick={() => setSelected("all")}
                >
                    All
                </li>
                {catalogue.map((game, index) => (
                    <li
                        key={index}
                        className={`m-2 btn btn-outline hover:btn-secondary ${selected === game.title ? "bg-secondary text-secondary-content" : ""}`}
                        onClick={() => setSelected(game.title)}
                    >
                        <a href={`#${game.id}`}>{game.title}</a>
                    </li>
                ))}
            </ul>
            <div>Flip to see reward</div>
            <ul className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
                {achievements.filter(achievement => selected === "all" || achievement.game === selected).map(achievement => (
                    <li key={achievement.id}>
                        <Achievement achievement={achievement} link={achievement.isUnlocked ? `/Settings#${achievement.reward.toLowerCase()}` : catalogue.find((game) => game.title == achievement.game).link} />
                    </li>
                ))}
            </ul>
            {/* <Sidebar catalogue={achievements}/> */}
            <Footer />

        </>
    )
}
import NavBar from "./NavBar"
import Footer from "./Footer"
import PageTitle from "./PageTitle"
import { getAchievements} from "/src/data/achievements"
import Achievement from "./Achievement"
// import Sidebar from "./Sidebar"
import catalogue from "/src/data/games"
import { useState } from "react"
export default function AchievementsPage() {
    const [selected,setSelected]=useState("all")
    const achievements = getAchievements();
    return (
        <>
            <NavBar />
            <PageTitle title="Achievements" />
            {/* game choices */}
            <ul className="space-y-2 space-x-2">
            <li 
                className={` btn btn-outline hover:btn-secondary ${selected === "all" ? "bg-secondary text-secondary-content" : ""}`} 
                onClick={() => setSelected("all")}
            >        
                All
            </li>
            {catalogue.map((game, index) => (
                <li 
                    key={index} 
                    className={` btn btn-outline hover:btn-secondary ${selected === game.title ? "bg-secondary text-secondary-content" : ""}`} 
                    onClick={() => setSelected(game.title)}
                >
                    {game.title}
                </li>
            ))}
        </ul>
            <ul className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
                {achievements.filter(achievement=>selected === "all" ||achievement.game===selected).map(achievement=>(
                    <li key={achievement.id}>
                      <Achievement achievement={achievement}/>
                    </li>
                ))}
            </ul>
            {/* <Sidebar catalogue={achievements}/> */}
            <Footer />

        </>
    )
}
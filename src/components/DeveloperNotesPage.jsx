import Footer from "./Footer";
import NavBar from "./NavBar";
import Divider from "./Divider";
import PageTitle from "./PageTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion"
//#region Image Imports
//cuber
import CuberScreenshot from "../assets/cuber/CuberScreenshot.webp"
import CuberEndlessGameplay from "../assets/cuber/CuberEndlessGameplay.mp4"
import CubicRunnerDemoLevel22 from "../assets/cuber/CubicRunnerDemoLevel22.mp4"
import CuberLvls1 from "../assets/cuber/CuberLvls1.webp"
import CuberLvls2 from "../assets/cuber/CuberLvls2.webp"
//demo
import Cuberlvl17demo from "../assets/cuber/Cuberlvl17demo.mp4"
import Cuberlvl3demo from "../assets/cuber/Cuberlvl3demo.mp4"
import initialObstacleDesigns from "../assets/cuber/initialObstacleDesigns.webp"
import notes from "../assets/cuber/notes.webp"
import potentialLvlNames from "../assets/cuber/potentialLvlNames.webp"

//BombBlitz
import BombBlitzGameplay from "../assets/bombBlitz/BombBlitzGameplay.gif"
import BombBlitzMaps from "../assets/bombBlitz/BombBlitzMaps.gif"
import BombBlitzShop from "../assets/bombBlitz/BombBlitzShop.webp"
import BombBlitzStats from "../assets/bombBlitz/BombBlitzStats.webp"
//demo
import BombBlitzGameplayDemo from "../assets/bombBlitz/BombBlitzGameplayDemo.gif"
import BombBlitzMenuDemo from "../assets/bombBlitz/BombBlitzMenuDemo.gif"

//#endregion

export default function DeveloperNotesPage() {
    const location = useLocation();
    // for scrolling to bomb blitz from navbar
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6, } }
    };
    return (
        <>
            <NavBar />
            <div className="px-[2rem]">

                <PageTitle title={"Developer Notes"} />
                <p className="text-lg ">Explore the process of how games are made, from concept to launch</p>

                <h2 id="section-Cuber"></h2>
                <main>
                    <div >
                        {/* cuber hero */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="hero sm:min-h-screen"
                            style={{ backgroundImage: `url(${CuberScreenshot})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="arcade-font mb-5 text-5xl font-bold">Cuber</h1>
                                    <p className="mb-5">
                                        A 3d runner with flappy bird elements. Endless and handcrafted levels.
                                    </p>
                                    <button className="btn btn-primary">
                                        <a href="https://littilemic-gaming.itch.io/cuber" target="_blank">
                                            Play Now on Itch.io
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        {/* Cuber Gameplay */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <h3 className="arcade-font text-2xl my-4">Gameplay</h3>
                            <Divider
                                content1=
                                {<figure >
                                    <figcaption>Gameplay from <strong>Endless Mode</strong></figcaption>
                                    <video controls loop autoPlay muted src={CuberEndlessGameplay}>
                                        Your browser does not support the video tag
                                    </video>
                                </figure>}
                                content2=
                                {<figure >
                                    <figcaption>Gameplay from Level 22 <strong>Inner Squares</strong> </figcaption>
                                    <video width="auto" height="auto" controls loop autoPlay muted src={CubicRunnerDemoLevel22}>
                                        Your browser does not support the video tag
                                    </video>
                                </figure>}
                            />
                        </motion.div>
                        {/* Cuber Levels */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <h3 className="arcade-font text-2xl my-4">Levels</h3>
                            <Divider

                                content1={
                                    <figure >
                                        <img src={CuberLvls1} alt="grid of level selection menu 1-14" />
                                    </figure>}
                                content2={
                                    <figure >
                                        <img src={CuberLvls2} alt="grid of level selection menu 1-14" />
                                    </figure>}
                            />
                        </motion.div>
                        {/* Cuber old Gameplay */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <h3 className="arcade-font text-2xl my-4">Old Gameplay</h3>
                            <p>These gameplay clips are before the level progression bar was implemented and before the next level title was
                                named.These clips are from the unity editor.
                            </p>
                            <Divider
                                content1=
                                {<figure>
                                    <figcaption>Gameplay from <strong>Slants</strong></figcaption>
                                    <video width="auto" height="auto" controls loop autoPlay muted src={Cuberlvl3demo}>
                                        Your browser does not support the video tag
                                    </video>
                                </figure>}
                                content2=
                                {<figure>
                                    <figcaption>Gameplay from "Level 17" which would become <strong>Horizontal</strong> </figcaption>
                                    <video width="auto" height="auto" controls loop autoPlay muted src={Cuberlvl17demo}>
                                        Your browser does not support the video tag
                                    </video>
                                </figure>}
                            />
                        </motion.div>


                        {/* Cuber Notes */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <h3 className="arcade-font text-2xl my-4">Planning / Notes</h3>
                            <div className="carousel max-w-md">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <p className="bg-neutral absolute bottom-0 text-neutral-content ">Initial design of potential levels</p>
                                    <img
                                        src={initialObstacleDesigns}
                                        className="w-full"
                                        alt="Initial design of potential levels" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <p className="bg-neutral absolute bottom-0 text-neutral-content ">List of potential level names</p>

                                    <img
                                        src={potentialLvlNames}
                                        className="w-full"
                                        alt="List of potential level names" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <p className="bg-neutral absolute bottom-0 text-neutral-content ">Game design notes</p>

                                    <img
                                        src={notes}
                                        className="w-full"
                                        alt="Game design notes" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>

                            </div>

                        </motion.div>

                    </div>
                    <div className="divider divider-primary"></div>

                    <div id="BombBlitz" >

                        <h2 className="my-5" id="section-BombBlitz"></h2>
                        {/* BB Hero */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                            className="relative isolate overflow-hidden bg-base-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                            {/* bg rectangle grid */}
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <svg
                                    aria-hidden="true"
                                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                                >
                                    <defs>
                                        <pattern
                                            x="50%"
                                            y={-1}
                                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                            width={200}
                                            height={200}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <svg x="50%" y={-1} className="overflow-visible fill-base-300">
                                        <path
                                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                            strokeWidth={0}
                                        />
                                    </svg>
                                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                                </svg>
                            </div>
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="lg:max-w-lg">
                                            <p className="text-base font-semibold leading-7 text-secondary">Objective : Survive</p>
                                            <h1 className="arcade-font mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Bomb Blitz</h1>
                                            <p className="mt-6 text-xl leading-8 ">
                                                A 2d survival game to click and drag citizens out of harms way.
                                            </p>
                                            <button className="btn mt-2 btn-primary">
                                                <a href="https://littilemic-gaming.itch.io/bomb-dodge-10" target="_blank">
                                                    Play Now on Itch.io
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Sticky image */}
                                <div className="sm:-ml-12 -mt-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                    <img
                                        alt="Gif of gameplay from Bomb Blitz"
                                        src={BombBlitzGameplay}
                                        className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
                                    />
                                </div>
                                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="max-w-xl text-base leading-7 lg:max-w-lg">

                                            <ul role="list" className="mt-8 space-y-8">
                                                <li className="flex gap-x-3">
                                                    <figure>
                                                        <figcaption><strong className="font-semibold ">Map Selection. </strong>Start screen with choosing different maps and modes. </figcaption>
                                                        <img
                                                            src={BombBlitzMaps}
                                                            className="w-full"
                                                            alt="gif of choosing different bomb blitz maps" />
                                                    </figure>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <figure>
                                                        <figcaption><strong className="font-semibold ">Shop. </strong>Use gold earned as in-game points to buy new hair styles, tops, bottoms or dresses for your citizens to potentially wear. </figcaption>
                                                        <img
                                                            src={BombBlitzShop}
                                                            className="w-full"
                                                            alt="img of in-game shop" />
                                                    </figure>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <figure>
                                                        <figcaption><strong className="font-semibold">Stats. </strong>Track your highest scores across the different level modifiers. </figcaption>
                                                        <img
                                                            src={BombBlitzStats}
                                                            className="w-full"
                                                            alt="image of player high scores across the modifiers as a tri venn diagram" />
                                                    </figure>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* BB old  */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <h3 className="arcade-font text-2xl my-4">Old vs New Gameplay</h3>
                            <h4 className="text-xl my-4">Start Menu</h4>
                            <p>Click and drag to sliders to see the old (left) and new (right) changes</p>
                            <div className="flex justify-center">
                                <div className="diff w-full sm:w-5/6 h-96 sm:h-[48rem]">
                                    <div className="diff-item-2">
                                        <div style={{
                                            backgroundImage: `url(${BombBlitzMaps})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "contain"
                                        }}
                                            className="bg-primary text-primary-content grid place-content-end text-8xl font-black">
                                            New
                                        </div>

                                    </div>
                                    <div className="diff-item-1">
                                        <div style={{
                                            backgroundImage: `url(${BombBlitzMenuDemo})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "contain"
                                        }} className="bg-base-200 grid place-content-start text-8xl font-black">Old</div>
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <Divider
                                content1={
                                    <ul className="list-disc text-start">
                                        <h5>Old</h5>
                                        <li>Wanted click and drag in start menu because it was similar to gameplay.</li>
                                        <li>Players would click and drag only 1 map into Level Select black box area, and the background map
                                            would
                                            change in realtime.</li>
                                        <li>Players would click and drag at least 1 mode into Mode Select black box area.</li>
                                        <li>Tooltips were added to try and help inform players of what different symbols meant.</li>
                                        <li>The black boxes would turn green if selection as valid and red if invalid.
                                            Later changed because player testing revealed the UI was unintuitive and players had trouble starting
                                            the
                                            game on their own.</li>
                                    </ul>}
                                content2={
                                    <ul className="list-disc text-start" >
                                        <h5>New</h5>
                                        <li>Game cannot start until map is chosen. So, "Start Game" is replaced by "Choose a Map" to guide
                                            players.
                                        </li>
                                        <li>Players can click directly on map icons and the background would be changed to the selected one.
                                        </li>
                                        <li>Modifiers can be toggled on or off</li>
                                        <li>"Modes" changed to "Modifiers", to imply multiple options can be chosen</li>
                                        <li>All Modifiers are on by default, to help start game and to gain money for store.</li>
                                        <li>Turn all Modifiers off for a <strong>Special</strong> surprise.</li>
                                    </ul>}
                            />
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <h4 className="text-xl my-4">Gameplay</h4>
                            <p>Click and drag to sliders to see the old (left) and new (right) changes</p>

                            <div className="flex justify-center">
                                <div className="diff w-full sm:w-5/6 h-96 sm:h-[48rem]">
                                    <div className="diff-item-2">
                                        <div style={{
                                            backgroundImage: `url(${BombBlitzGameplay})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "contain"
                                        }}
                                            className="bg-primary text-primary-content grid place-content-end text-8xl font-black">
                                            New
                                        </div>

                                    </div>
                                    <div className="diff-item-1">
                                        <div style={{
                                            backgroundImage: `url(${BombBlitzGameplayDemo})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "contain"
                                        }} className="bg-base-200 grid place-content-start text-8xl font-black">Old</div>
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            <Divider
                                content1={

                                    <ul className="list-disc text-start">
                                        <h5>Old</h5>
                                        <li>No particle effects.</li>
                                        <li>No citizen look diversity</li>
                                        <li>Citizens spawned upside down to show their invincible</li>
                                    </ul>}
                                content2={
                                    <ul className="list-disc text-start" >
                                        <h5>New</h5>
                                        <li>Particles on explosion added. Amount of particles based on strength of bomb.</li>
                                        <li>Citizens spawn with a temporary bubble shield with timer to show how long invincibility lasts.</li>
                                        <li>Citizens spawn with random clothes and colors based off what player purchased in Shop.</li>
                                    </ul>} />
                        </motion.div>


                    </div>

                </main >
            </div>
            <Footer />

        </>
    )
}
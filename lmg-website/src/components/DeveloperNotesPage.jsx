import Footer from "./Footer";
import NavBar from "./NavBar";
import Divider from "./Divider";
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
    return (
        <>
            <NavBar />

            <h1 className="text-3xl">Developer Notes</h1>
            {/* <div className=" flex justify-center border 2 border-slate-400">
                <div role="tablist" className="tabs  border 2 border-slate-400 tabs-bordered">
                    <input defaultChecked type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Cuber" />
                    <div role="tabpanel" className="tab-content p-10">
                        Tab content 1

                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Bomb Blitz"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        Tab content 2
                    </div>

                </div>
            </div> */}

            <h2 id="section-Cuber"></h2>

            <main>
                <div
                    className="hero min-h-screen"
                    style={{ backgroundImage: `url(${CuberScreenshot})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Cuber</h1>
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
                </div>
                <div className="cuber">

                    <h3>Gameplay</h3>
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


                    <h3>Levels</h3>

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

                    <h3>Old Gameplay</h3>
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


                    <h3>Planning / Notes</h3>
                    <p>Use the <kbd className="kbd">◀︎</kbd> <kbd className="kbd">▶︎</kbd> arrows to control the slide show below </p>
                    <div className="carousel rounded-box w-1/2 lg:w-1/3">
                        <div className="carousel-item w-full">
                            <figure>
                                <figcaption>Initial design of potential levels</figcaption>
                                <img
                                    src={initialObstacleDesigns}
                                    className="w-full"
                                    alt="Initial design of potential levels" />
                            </figure>
                        </div>
                        <div className="carousel-item w-full">
                            <figure>
                                <figcaption>List of potential level names</figcaption>
                                <img
                                    src={potentialLvlNames}
                                    className="w-full"
                                    alt="List of potential level names" />
                            </figure>
                        </div>
                        <div className="carousel-item w-full">
                            <figure>
                                <figcaption>Game design notes</figcaption>
                                <img
                                    src={notes}
                                    className="w-full"
                                    alt="Game design notes" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="bombBlitz">
                    <h2 id="section-BombBlitz">Bomb Blitz</h2>
                    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
                                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
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
                                        <p className="text-base font-semibold leading-7 text-indigo-600">Objective : Survive</p>
                                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bomb Blitz</h1>
                                        <p className="mt-6 text-xl leading-8 text-gray-700">
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
                            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                <img
                                    alt="Gif of gameplay from Bomb Blitz"
                                    src={BombBlitzGameplay}
                                    className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
                                />
                            </div>
                            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div className="lg:pr-4">
                                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                                        <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                            <li className="flex gap-x-3">
                                                <figure>
                                                    <figcaption><strong className="font-semibold text-gray-900">Map Selection. </strong>Start screen with choosing different maps and modes. </figcaption>
                                                    <img
                                                        src={BombBlitzMaps}
                                                        className="w-full"
                                                        alt="gif of choosing different bomb blitz maps" />
                                                </figure>
                                            </li>
                                            <li className="flex gap-x-3">
                                                <figure>
                                                    <figcaption><strong className="font-semibold text-gray-900">Shop. </strong>Use gold earned as in-game points to buy new hair styles, tops, bottoms or dresses for your citizens to potentially wear. </figcaption>
                                                    <img
                                                        src={BombBlitzShop}
                                                        className="w-full"
                                                        alt="img of in-game shop" />
                                                </figure>
                                            </li>
                                            <li className="flex gap-x-3">
                                                <figure>
                                                    <figcaption><strong className="font-semibold text-gray-900">Stats. </strong>Track your highest scores across the different level modifiers. </figcaption>
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
                    </div>


                    <h3>Old vs New Gameplay</h3>
                    <h4>Start Menu</h4>
                    <div className="flex justify-center">
                        <div className="diff w-5/6 h-[48rem]">
                            <div className="diff-item-1">
                                <div style={{
                                    backgroundImage: `url(${BombBlitzMaps})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain"
                                }}
                                    className="bg-primary text-primary-content grid place-content-start text-8xl font-black">
                                    New
                                </div>

                            </div>
                            <div className="diff-item-2">
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
                                <li>The black boxes would turn green if selectionw as valid and red if invalid.
                                    Later changed because player testing reveiled the UI was unintuitive and players had trouble starting
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

                    <h4>Gameplay</h4>
                    <div className="flex justify-center">
                        <div className="diff w-5/6 h-[48rem]">
                            <div className="diff-item-1">
                                <div style={{
                                    backgroundImage: `url(${BombBlitzGameplay})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain"
                                }}
                                    className="bg-primary text-primary-content grid place-content-start text-8xl font-black">
                                    New
                                </div>

                            </div>
                            <div className="diff-item-2">
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
                                <li>Citizens spawn with a temporary bubble shield with timer to show how long invincibilty lasts.</li>
                                <li>Citizens spawn with random clothes and colors based off what player purchased in Shop.</li>
                            </ul>}
                    />

                </div>

            </main >

            <Footer />

        </>
    )
}
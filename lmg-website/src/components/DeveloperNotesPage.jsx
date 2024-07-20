import Footer from "./Footer";
import NavBar from "./NavBar";

//#region Image Imports
//cuber
import CuberScreenshot from "../assets/cuber/CuberScreenshot.png"
import CuberEndlessGameplay from "../assets/cuber/CuberEndlessGameplay.mp4"
import CubicRunnerDemoLevel22 from "../assets/cuber/CubicRunnerDemoLevel22.mp4"
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

            <h2 id="section-Cuber">Cuber</h2>

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
                    <div className="flex w-full flex-col lg:flex-row">
                        <figure className="lg:w-1/2 ">
                            <figcaption>Gameplay from <strong>Endless Mode</strong></figcaption>
                            <video controls loop autoPlay muted src={CuberEndlessGameplay}>
                                Your browser does not support the video tag
                            </video>
                        </figure>

                        <div className="divider lg:divider-horizontal"></div>
                        <figure className="lg:w-1/2">
                            <figcaption>Gameplay from Level 22 <strong>Inner Squares</strong> </figcaption>
                            <video width="auto" height="auto" controls loop autoPlay muted src={CubicRunnerDemoLevel22}>
                                Your browser does not support the video tag
                            </video>
                        </figure>
                    </div>

                    <h3>Gameplay</h3>
                    <div className="flex w-full flex-col lg:flex-row">


                        <div className="divider lg:divider-horizontal"></div>

                    </div>
                    <h3>Old Gameplay</h3>
                    <p>These gameplay clips are before the level progression bar was implemented and before the next level title was
                        named.These
                        clips are from the unity editor.</p>
                    <figure>
                        <figcaption>Gameplay from <strong>Slants</strong></figcaption>
                        <video width="auto" height="auto" controls loop autoPlay muted src="videos/Cuberlvl3demo.mp4">
                            Your brower does not support the video tag
                        </video>
                    </figure>
                    <figure>
                        <figcaption>Gameplay from "Level 17" which would become <strong>Horizontal</strong> </figcaption>
                        <video width="auto" height="auto" controls loop autoPlay muted src="videos/Cuberlvl17demo.mp4">
                            Your brower does not support the video tag
                        </video>
                    </figure>
                    <h3>Planning / Notes</h3>
                    <figure>
                        <figcaption>Initial design of potential levels</figcaption>
                        <img src={CuberScreenshot} alt="" />
                        {/* <img src="images/intital obstacle designd.jpg" alt="initial design on some wall levels" /> */}
                    </figure>
                    <figure>
                        <figcaption>Game design notes</figcaption>
                        <img src="images/notes + ideas.jpg" alt="game design notes" />
                    </figure>
                    <figure>
                        <figcaption>List of potential level names</figcaption>
                        <img src="images/potential level names.jpg" alt="list of potential level names" />
                    </figure>
                    <h3>Design Document</h3>
                </div>

                <div className="bombBlitz">
                    <h2 id="section-BombBlitz">Bomb Blitz</h2>
                    <a href="https://littilemic-gaming.itch.io/bomb-dodge-10" target="_blank">
                        Play Now on Itch.io
                    </a>
                    <h3>Summary</h3>
                    <p>2d survival game to click and drag citizens out of harms way</p>
                    <h3>Old vs New Gameplay</h3>
                    <div className="comparison">
                        <div>
                            <figure>
                                <figcaption>Inital version of Start Menu. </figcaption>
                                <img src="images/BombBlitzMenuDemo.gif" alt="inital menu design" />
                                <figcaption>
                                    <ul>
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
                                    </ul>
                                </figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <figcaption>Current Version of Start Menu.</figcaption>
                                <img src="images/BombBlitzMaps.gif" alt="current menu deisgn" />
                                <figcaption>
                                    <ul>
                                        <li>Game cannot start until map is chosen. So, "Start Game" is replaced by "Choose a Map" to guide
                                            players.
                                        </li>
                                        <li>Players can click directly on map icons and the background would be changed to the selected one.
                                        </li>
                                        <li>Modifiers can be toggled on or off</li>
                                        <li>"Modes" changed to "Modifiers", to imply multiple options can be chosen</li>
                                        <li>All Modifiers are on by default, to help start game and to gain money for store.</li>
                                        <li>Turn all Modifiers off for a <strong>Special</strong> surprise.</li>
                                    </ul>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="comparison">
                        <figure>
                            <figcaption>Inital gameplay. </figcaption>
                            <img src="images/BombBlitzGameplayDemo.gif" alt="inital gameplay" />
                            <figcaption>
                                <ul>
                                    <li>No particle effects.</li>
                                    <li>No citizen look diversity</li>
                                    <li>Citizens spawned upside down to show their invincible</li>
                                </ul>
                            </figcaption>
                        </figure>
                        <figure>
                            <figcaption>Polished gameplay.</figcaption>
                            <img src="images/BombBlitzGameplay.gif" alt="current gameplay" />
                            <figcaption>
                                <ul>
                                    <li>Particles on explostion added. Amount of particles based on strength of bomb.</li>
                                    <li>Citizens spawn with a temporary bubble shield with timer to show how long invincibilty lasts.</li>
                                    <li>Citizens spawn with random clothes and colors based off what player purchased in Shop.</li>

                                </ul>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="sprites">
                        <h3>Sprites</h3>
                        <figure>
                            <figcaption>Death Spritesheet</figcaption>
                            <img src="images/civilian_death.png" alt="" />
                        </figure>
                        <figure>
                            <figcaption>Civilian Hairs spritesheet</figcaption>
                            <img src="images/Civilian_hairs.png" />
                        </figure>
                        <figure>
                            <figcaption>Civilian Tops spritesheet</figcaption>
                            <img src="images/Civilian_tops.png" />
                        </figure>
                        <figure>
                            <figcaption>Civilian Bottoms Spritesheet</figcaption>
                            <img src="images/Civilian_bottoms.png" />
                        </figure>
                        <figure>
                            <figcaption>Countdown Animation</figcaption>
                            <img className="w-32" src="images/Countdown.gif" />
                        </figure>
                    </div>
                </div>

                <div class="cuber">
                    <h2 id="section-Cuber">Cuber</h2>
                    <a href="https://littilemic-gaming.itch.io/cuber" target="_blank">
                        Play Now on Itch.io
                    </a>
                    <h3>Summary</h3>
                    <p>3d runner with flappybird elements. Endless and handcrafted levels.</p>

                    <h3>Gameplay</h3>

                    <h3>Screenshots</h3>

                    <figure>
                        <figcaption>Level Selection Screen.</figcaption>
                        <img src="images/CuberLvls1.PNG" alt="grid of level selection menu 1-14" />
                        <img src="images/CuberLvls2.PNG" alt="grid of level selection menu 15-29" />

                    </figure>

                </div>


            </main>

            <Footer />

        </>
    )
}
import GameCarousel from "./GameCarousel"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Sidebar({ catalogue }) {
    const [activeGame, setActiveGame] = useState(null)
    return (
        <>
            <div className=" drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, ease: "easeOut" }}
                    className="drawer-content flex flex-col h-full items-center ">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open Games
                    </label>
                    <GameCarousel
                        catalogue={catalogue}
                        setActiveGame={setActiveGame}
                    />

                </motion.div>
                {/* Drawer Side with Animation */}
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="drawer-side"
                >
                    {/* Background overlay */}
                    <motion.label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    ></motion.label>

                    <ul className="menu gap-2 bg-base-200 text-base-content min-h-full w-72 shadow rounded-r-lg p-4">
                        <p className="text-lg pb-4">Choose a Game Below!</p>

                        {/* Sidebar content here */}
                        {catalogue.map((game, index) => (
                            <motion.li
                                className={`p-2 rounded-lg ${activeGame === game.id ? "bg-neutral text-base-100" : ""}`}
                                key={index}
                                whileHover={{ x: 10, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                whileTap={{ scale: 1.1 }}
                                onClick={() => setActiveGame(game.id)}
                            >
                                <a href={`#${game.id}`}>{game.title}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </>
    )
}

// export default function Sidebar(props) {
//     const [activeGame, setActiveGame] = useState(null)
//     return (
//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col items-center">
//                 {/* Page content here */}
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
//                     Open Games
//                 </label>
//                 <GameCarousel setActiveGame={setActiveGame} catalogue={props.catalogue} />
//             </div>

//             {/* Drawer Side with Animation */}
//             <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//             <motion.div
//                 // initial={{ x: "-100%", opacity: 0 }}
//                 // animate={{ x: 0, opacity: 1 }}
//                 // exit={{ x: "-100%", opacity: 0 }}
//                 // transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="drawer-side"
//             >
//                 {/* Background overlay */}
//                 <ul className="menu gap-2 bg-base-200 text-base-content min-h-full w-72 shadow rounded-r-lg p-4">
//                     <p className="text-lg pb-4">Choose a Game Below!</p>

//                     {/* Sidebar content here */}
//                     {props.catalogue.map((game, index) => (
//                         <motion.li
//                             className={`p-2 rounded-lg ${activeGame === index ? "bg-neutral text-base-100" : ""}`}
//                             key={index}
//                             whileHover={{ x: 10, scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                             whileTap={{ scale: 1.1 }}
//                             onClick={() => setActiveGame(index)}
//                         >
//                             <a href={`#${game.id}`}>{game.title}</a>
//                         </motion.li>
//                     ))}
//                 </ul>
//             </motion.div>
//         </div>
//     );
// }

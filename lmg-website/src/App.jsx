import './App.css'
import Footer from './components/Footer'
import TitleScreenLinks from './components/TitleScreenLinks'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { createAchievements } from './data/achievements'
function App() {

  const pages = [
    { title: "Start Game", link: "/WebGames" },
    { title: "Achievements", link: "/Achievements" },
    { title: "Extra", link: "/Extra" },
    { title: "Settings", link: "/Settings" },
    { title: "Credits", link: "/Credits" }
  ];

  return (
    <>
      <div className=' bgContainer'>
        <div className="flex flex-col justify-end items-end w-full h-full ">
          <motion.ul
            className="mr-6 mb-12 gap-4 menu menu-vertical rounded-box"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: .3 }
              }
            }}
          >
            {pages.map((page, index) => (
              <motion.li
                whileHover={{ scale: 1.1, transition: { duration: .2, ease: "easeOut" } }}
                key={index}
                variants={{
                  hidden: { opacity: 0, translateX: "100%" },
                  visible: {
                    opacity: 1,
                    translateX: "0%",
                    transition: { ease: "easeOut", duration: 1 }
                  }
                }}>
                <TitleScreenLinks
                  title={page.title}
                  link={page.link}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className='absolute bottom-0 left-0'>
          <Footer />
        </div>

      </div>

    </>
  )
}

export default App

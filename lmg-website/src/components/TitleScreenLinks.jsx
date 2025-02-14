import { Link } from "react-router-dom"
import {motion} from "motion/react"
export default function TitleScreenLinks({ link, title, delayTime }) {
    return (
        <>
            <motion.div 
            // whileHover={{scale:"1.1"}}
                initial={{ transform: "translateX(100%)", opacity:0}}
                animate={{ transform: "translateX(0%)",opacity:1 }}
                transition={{ease:"easeOut", duration:1 ,delay:delayTime}}
                
                >
                <Link to={link} >
                    <button className='hover:scale-110 btn btn-ghost italic tracking-widest w-full h-full font-bold text-3xl p-2 m-2 font-serif text-black shadow-lg border rounded-md' >{title}</button>
                </Link>
            </motion.div>

        </>
    )
}
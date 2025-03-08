import { motion } from "framer-motion";
/**
 * 
 * @param {String} Title - name of web page 
 * @returns Animated Title with Parallax Effect
 */
export default function PageTitle({title}){
    return(
        <>
        <motion.h1 
            className="text-5xl my-5 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ y: [10, 0], opacity: [0.5, 1] }} // Moves in as user scrolls
            transition={{ duration: 0.7, ease: "easeOut" }}
            >
            {title}
      </motion.h1>
        </>
    )
}
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TimelineItem from "./TimelineItem";
import timeline from "../data/Timeline";

export default function AboutPage() {
  return (
    <>
      <NavBar />

      {/* Animated Title with Parallax Effect */}
      <motion.h1 
        className="text-3xl my-5 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ y: [10, 0], opacity: [0.5, 1] }} // Moves in as user scrolls
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Credits
      </motion.h1>

      {/* Animated Timeline */}
      <motion.ul 
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
      >
        {timeline.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }} // Animates when it enters viewport
            transition={{ ease: "easeOut", duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: "some" }} // Ensures smooth entrance
          >
            <TimelineItem
              time={item.time}
              title={item.title}
              description={item.description}
              left={index % 2 === 0}
            />
          </motion.li>
        ))}
      </motion.ul>

      <Footer />
    </>
  );
}

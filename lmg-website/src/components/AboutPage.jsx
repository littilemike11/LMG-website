import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TimelineItem from "./TimelineItem";
import timeline from "../data/Timeline";

export default function AboutPage() {
  return (
    <>
      <NavBar />

      {/* Animated Title */}
      <motion.h1 
        className="text-3xl my-5 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Credits
      </motion.h1>

      {/* Animated Timeline Container */}
      <motion.ul 
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Staggers timeline items
          }
        }}
      >
        {timeline.map((item, index) => (
          <motion.li 
            key={index}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
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

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TimelineItem from "./TimelineItem";
import timeline from "../data/Timeline";
import PageTitle from "./PageTitle";
import Portfolio from "./Portfolio";
export default function AboutPage() {
  return (
    <>
      <NavBar />
      <PageTitle title={"Credits"} />
      <Portfolio />

      <PageTitle title={"My Journey"} isSubtitle={true} />
      <p>See how my tech career all started</p>
      {/* Animated Timeline */}
      <motion.ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
      >
        {timeline.map((item, index) => (
          <motion.li
            key={index}
            initial={{
              opacity: 0,
              x: window.innerWidth < 768 ? 0 : (index % 2 === 0 ? -100 : 100), // Slide left/right desktop
            }}
            whileInView={{ opacity: 1, x: 0 }} // Animates when it enters viewport
            transition={{ ease: "easeOut", duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: .2 }} // Ensures smooth entrance
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

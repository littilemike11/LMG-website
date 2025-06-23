import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TimelineItem from "./TimelineItem";
import timeline from "../data/Timeline";
import PageTitle from "./PageTitle";
import Portfolio from "./Portfolio";
import GameInfo from "./GameInfo";
import catalogue from '../data/games';
export default function AboutPage() {
  return (
    <>
      <NavBar />
      <PageTitle title={"About LMG"} />
      {/* <Portfolio /> */}

      <div>
        <h2 className="text-lg" >Understand how this website came to be.</h2>

      </div>
      <div className="w-1/2 flex  text-left m-auto ">
        <section>
          <p>
            <span className="text-primary font-bold">LMGGames.com</span>  is a personal gaming portfolio showcasing the full catalog of games I've created. Over time, it’s grown into more than just a gallery—it now explores the creative process behind each game through the lenses of a designer, developer, and learner.
          </p>
          <p>
            You'll find a wide variety of games here — from quizzes to word puzzles, mobile to desktop experiences, and everything from lighthearted ideas to deeper narratives. These games are built using vanilla JavaScript or game engines like Unity, depending on the vision and scope of each project.
          </p>
          <p>
            In the spirit of play, the site itself functions a bit like a game, offering challenges, achievements, and rewards for you to obtain.
          </p>
          <p>I’m excited to keep building, learning, and sharing more games.</p>
          <p className="text-center font-medium text-lg">Thanks for playing.</p>
        </section>

      </div>
      <PageTitle title={"About the Games"} />
      <ul className="bg-base-100 mb-10 grid grid-cols-1 justify-items-center items-center gap-x-10 gap-y-14 sm:gap-y-5 m-auto sm:p-10 sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 ">
        {catalogue.map(game => (
          <li key={game.id}>
            <GameInfo game={game} />
          </li>
        ))}

      </ul>
      <div>
        <PageTitle title={"Where's One"} />
        <div>
          <p>
            The 1st One
            the trial run
            wanted to learn/ practice with html grid system. Originally done pre react and later converted.
            The idea is simple wheres waldo but for 1. look for the number 1 in a grid of random other similar characters(i,l,! and |)

          </p>
        </div>
        <PageTitle title={"Do You Tube?"} />
        <div>
          <p>
            wanted to learn about apis, used youtube api to get video information
            inspired from other higher or lower games
          </p>
        </div>
      </div>
      {/* <PageTitle title={"My Journey"} isSubtitle={true} />
      <p>See how my tech career all started</p> */}
      {/* Animated Timeline */}
      {/* <motion.ul
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
      </motion.ul> */}



      <Footer />

    </>
  );
}

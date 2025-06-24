import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TimelineItem from "./TimelineItem";
import timeline from "../data/Timeline";
import PageTitle from "./PageTitle";
import Portfolio from "./Portfolio";
import GameInfo from "./GameInfo";
import catalogue from "../data/games";
export default function AboutPage() {
  // **************** ALTERNATIVE IDEAS***********
  // 1. an info/learn more button on homepage for each game card. info button opens up a modal with sumary
  // 2. learn more button links to new page about each game, idk if this fits for such various game sizes

  return (
    <>
      <NavBar />
      <PageTitle title={"About LMG"} />
      {/* <Portfolio /> */}

      <div>
        <h2 className="text-lg">Understand how this website came to be.</h2>
      </div>
      <section className="max-w-4xl mx-auto px-4 space-y-10">
        <div className="bg-base-100 p-6 sm:p-10 space-y-6 text-left leading-relaxed">
          <p>
            <span className="text-primary font-bold">LMGGames.com</span> is a
            personal gaming portfolio showcasing the full catalog of games I've
            created. Over time, it’s grown into more than just a gallery—it now
            explores the creative process behind each game through the lenses of
            a designer, developer, and learner.
          </p>
          <p>
            You'll find a wide variety of games here — from quizzes to word
            puzzles, mobile to desktop experiences, and everything from
            lighthearted ideas to deeper narratives. These games are built using
            vanilla JavaScript or game engines like Unity, depending on the
            vision and scope of each project.
          </p>
          <p>
            In the spirit of play, the site itself functions a bit like a game,
            offering challenges, achievements, and rewards for you to obtain.
          </p>
          <p>I’m excited to keep building, learning, and sharing more games.</p>
          <p className="text-center font-medium text-lg text-accent mt-6">
            Thanks for playing.
          </p>
        </div>
      </section>

      <PageTitle title={"About the Games"} />
      <h2 className="text-lg">Understand how the games came to be.</h2>

      {/* <ul className="bg-base-100 mb-10 grid grid-cols-1 justify-items-center items-center gap-x-10 gap-y-14 sm:gap-y-5 m-auto sm:p-10 sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 ">
        {catalogue.map((game) => (
          <li key={game.id}>
            <GameInfo game={game} />
          </li>
        ))}
      </ul> */}
      <div className="max-w-3xl mx-auto">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            <PageTitle title="Where's One" />
          </div>
          <div className="collapse-content">
            <div className="max-w-3xl mx-auto px-4 py-6 text-left space-y-4">
              <p>
                <strong>Where’s One</strong> was the first experiment—a simple
                concept designed to help me practice HTML grid layouts. The idea
                is inspired by “Where’s Waldo?” but with a minimalist twist: you
                search for the number <strong>1</strong> hidden among
                similar-looking characters like <code>l</code>, <code>i</code>,{" "}
                <code>!</code>, and <code>|</code>.
              </p>
              <p>
                It was originally built using vanilla HTML/CSS/JavaScript and
                later converted to React. It’s a great example of how simplicity
                and clarity can still create a fun challenge.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            <PageTitle title="Do You Tube?" />
          </div>
          <div className="collapse-content">
            <div className="max-w-3xl mx-auto px-4 py-6 text-left space-y-4">
              <p>
                This game was my first attempt at working with APIs. I used the
                YouTube Data API to fetch video information, then built a
                gameplay loop inspired by the “Higher or Lower” format.
              </p>
              <p>
                Players compare YouTube videos based on view counts or
                popularity metrics. It was an exciting way to explore real-time
                data, but I plan to revisit the UI to make it more polished and
                accessible.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            <PageTitle title="Nerd Bowl" />
          </div>
          <div className="collapse-content">
            <div className="max-w-3xl mx-auto px-4 py-6 text-left space-y-4">
              <p>
                Born out of a coding bootcamp homework assignment, Nerd Bowl was
                built to practice working with APIs and building quiz-style
                interfaces. I discovered the Open Trivia Database and used it as
                the source for trivia questions.
              </p>
              <p>
                The challenge was making the parsing through the api responses
                and making the UI intuitive. It eventually evolved into a fun,
                nerdy trivia game with a sleek layout and dynamic feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            <PageTitle title="Chain Game" />
          </div>
          <div className="collapse-content">
            <div className="max-w-3xl mx-auto px-4 py-6 text-left space-y-4">
              <p>
                Inspired by a mix of social media trends and the classic game
                show <em>Chain Reaction</em>, this game challenges players to
                guess the missing words in a word chain.
              </p>
              <p>
                I initially experimented with OpenAI to generate dynamic chains,
                but the current version uses a curated list of pre-defined
                chains for simplicity. I'm exploring ways to reintroduce
                AI-powered generation to keep the game fresh and replayable.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            <PageTitle title="No Esc" />
          </div>
          <div className="collapse-content">
            <div className="max-w-3xl mx-auto px-4 py-6 text-left space-y-4">
              <p>
                Another project born during coding bootcamp,{" "}
                <strong>No Esc</strong> began with my curiosity about modals and
                how they interrupt user flow. I leaned into this "trap" feeling
                and developed a dark, tech-noir theme.
              </p>
              <p>
                Drawing inspiration from <em>The Matrix</em> and rogue AI
                concepts, the game builds a sense of unease and narrative
                mystery. I’m currently experimenting with meta gameplay elements
                to deepen immersion.
              </p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            <PageTitle title="Absurd App" />
          </div>
          <div className="collapse-content">
            <div className="max-w-3xl mx-auto px-4 py-6 text-left space-y-4">
              <p>
                A satirical take on job applications, this game pokes fun at how
                long, pointless, and repetitive real-world forms can be. The
                goal? Apply for a job at the “Best Company in the World”—a
                company that’s as absurd as the process itself.
              </p>
              <p>
                Expect ridiculous prompts, nonsensical dropdowns, and
                delightfully unhelpful questions. It's all about laughing at
                bureaucracy while making players second-guess why forms are the
                way they are.
              </p>
            </div>
          </div>
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

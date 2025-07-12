import UnderConstruction from "../assets/webGameIcons/UnderConstruction.jpg";
import WheresOneIcon from "../assets/webGameIcons/WheresOneIcon.jpg";
import NoEscIcon from "../assets/webGameIcons/NoEscIcon.png";
import NerdBowlIcon from "../assets/webGameIcons/NerdBowlIcon.jpg";
import DoYouTubeIcon from "../assets/webGameIcons/DoYoutubeIcon.png";
import ChainGameIcon from "/src/assets/webGameIcons/ChainGameIcon.jpg";
import BombBlitzIcon from "../assets/webGameIcons/BombBlitzIcon.png";
import cuberIcon from "../assets/webGameIcons/cuberIcon.png";
let catalogue = [
  {
    id: "ChainGame",
    title: "Chain Game",
    img: ChainGameIcon,
    summary: "Connect words together through common phrases",
    link: "/ChainGame",
    info: (<><p>
      Inspired by a mix of social media trends and the classic game
      show <em>Chain Reaction</em>, this game challenges players to
      guess the missing words in a word chain.
    </p>
      <p>
        I initially experimented with OpenAI to generate dynamic chains,
        but the current version uses a curated list of pre-defined
        chains for simplicity. I'm exploring ways to reintroduce
        AI-powered generation to keep the game fresh and replayable.
      </p></>)
  },
  {
    id: "NerdBowl",
    title: "Nerd Bowl",
    img: NerdBowlIcon,
    summary: "Test your knowledge in all things nerdy",
    link: "/NerdBowl",
    info: (<><p>
      Born out of a coding bootcamp homework assignment, Nerd Bowl was
      built to practice working with APIs and building quiz-style
      interfaces. I discovered the Open Trivia Database and used it as
      the source for trivia questions.
    </p>
      <p>
        The challenge was making the parsing through the api responses
        and making the UI intuitive. It eventually evolved into a fun,
        nerdy trivia game with a sleek layout and dynamic feedback.
      </p></>)
  },
  {
    id: "DoYouTube",
    title: "Do You Tube?",
    img: DoYouTubeIcon,
    summary: "A higher or lower for youtube",
    link: "/DoYouTube",
    info: (<><p>
      This game was my first attempt at working with APIs. I used the
      YouTube Data API to fetch video information, then built a
      gameplay loop inspired by the “Higher or Lower” format.
    </p>
      <p>
        Players compare YouTube videos based on view counts or
        popularity metrics. It was an exciting way to explore real-time
        data, but I plan to revisit the UI to make it more polished and
        accessible.
      </p></>)
  },
  {
    id: "WheresOne",
    title: "Where's 1",
    img: WheresOneIcon,
    summary: "The where's Waldo but for 1",
    link: "/WheresOne",
    info: (
      <>
        <p>
          <strong>Where’s One</strong> was the first experiment—a simple concept
          designed to help me practice HTML grid layouts. The idea is inspired
          by “Where’s Waldo?” but with a minimalist twist: you search for the
          number <strong>1</strong> hidden among similar-looking characters like{" "}
          <code>l</code>, <code>i</code>, <code>!</code>, and <code>|</code>.
        </p>
        <p>
          It was originally built using vanilla HTML/CSS/JavaScript and later
          converted to React. It’s a great example of how simplicity and clarity
          can still create a fun challenge.
        </p>
      </>
    ),
  },
  {
    id: "BombBlitz",
    title: "Bomb Blitz",
    img: BombBlitzIcon,
    summary: "Drag citizens out of harms way.",
    link: "https://littilemic-gaming.itch.io/bomb-dodge-10",
    isPCOnly: true,
    info: (<>
      <p> <strong>Bomb Blitz</strong> is a fast-paced, top-down 2D pixel art game where players must act quickly to save citizens from incoming explosions. Set in handcrafted environments the player drags panicked civilians to safety while avoiding the chaos around them. The pressure builds as bombs fall faster and closer, challenging players' reflexes and multitasking skills. As players rack up high scores, they earn gold that can be spent in an in-game shop to unlock fun outfit variations for the citizens—adding a layer of personality and visual flair. <strong>Bomb Blitz</strong> also includes gameplay modifiers that change up the rules and pacing, offering variety and new challenges with each session.</p></>)
  },
  {
    id: "Cuber",
    title: "Cuber",
    img: cuberIcon,
    summary: "Dodge obstacles and try to make your way to the end.",
    link: "https://littilemic-gaming.itch.io/cuber",
    isPCOnly: true,
    info: (<><p> <strong>Cuber</strong> is a 3D runner that combines the fast-paced action of games like Temple Run and Subway Surfers with the verticality and timing mechanics of Flappy Bird. Designed in Unity using a minimalist low-poly style—where everything is built from simple cubes— <strong>Cuber</strong> offers both handcrafted levels and an endless mode for replayability.As players progress, the game evolves from grounded running to free-flying segments that introduce a new layer of freedom and challenge. It showcase creatively designed environments like outer space or a dragon-themed level. Each level features a progress tracker, while the endless mode encourages players to beat their own high scores.</p></>)
  },
  {
    id: "NoEsc",
    title: "No Esc",
    img: NoEscIcon,
    summary: "Can you escape this?",
    link: "",
    info: (<><p>
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
      </p></>)
  },
  {
    id: "AbsurdApp",
    title: "Absurd App",
    img: UnderConstruction,
    summary: "Apply to thew best company in the world: Faux Firms",
    link: "",
    info: (<>
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
      </p></>)
  },
];
export default catalogue;

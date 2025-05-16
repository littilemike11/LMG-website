import UnderConstruction from "../assets/webGameIcons/UnderConstruction.jpg";
import WheresOneIcon from "../assets/webGameIcons/WheresOneIcon.jpg";
import NoEscIcon from "../assets/webGameIcons/NoEscIcon.png";
import NerdBowlIcon from "../assets/webGameIcons/NerdBowlIcon.jpg";
import DoYouTubeIcon from "../assets/webGameIcons/DoYoutubeIcon.png";
import ChainGameIcon from "/src/assets/webGameIcons/ChainGameIcon.jpg"
import BombBlitzIcon from "../assets/webGameIcons/BombBlitzIcon.png"
import cuberIcon from "../assets/webGameIcons/cuberIcon.png"
let catalogue = [
  {
    id: "ChainGame",
    title: "Chain Game",
    img: ChainGameIcon,
    summary: "Connect words together through common phrases",
    link: "/ChainGame",
  },
  {
    id: "NerdBowl",
    title: "Nerd Bowl",
    img: NerdBowlIcon,
    summary: "Test your knowledge in all things nerdy",
    link: "/NerdBowl",
  },
  {
    id: "DoYouTube",
    title: "Do You Tube?",
    img:DoYouTubeIcon,
    summary: "A higher or lower for youtube",
    link: "/DoYouTube",
  },
  {
    id: "WheresOne",
    title: "Where's 1",
    img: WheresOneIcon,
    summary: "The where's Waldo but for 1",
    link: "/WheresOne",
  },
  {
    id: "BombBlitz",
    title: "Bomb Blitz",
    img: BombBlitzIcon,
    summary:"Drag citizens out of harms way.",
    link: "https://littilemic-gaming.itch.io/bomb-dodge-10",
    isPCOnly:true
  },
  {
    id: "Cuber",
    title:"Cuber",
    img:cuberIcon,
    summary:"Dodge obstacles and try to make your way to the end.",
    link:"https://littilemic-gaming.itch.io/cuber",
    isPCOnly:true
  },
  {
    id: "NoEsc",
    title: "No Esc",
    img: NoEscIcon,
    summary: "Can you escape this?",
    link: "",
  },
  {
    id: "AbsurdApp",
    title: "Absurd App",
    img: UnderConstruction,
    summary: "Apply to thew best company in the world: Faux Firms",
    link: "",
  },
];
export default catalogue;

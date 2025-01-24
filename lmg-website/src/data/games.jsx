import UnderConstruction from "../assets/webGameIcons/UnderConstruction.jpg";
import WheresOneIcon from "../assets/webGameIcons/WheresOneIcon.jpg";
import NoEscIcon from "../assets/webGameIcons/NoEscIcon.png";
import NerdBowlIcon from "../assets/webGameIcons/NerdBowlIcon.jpg";
import DoYouTubeIcon from "./webGameIcons/DoYouTubeIcon.jsx";
let catalogue = [
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
    img: "",
    icon: <DoYouTubeIcon />,
    summary: "A higher or lower for youtube",
    link: "/DoYouTube",
  },
  {
    id: "NoEsc",
    title: "No Esc",
    img: NoEscIcon,
    summary: "Can you escape this?",
    link: "/NoEsc",
  },
  {
    id: "WheresOne",
    title: "Where's 1",
    img: WheresOneIcon,
    summary: "The where's Waldo but for 1",
    link: "/WheresOne",
  },
  {
    id: "AbsurdApp",
    title: "Absurd App",
    img: UnderConstruction,
    summary: "Absurd summary",
    link: "/absurdapp",
  },
];
export default catalogue;

import NavBar from "./NavBar"
import Footer from "./Footer"
import TimelineItem from "./TimelineItem"
import timeline from "../data/Timeline"
export default function AboutPage() {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl my-5">Credits</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            time={item.time}
            title={item.title}
            description={item.description}
            left={index % 2 == 0}
          />
        ))}
      </ul>
      <Footer />
    </>
  )
}
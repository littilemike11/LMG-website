import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
export default function Portfolio() {
    const skills = [
        "C++",
        "Python",
        "Javascript",
        "SQL",
        "HTML",
        "CSS",
        "React",
        "Express.js",
        "MongoDB",
        "Unity"

    ]
    const experiences=[
        {
            company:"Distribute Aid",
            link:"",
            time: "2024 - PRESENT",
            role:"Frontend Developer (Volunteer)",
            summary:"",
            tools:["next.js","tailwindCSS"]
        },
        
    ]
    return (
        <>
            
            <div  >
                        {/* BB Hero */}
                        <div
                            className="relative isolate overflow-hidden bg-base-300 px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
                            {/* bg rectangle grid */}
                            {/* <PageTitle title={"About M.E"} /> */}
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <svg
                                    aria-hidden="true"
                                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                                >
                                    <defs>
                                        <pattern
                                            x="50%"
                                            y={-1}
                                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                            width={200}
                                            height={200}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <svg x="50%" y={-1} className="overflow-visible fill-base-300">
                                        <path
                                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                            strokeWidth={0}
                                        />
                                    </svg>
                                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                                </svg>
                            </div>
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                                {/* Sticky image */}
                                <div className="lg:-mr-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                <div className="">
                                        <div className="lg:max-w-lg">
                                            <div className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"><PageTitle title={"Michael Edquilan"} isSubtitle={true} /></div>
                                            <p className="mt-6 text-xl leading-8 ">
                                            Hi I'm Michael, a software and game developer in NYC. I like to make games, websites and anything I find cool.
                                            </p>
                                            <p className="text-base mt-4 font-semibold leading-7 text-secondary">Skills Include:</p>
                                            <ul className="my-2">
                                                {skills.map((skill, index) => (
                                                    <li className="badge badge-primary m-0.5" key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl  lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="lg:max-w-lg">
                                            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Background</h1>
                                            <p className="mt-6  leading-8 ">
                                            I am a passionate developer who began my journey in 2018 at the <span className="italic">Grove School of Engineering, City College of New York (CUNY)</span>, where I pursued a Bachelor’s in Computer Science. During the 2020 COVID-19 pandemic, I decided to make my first game, <a className="hover:link text-info" href="https://littilemic-gaming.itch.io/cuber">Cuber</a>, using <span className="italic text-primary">Unity</span>, inspired by <span className="italic">Brackeys'</span>  YouTube tutorials. After graduating in January 2023, I continued exploring game development, creating <a className="hover:link text-info" href="https://littilemic-gaming.itch.io/bomb-dodge-10">Bomb Blitz</a>  and launching LMGGames.com in 2024 to showcase my Unity and web games. This eventually led to my first web game, <Link className="hover:link text-info" to={"/wheresone"}>Where's One.</Link> That same year, I completed a Full Stack Development Bootcamp at <a className="hover:link text-info" href="https://www.colorcodedlabs.com/">Color Coded Labs</a> in Columbus, Ohio, and later joined <a className="hover:link text-info" href="https://distributeaid.org/">Distribute Aid</a>  as a volunteer frontend developer, contributing to their open-source humanitarian aid platform. In free time, I continue to make games, website or webgames.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                                        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h1>
                                            
                                            <ul role="list" className="mt-8 space-y-8">
                                                {
                                                    experiences.map((experience,index)=>(
                                                        <li key={index} className="flex items-start flex-col gap-x-3">
                                                            <p className="font-mono">{experience.time}</p>
                                                            <h3 className="text-2xl font-medium">{experience.company}</h3>
                                                            
                                                            <p>{experience.role}</p>
                                                            <p>{experience.summary}</p>
                                                            <ul className="flex justify-center">
                                                                {experience.tools.map((tool,index)=>(
                                                                    <li className="badge" key={index}>
                                                                        {tool}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))
                                                }
                                                <li className="flex gap-x-3">
                                                    <figure>
                                                        <figcaption><strong className="font-semibold ">Distribute Aid </strong>Start screen with choosing different maps and modes. </figcaption>
                                                        <img
                                                            src={""}
                                                            className="w-full"
                                                            alt="gif of choosing different bomb blitz maps" />
                                                    </figure>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <figure>
                                                        <figcaption><strong className="font-semibold ">Shop. </strong>Use gold earned as in-game points to buy new hair styles, tops, bottoms or dresses for your citizens to potentially wear. </figcaption>
                                                        <img
                                                            src={""}
                                                            className="w-full"
                                                            alt="img of in-game shop" />
                                                    </figure>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <figure>
                                                        <figcaption><strong className="font-semibold">Stats. </strong>Track your highest scores across the different level modifiers. </figcaption>
                                                        <img
                                                            src=""
                                                            className="w-full"
                                                            alt="image of player high scores across the modifiers as a tri venn diagram" />
                                                    </figure>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
            

        </>
    )
}
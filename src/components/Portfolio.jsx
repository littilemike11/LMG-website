import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import titleScreenBg from "../assets/titleScreenBg.png"
import gilderWebsite from "../assets/gilderWebsite.jpg"
import mindCareWebsite from "../assets/mindCareWebsite.jpg"
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
    const experiences = [
        {
            company: "Distribute Aid",
            link: "https://distributeaid.org/",
            time: "2024 - Present",
            role: "Frontend Developer (Volunteer)",
            summary: "As a Frontend Developer at Distribute Aid, a non-profit open-source organization focused on global aid relief, I contributed to the development of a responsive and dynamic website using React. I styled user interfaces with Tailwind CSS and Radix UI, ensuring clean and adaptable layouts. I collaborated with design and backend teams to prioritize website performance, accessibility, and user-friendliness, delivering an optimized experience for users.",
            tools: ["next.js", "tailwind.css", "typescript", "gitpod", "radix UI"]
        },
        {
            company: "Evergreen Investments",
            link: "https://www.linkedin.com/company/evergreeninvestments/",
            time: "Summer 2022",
            role: "Data Analyst (Intern)",
            summary: "I collaborated with team members to design an Entity Relationship (ER) Diagram for planning the implementation of a real estate database, ensuring a clear and efficient data structure. Additionally, I worked closely with stakeholders to develop ZOHO CRM dashboards, enabling the tracking and visualization of company performance for informed decision-making.",
            tools: ["Zoho CRM", "ER Diagrams", "Lucid Chart"]
        }
    ]
    const projects = [
        {
            projectName: "The Restaurant at Gilder Website",
            websiteLink: "https://the-restaurant-at-gilder.netlify.app/",
            githubLink: "https://github.com/littilemike11/Gilder-Restaurant-Website",
            time: "April - May 2025",
            summary: "I planned, designed, and developed a full-stack web application for a restaurant using a MERN stack, featuring a user-friendly interface with React, TailwindCSS, and DaisyUI. The application included a secure admin dashboard for staff, allowing them to manage menu items with image uploads via Cloudinary, powered by RESTful APIs with Express.js and MongoDB. To enhance accessibility, I implemented multilingual support using Google Translate. The frontend was hosted on Netlify, while the backend was deployed on Heroku. I collaborated closely with restaurant staff, gathering feedback to ensure the website’s design and features met both user needs and business goals.",
            preview: gilderWebsite,
            tools: ["react", "Tailwind.css", "daisy UI", "JavaScript", " cloudinary", "express.js", "mongoDB", "Netlify", "heroku", "restful API's"]

        },
        {
            projectName: "LMG Games Website",
            websiteLink: "https://lmggames.com/",
            githubLink: "https://github.com/littilemike11/LMG-website",
            time: "February 2024 - Present",
            summary: "To your shock, you may mind that you are currently on this website.I developed a portfolio website using GitHub Pages to showcase my game projects, emphasizing a clean, user-friendly interface that effectively highlights my development skills and completed works. This portfolio will act as a living document for my professional achievements",
            preview: titleScreenBg,
            tools: ["react", "Tailwind.css", "daisy UI", "Netlify", "JavaScript"]
        },
        {
            projectName: "MindCare",
            websiteLink: "",
            githubLink: "https://github.com/BiggyBrey/Emotional-Wellness",
            time: "August - September 2024",
            summary: "MindCare is a mental wellness tool powered by OpenAI's chat API, offering both independent and AI-guided journaling with mood tracking. I collaborated with a team to build this tool using React, DaisyUI, and TailwindCSS for the frontend, Express for the backend, and MongoDB for data storage, contributing primarily to backend development and feature implementation.",
            preview: mindCareWebsite,
            tools: ["OpenAi", "chart.js", "react", "Tailwind.css", "daisy UI", "JavaScript", "express.js", "mongoDB"]
        }
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
                        <div className=" lg:-mr-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <div className="">
                                <div className="lg:max-w-lg">
                                    <div className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"><PageTitle title={"Michael Edquilan"} /></div>
                                    <p className="mt-6 text-xl leading-8 ">
                                        Hi I'm Michael, a software and game developer in NYC. I like to make games, websites and anything I find cool.
                                    </p>
                                    <p className="mt-4">Contact me at <a className="link" href="mailto:michaeledquilan@gmail.com">michaeledquilan@gmail.com</a></p>

                                    <ul className="ml-1 mt-8 flex justify-center items-center" aria-label="Social media">
                                        <li className="mr-5 shrink-0 text-xs">
                                            <a className="block " href="https://github.com/littilemike11" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                                <span className="sr-only">GitHub</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6 hover:link-info hover:scale-125" aria-hidden="true">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mr-5 shrink-0 text-xs">
                                            <a className="block " href="https://www.linkedin.com/in/michael-edquilan/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 hover:link-info hover:scale-125" aria-hidden="true">
                                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mr-5 shrink-0 text-xs">
                                            <a className="block " href="https://littilemic-gaming.itch.io/" target="_blank" rel="noreferrer noopener" aria-label="Itch.io (opens in a new tab)" title="Itch.io">
                                                <span className="sr-only">Itch.io</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 hover:link-info hover:scale-125" viewBox="0 0 32 32">
                                                    <path d="M4.172 1.787c-1.396 0.828-4.145 3.984-4.172 4.812v1.375c0 1.735 1.625 3.267 3.099 3.267 1.771 0 3.251-1.469 3.251-3.213 0 1.744 1.421 3.213 3.197 3.213 1.771 0 3.151-1.469 3.151-3.213 0 1.744 1.516 3.213 3.287 3.213h0.032c1.776 0 3.291-1.469 3.291-3.213 0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213 1.479 0 3.104-1.532 3.104-3.267v-1.375c-0.032-0.828-2.776-3.984-4.177-4.812-4.339-0.156-7.344-0.183-11.823-0.183-4.484 0.005-10.593 0.073-11.828 0.183zM12.677 10.421c-0.183 0.308-0.385 0.568-0.625 0.797v0.005c-0.672 0.651-1.588 1.057-2.599 1.057-1.016 0-1.932-0.407-2.599-1.063-0.245-0.235-0.428-0.489-0.6-0.787-0.167 0.297-0.4 0.552-0.645 0.787-0.672 0.656-1.588 1.063-2.599 1.063 0 0 0 0-0.005 0-0.12 0-0.245-0.036-0.349-0.073-0.14 1.485-0.203 2.901-0.224 3.937v0.005c-0.005 0.527-0.005 0.953-0.011 1.552 0.032 3.115-0.307 10.089 1.376 11.803 2.604 0.604 7.396 0.88 12.197 0.885h0.005c4.807-0.005 9.593-0.281 12.197-0.885 1.683-1.713 1.344-8.688 1.376-11.803-0.005-0.599-0.005-1.025-0.011-1.552v-0.005c-0.021-1.036-0.079-2.452-0.224-3.937-0.099 0.037-0.229 0.073-0.349 0.073 0 0-0.005 0-0.005 0-1.011 0-1.927-0.407-2.599-1.063h0.005c-0.245-0.235-0.479-0.489-0.645-0.787h-0.005c-0.167 0.297-0.355 0.552-0.595 0.787-0.667 0.656-1.583 1.063-2.599 1.063-1.011 0-1.927-0.407-2.599-1.063-0.24-0.229-0.443-0.495-0.615-0.787l-0.011-0.016c-0.172 0.308-0.38 0.573-0.615 0.803-0.672 0.656-1.588 1.063-2.599 1.063 0 0-0.005 0-0.005 0-0.031 0-0.068 0-0.104-0.005-0.036 0.005-0.073 0.005-0.109 0.005 0 0 0 0-0.005 0-1.011 0-1.927-0.407-2.593-1.063-0.24-0.229-0.443-0.495-0.609-0.787l-0.011-0.016zM10.005 13.875c1.057 0.005 1.995 0 3.161 1.271 0.916-0.093 1.875-0.14 2.833-0.14s1.917 0.047 2.833 0.14c1.167-1.271 2.104-1.271 3.161-1.271h0.005c0.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-0.355 4.095-2.177 4.095-2.708-0.1-4.208-2.068-4.208-4.037-1.5 0.251-3.251 0.371-5 0.371s-3.5-0.12-4.995-0.371c0 1.969-1.5 3.937-4.208 4.037-1.828-0.005-3.292-0.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-0.005 0-2.849 2.62-3.364 3.547l1.864-0.073v1.625c0 0.079 0.751 0.047 1.5 0.011 0.749 0.036 1.495 0.068 1.495-0.011v-1.625l1.869 0.073c-0.515-0.927-3.364-3.547-3.364-3.547z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>


                                    {/* <p className="text-base mt-4 font-semibold leading-7 text-secondary">Skills Include:</p>
                                    <ul className="my-2">
                                        {skills.map((skill, index) => (
                                            <li className="badge badge-primary m-0.5" key={index}>{skill}</li>
                                        ))}
                                    </ul> */}

                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl  lg:px-8">
                                <div className="lg:pr-4">
                                    <div className="lg:max-w-lg">
                                        <h1 className="mt-2 arcade-font text-2xl font-semibold tracking-tight sm:text-3xl">Background</h1>
                                        <p className="mt-6  leading-8 ">
                                            I am a passionate developer who began my journey in 2018 at the <span className="italic">Grove School of Engineering, City College of New York (CUNY)</span>, where I obtained a <span className="font-bold">Bachelor’s in Computer Science.</span> During the 2020 COVID-19 pandemic, I decided to make my first game, <a className="hover:link text-info" href="https://littilemic-gaming.itch.io/cuber">Cuber</a>, using <span className="italic text-primary">Unity</span>, inspired by <span className="italic">Brackeys'</span>  YouTube tutorials. After graduating in January 2023, I continued exploring game development, creating <a className="hover:link text-info" href="https://littilemic-gaming.itch.io/bomb-dodge-10">Bomb Blitz</a>  and launching LMGGames.com in 2024 to showcase my Unity and web games. This eventually led to my first web game, <Link className="hover:link text-info" to={"/wheresone"}>Where's One.</Link> That same year, I completed a Full Stack Development Bootcamp at <a className="hover:link text-info" href="https://www.colorcodedlabs.com/">Color Coded Labs</a> in Columbus, Ohio, and later joined <a className="hover:link text-info" href="https://distributeaid.org/">Distribute Aid</a>  as a volunteer frontend developer, contributing to their open-source humanitarian aid platform. In free time, I continue to make games, website or webgames.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
                                <div className="lg:pr-4">
                                    <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                                        <h1 className="mt-12 arcade-font text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h1>
                                        <ul role="list" className="mt-6 space-y-8">
                                            {
                                                experiences.map((experience, index) => (
                                                    <li key={index} className="flex items-start flex-col border rounded-2xl p-4 ">
                                                        <p className="font-mono text-sm">{experience.time}</p>
                                                        <h3 className="text-2xl italic font-medium hover:link hover:link-info"><a href={experience.link} alt={`Link to ${experience.company}`}>{experience.company}</a></h3>
                                                        <p className="my-2 text-lg">{experience.role}</p>
                                                        <p>{experience.summary}</p>
                                                        <ul className="flex flex-wrap mt-4 justify-center gap-2">
                                                            {experience.tools.map((tool, index) => (
                                                                <li className="badge badge-primary p-3 text-xs sm:text-sm capitalize m-0.5" key={index}>
                                                                    {tool}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                                            <h1 className="mt-12 arcade-font text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h1>

                                            <ul role="list" className="mt-6 space-y-8">
                                                {
                                                    projects.map((project, index) => (
                                                        <li key={index} className="flex flex-col gap-x-3">
                                                            <p className="font-mono text-sm">{project.time}</p>
                                                            <h3 className="text-2xl italic font-medium">{project.projectName}</h3>
                                                            <figure>
                                                                <figcaption className="font-semibold my-2" >
                                                                    {project.websiteLink && <span><a className="hover:link hover:link-info" href={project.websiteLink} alt={`${project.projectName}'s website link`}>Website</a> | </span>}
                                                                    <a className="hover:link hover:link-info" href={project.githubLink} alt={`${project.projectName}'s github link`}>Github</a>
                                                                </figcaption>
                                                                <img
                                                                    src={project.preview}
                                                                    className="w-full"
                                                                    alt="image of project" />
                                                                <figcaption>{project.summary}</figcaption>
                                                            </figure>
                                                            <ul className="flex flex-wrap mt-4 justify-center gap-2">
                                                                {project.tools.map((tool, index) => (
                                                                    <li className="badge badge-primary p-3 text-xs sm:text-sm capitalize m-0.5" key={index}>
                                                                        {tool}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))
                                                }

                                            </ul>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}
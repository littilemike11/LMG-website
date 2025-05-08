import PageTitle from "./PageTitle";

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
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-full sm:w-11/12 flex-col lg:flex-row">
                    <div>
                        <PageTitle title={"Michael Edquilan"} isSubtitle={true} />

                        <p>Hi I'm Michael, a software and game developer in NYC.</p>
                        <h2 className="p-2">Skills Include:</h2>
                        <ul>
                            {skills.map((skill, index) => (
                                <li className="badge badge-primary m-0.5" key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-4">Resume</h2>
                        <iframe
                            src="https://drive.google.com/file/d/11a12Rh_5Gixg6CyKX7oNDKCleeYj_r9-5gvpvLhBNwI/preview"
                            width={"100%"}
                            height="600px"
                            allow="autoplay"
                            className="border rounded-lg shadow-md"
                        ></iframe>
                    </div>
                </div >
            </div >
            {/* <div >
                <PageTitle title={"Michael Edquilan"} isSubtitle={true} />

                <p>Hi I'm Michael, a software and game developer in NYC.</p>
                <h2>Skills Include:</h2>
                <ul >
                    {skills.map((skill, index) => (
                        <li className="badge badge-primary m-0.5" key={index}>{skill}</li>
                    ))}
                </ul>
                <h2 className="text-2xl font-bold mb-4">Resume</h2>
                <iframe
                    src="https://drive.google.com/file/d/11a12Rh_5Gixg6CyKX7oNDKCleeYj_r9-5gvpvLhBNwI/preview"
                    height="600px"
                    allow="autoplay"
                    className="border flex justify-center m-auto w-full lg:w-1/2 rounded-lg shadow-md"
                ></iframe>
            </div> */}

        </>
    )
}
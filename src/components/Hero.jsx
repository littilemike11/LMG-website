import StartMenu from "./StartMenu"
export default function Hero(){
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-serif font-bold">L M G</h1>
                <h2 className="text-2xl font-sans py-4">Learn. Make. Game.</h2>
                <p className="py-6">
                    Welcome to my interactive game hub - part portfolio, part dev blog, part arcade.
                </p>
                </div>
                <div className=" w-full max-w-sm shrink-0 ">
                <StartMenu/>
                </div>
            </div>
        </div>
    )
}
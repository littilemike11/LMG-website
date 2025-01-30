import { useEffect } from "react";

export default function VideoHalf({ videos, isRight, submitted, round, submitAnswer }) {
    function addCommas(num) {
        if (num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

    }
    return (
        <>
            <div
                // num + true = num +1 / num + false = num +0
                style={{
                    backgroundImage: `url(${videos[round + isRight]?.snippet.thumbnails.standard.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }
                }
                className="card bg-blend-hard-light bg-base-300 w-full rounded-box grid flex-1 text-slate-50 place-items-center lg:w-1/2 md:text-xl lg:text-3xl"
            >

                <p>{videos[round + isRight]?.snippet.title}</p>
                <p>By: {videos[round + isRight]?.snippet.channelTitle}</p>
                <p>{videos[round + isRight]?.snippet.publishedAt} </p>
                <p>has</p>
                {isRight && !submitted ?
                    <div className="flex gap-8">
                        <button onClick={() => submitAnswer(true)} className="btn glass text-black">Higher ▲</button>
                        <button onClick={() => submitAnswer(false)} className="btn glass text-black">Lower ▼</button>
                    </div>
                    :
                    <p className="font-bold tracking-widest bg-base-300 p-2 rounded-xl italic">
                        {addCommas(videos[round + isRight]?.statistics.viewCount)}
                    </p>
                }


            </div>



        </>
    )
}
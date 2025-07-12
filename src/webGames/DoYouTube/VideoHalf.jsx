export default function VideoHalf({ videos, isRight, submitted, round, submitAnswer, isCorrect, selected }) {
    const video = videos[round + isRight];

    function addCommas(num) {
        return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
    }

    const shouldShowViews = submitted || !isRight; // show views on left/top video always; show both after submission

    return (
        <div
            onClick={() => { !submitted && submitAnswer(isRight) }}
            style={{
                backgroundImage: `url(${video?.snippet?.thumbnails?.standard?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className={`cursor-pointer transition-transform duration-200 hover:scale-105 
  bg-blend-darken bg-base-300 w-full rounded-box flex flex-col justify-between 
  items-center text-slate-50 text-center p-6 h-full lg:w-1/2 md:text-xl lg:text-3xl border-8
  ${!submitted
                    ? "border"
                    : selected && isCorrect
                        ? "border-success"
                        : selected && !isCorrect
                            ? "border-error"
                            : "border-transparent"
                }`}

        >
            <div className="space-y-2 bg-base-300/80 p-4 rounded-xl w-full">
                <p className="capitalize font-semibold text-base-content line-clamp-2">
                    {video?.snippet?.title || "Untitled Video"}
                </p>
                <p className="text-sm text-base-content">
                    By: {video?.snippet?.channelTitle || "Unknown Channel"}
                </p>
            </div>

            <div className="bg-base-300/80 mt-4 p-2 rounded-xl">
                <p className="text-base-content mb-1">has</p>
                {shouldShowViews ? (
                    <p className="font-bold tracking-widest text-base-content italic">
                        {addCommas(video?.statistics?.viewCount)} views
                    </p>
                ) : (
                    <p className="text-base-content italic">??? views</p>
                )}
            </div>
        </div>
    );
}

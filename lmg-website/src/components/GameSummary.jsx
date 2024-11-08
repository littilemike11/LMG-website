export default function GameSummary(props) {
    return (
        <>
            <div className="border-4 rounded-md m-4 w-full">
                <p className="text-xl">{props.title}</p>
                <p>{props.summary}</p>
            </div>


        </>
    )
}
export default function GameSummary(props) {
    return (
        <>
            <div className="border-4 m-4 w-full">
                <p className="text-xl">Summary</p>
                <p>{props.summary}</p>
            </div>


        </>
    )
}
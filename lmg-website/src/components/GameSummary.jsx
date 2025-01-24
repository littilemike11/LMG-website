import { Link } from "react-router-dom"
export default function GameSummary(props) {
    return (
        <>
            <div className="border-4 flex flex-col relative rounded-md m-4">
                <p className="text-xl">{props.title}</p>
                <p>{props.summary}</p>
                <Link
                    to={props.link}
                    className="self-end">
                    <button className="btn">Play</button>
                </Link>

            </div>


        </>
    )
}
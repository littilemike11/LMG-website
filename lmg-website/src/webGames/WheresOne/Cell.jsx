export default function Cell(props) {
    return (
        <>
            <button
                onClick={props.onClick}
                className="border aspect-square bg-primary text-primary-content hover:scale-110 min-h-8 h-max">
                {props.content}
            </button>
        </>
    )
}
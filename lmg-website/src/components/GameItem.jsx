export default function GameItem(props) {
    return (
        <>
            <div className="carousel-item">
                <img
                    src={props.img}
                    className="rounded-box" />
            </div>
        </>
    )
}
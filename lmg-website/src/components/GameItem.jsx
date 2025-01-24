export default function GameItem(props) {
    const changeSlide = (location) => {
        props.setHighlightedGame(location)
    }
    return (
        <>
            <div id={props.id} className="carousel-item relative w-full">

                {props.img ?
                    (<img
                        src={props.img}
                        className="w-full rounded-box" />) :
                    props.icon
                }
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a onClick={() => changeSlide(props.prev)} href={`#${props.prev.id}`} className="btn btn-circle">❮</a>
                    <a onClick={() => changeSlide(props.next)} href={`#${props.next.id}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </>
    )
}
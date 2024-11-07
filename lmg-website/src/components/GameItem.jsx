export default function GameItem(props) {
    return (
        <>
            <div id={props.id} className="carousel-item relative w-full">

                <img
                    src={props.img}
                    className="w-full rounded-box" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href={`#${props.prev}`} className="btn btn-circle">❮</a>
                    <a href={`#${props.next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
            <div className="mt-10">
                <p className="text-red-600 z-10">index ={props.id}</p>
            </div>

        </>
    )
}
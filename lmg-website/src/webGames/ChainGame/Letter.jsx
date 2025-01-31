export default function Letter({ isRevealed, letter, isActiveRow }) {
    return (
        <>               
            <div  className={`border ${isActiveRow ? "bg-primary" : "bg-base-300"}`}>
                <p>{isRevealed ? letter :""}</p>
            </div>


        </>
    )
}
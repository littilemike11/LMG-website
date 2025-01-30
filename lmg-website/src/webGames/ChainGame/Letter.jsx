export default function Letter({ isRevealed, letter }) {
    return (
        <>
            {
                isRevealed ?
                    <div className="bg-base-300 border">
                        <p>{letter}</p>
                    </div>
                    :
                    <div className="bg-base-300 border" >
                        <p></p>
                    </div>
            }


        </>
    )
}
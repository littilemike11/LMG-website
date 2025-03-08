export default function Letter({ isRevealed, letter, isActiveRow, isSolved, isWrong }) {
    return (
        <div
            className={`border font-bold my-2 p-2 text-center
                ${isWrong && isActiveRow ? "bg-error" :
                    isSolved ? "bg-success" :
                        isActiveRow ? "bg-primary" :
                            "bg-base-300"}`}
        >
            <p>{isRevealed ? letter : ""}</p>
        </div>
    );
}
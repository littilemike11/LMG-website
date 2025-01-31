import Letter from "./Letter";

export default function GridRow({ word, isRevealed, isActiveRow, revealedLetters, solvedRows, isWrong, row }) {
    return (
        <>
            {word.split('').map((letter, index) => (
                <Letter
                    key={index}
                    isActiveRow={isActiveRow}
                    isSolved={solvedRows.includes(row)}
                    isWrong={isWrong}
                    isRevealed={isRevealed || revealedLetters.includes(index)}
                    letter={letter}
                />
            ))}
        </>
    )
}
import Letter from "./Letter";

export default function GridRow({ word, isRevealed, isActiveRow, setActiveRow, revealedLetters, solvedRows, isWrong, row, inputRef }) {
    return (
        <>
            {word.split('').map((letter, index) => (
                <Letter
                    key={index}
                    isActiveRow={isActiveRow}
                    setActiveRow={setActiveRow}
                    isSolved={solvedRows.includes(row)}
                    isWrong={isWrong}
                    isRevealed={isRevealed || revealedLetters.includes(index)}
                    letter={letter}
                    row={row}
                    inputRef={inputRef}
                />
            ))}
        </>
    )
}
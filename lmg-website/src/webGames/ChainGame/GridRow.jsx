import Letter from "./Letter";

export default function GridRow({ word, isRevealed, isActiveRow,revealedLetters }) {

    return (
        <>
            {word.split('').map((letter, index) => (
                <Letter
                    key={index}
                    isActiveRow={isActiveRow}
                    isRevealed={isRevealed || revealedLetters.includes(index)}
                    letter={letter}
                />
            ))}
        </>
    )
}
import Letter from "./Letter";

export default function GridRow({ word, isRevealed }) {
    return (
        <>
            {word.split('').map((letter, index) => (
                <Letter
                    key={index}
                    isRevealed={isRevealed || index == 0}
                    letter={letter}
                />
            ))}
        </>
    )
}
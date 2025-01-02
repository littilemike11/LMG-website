//list of all questions to ask in No Esc
let questions=[
    {
        Qnum:1,
        cost:1,
        text:"What should we call you?",
        type:"Open",
        CorrectAnswer:"Player",
        OnCorrectResponse: "Well done Player",
        OnIncorrectResponse:"Incorrect, we will only refer to you as Player",
        OnStrikeResonse:"Desertion will not be tolerated. Desertion results in 1 strike"

    },
    {
        Qnum:2,
        cost:1,
        text:"What is 1 + 1?",
        type:"Open",
        CorrectAnswer:"2",
        OnCorrectResponse: "Correct, Player",
        OnIncorrectResponse:"Incorrect",
        OnStrikeResonse:"Desertion will not be tolerated. Desertion results in 1 strike"

    }
]

export default questions
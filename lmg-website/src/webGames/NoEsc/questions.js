//list of all questions to ask in No Esc
let questions = [
  {
    Qnum: 1,
    cost: 1,
    text: "What should we call you?",
    type: "Open",
    correctAnswer: "player",
    onCorrectResponse: "Well done Player",
    onIncorrectResponse: "Incorrect, we will only refer to you as Player",
    placeholder: "Player",
  },
  {
    Qnum: 2,
    cost: 1,
    text: "What is 1 + 1?",
    type: "Open",
    correctAnswer: "2",
    onCorrectResponse: "Correct, Player",
    onIncorrectResponse: "Incorrect",
    placeholder: "",
  },
];

export default questions;

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
  {
    Qnum: 3,
    cost: 1,
    text: "What is the missing number in the sequence 5 , 10, 15, __, 25 ?",
    type: "Open",
    correctAnswer: "20",
    onCorrectResponse: "Correct, Player",
    onIncorrectResponse: "Incorrect",
    placeholder: "",
  },
  {
    Qnum: 4,
    cost: 2,
    text: "Which of the following words doesn't belong?",
    type: "MC",
    correctAnswer: "A",
    onCorrectResponse: "Correct, Player",
    onIncorrectResponse:
      " Only Doctor ends with 'or' and whose stem is not a verb",
    placeholder: "",
  },
];

export default questions;

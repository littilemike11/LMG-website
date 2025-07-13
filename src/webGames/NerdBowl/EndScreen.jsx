import { useEffect, useState } from "react";

export default function EndScreen({ score, restartQuiz, changeCategory }) {
  const [endGameText, setEndGameText] = useState("")
  let endScreenText = [
    "Pathetic",
    "you're just a casual",
    "not half good",
    "you're top of the bell curve",
    "Not half bad",
    "so you do stay at home",
    "Congrats, You are a certified Nerd",
  ];
  function createEndGameText() {
    let text = "";
    switch (score) {
      case 0:
        text = endScreenText[0];
        break;
      case 1:
      case 2:
        text = endScreenText[1];
        break;
      case 3:
      case 4:
        text = endScreenText[2];
        break;
      case 5:
        text = endScreenText[3];
        break;
      case 6:
      case 7:
        text = endScreenText[4];
        break;
      case 8:
      case 9:
        text = endScreenText[5];
        break;
      case 10:
        text = endScreenText[6];
        break;
    }
    setEndGameText(text)
  }
  //on load display endgame text
  useEffect(() => {
    createEndGameText()
  }, [])
  return (
    <>
      <div className="text-xl">
        <p>{endGameText}</p>
        <p>Final Score: {score} / 10</p>
        <p>Would you like to try again?</p>
        <button onClick={restartQuiz} className="btn btn-primary m-2">Restart Quiz</button>
        <p>Or?</p>
        <button onClick={changeCategory} className="btn btn-secondary m-2">Change Category</button>
      </div>
    </>
  )
}
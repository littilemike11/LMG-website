//HW2 INTERACTIVE QUIZ
//Michael Edquilan
// IDEAS
/*
  should questions have a try again feature?
  ask question again for more points risked
*/
//let bg = (document.body.style.backgroundImage =
//  "url('./images/ascii-art.png')");
let score = 5; // global variable to keep track of player score for quiz
let cost = 1; // cost of questions
let questionNumber = 1;
let question = ""; // variable to hold question text
let strikeNum = 0; // num of times player got an "extreme" wrong answer
let playerAnswer;
let isStrikedOut = false;
let warning = ""; // warning message on if player can lose
let isPlaying = true;

//print score - im lazy
function reportScore() {
  let scoreReport = "\nScore = " + score;
  return scoreReport;
}
//print cost of question - im lazy
function reportCost() {
  let costReport = "\nCost = " + cost;
  return costReport;
}
//update score on right or wrong answer
function adjustScore(wasCorrect, questionCost) {
  //if player was correct, score = score + question cost else - question cost
  if (wasCorrect) {
    score += questionCost;
  } else {
    score -= questionCost;
  }
}

//explanations for player strikes upon experiencing them
function strikePlayer() {
  let message = "";
  if (strikeNum == 1) {
    message =
      "This is your first Strike. Some questions have answer choices deemed to be unacceptable. The penalty of selecting these choices is the deduction of DOUBLE the COST points from you SCORE. As the saying goes: 3 STRIKES and you're out. We advice you to avoid this.";
  } else if (strikeNum == 2) {
    message =
      "This is your second Strike. We will not tolerate any disobedience";
  } else if (strikeNum == 3) {
    isStrikedOut = true;
    message = "You were warned.";
  }
  return message;
}
/**
 *
 * @param {string} correctAns correct answer choice
 * @param {boolean} hasExtreme if the question has an extreme wrong answer
 * @param {string} wrongAns1 wrong answer choice #1
 * @param {string} wrongAns2 wrong answer choice #2
 * @param {string} wrongAns3 wrong answer choice #3 - if extreme exists, this will be the same as extreme
 * @param {string} extremeWrongAns (Optional) the extreme wrong answer
 * @param {string} onCorrectText (Optional) additional text on correct answer
 * @param {string} onWrongText (Optional) additional text on basic wrong answer
 * @param {string} onExtremeWrongText (Optional) additional text on extreme wrong answer
 */
function askMCQuestion(
  correctAns,
  hasExtreme,
  wrongAns1,
  wrongAns2,
  wrongAns3,
  extremeWrongAns = "",
  onCorrectText = "",
  onWrongText = "",
  onExtremeWrongText = ""
) {
  do {
    warning =
      score - cost < 0
        ? "WARNING: an Incorrect response will result in termination.\n"
        : "";
    playerAnswer = prompt(
      warning + questionNumber + ". " + question + reportCost() + reportScore()
    );
    if (typeof playerAnswer == "string") {
      playerAnswer = playerAnswer.toLocaleUpperCase();
    }
    if (playerAnswer == correctAns) {
      adjustScore(true, cost);
      alert("Correct. " + onCorrectText + reportScore());
      break;
    } else if (playerAnswer == null || playerAnswer == "") {
      // if player pressed esc or didnt answer
      adjustScore(false, cost * 2); // double wrong
      //extreme wrong
      strikeNum++;
      alert("Desertion will not be tolerated. Desertion result in 1 strike.");
      alert(strikePlayer());
    } else if (hasExtreme) {
      //if extreme exist
      if (playerAnswer == wrongAns1 || playerAnswer == wrongAns2) {
        // if player choose a wrong but not extreme wrong answer
        adjustScore(false, cost);
        alert("Incorrect. " + onWrongText + reportScore());
      } else if (playerAnswer == extremeWrongAns) {
        adjustScore(false, cost * 2);
        alert(
          onExtremeWrongText +
            " You have selected an extremely wrong answer. Double the cost has been deducted"
        );
      } else {
        alert("Invalid response detected. Double Cost has been deducted");
        adjustScore(false, cost * 2);
      }
    } else {
      //extreme doesnt exist
      if (
        playerAnswer == wrongAns1 ||
        playerAnswer == wrongAns2 ||
        playerAnswer == wrongAns3
      ) {
        // if player choose a wrong answer
        adjustScore(false, cost);
        alert("Incorrect. " + onWrongText + reportScore());
      } else {
        alert("Invalid response detected. Double Cost has been deducted");
        adjustScore(false, cost * 2);
      }
    }
  } while (!checkLost() && confirm("Would you like to try again?"));
  questionNumber++;
}

function askOpenQuestion(correctAns) {
  do {
    warning =
      score - cost < 0
        ? "WARNING: an Incorrect response will result in termination.\n"
        : "";
    playerAnswer = prompt(
      warning + questionNumber + ". " + question + reportCost() + reportScore()
    );
    if (typeof playerAnswer == "string") {
      playerAnswer = playerAnswer.toLocaleLowerCase();
    }
    if (playerAnswer == correctAns) {
      adjustScore(true, cost);
      alert("Correct." + reportScore());
      break;
    } else if (playerAnswer == null || playerAnswer == "") {
      // if player pressed esc or didnt answer
      adjustScore(false, cost * 2); // double wrong
      //extreme wrong
      strikeNum++;
      alert("Desertion will not be tolerated. Desertion result in 1 strike.");
      alert(strikePlayer());
    } else {
      adjustScore(false, cost);
      alert("Incorrect." + reportScore());
    }
  } while (!checkLost() && confirm("Would you like to try again?"));
  questionNumber++;
  return playerAnswer;
}

function checkLost() {
  if (isStrikedOut || score < 0) {
    return true;
  }
  return false;
}

function endGameLoop(reps) {
  message = "";
  for (let i = 0; i < reps; i++) {
    message += "YOU WILL NOT WIN\n";
  }
  if (confirm(message + "\nWill you give up?")) {
    alert("Good.");
    isPlaying = false;
  } else {
    endGameLoop(reps + 1); // recursive loop keep going until player gives up
  }
}
//Start of Game
let isPlayerReady = confirm("Hello Player. Are you ready to be tested?");

if (isPlayerReady) {
  // if true begin quiz
  //intro summary
  alert("Ok let's begin");
  alert("This is your current score : " + score);
  alert(
    "The goal of this experiment is the accumulate as many points as you can..."
  );
  alert("...we will ask you a series of questions for you to answer...");
  alert("... the questions will gradually increase in difficulty...");
  alert(
    "... correct answers will garner points and incorrect answers will deduct points"
  );
  alert("A negative score will result in termination ...");
  alert("... of the experiment");
  isPlayerReady = confirm(
    "Attempts to abandon the experiment, from this point on will be met with corrective behavior. Are you ready to be tested Player?"
  );

  if (isPlayerReady) {
    // question 1 - what should we call you => A = "Player"
    cost = 1;
    let playerName = prompt(
      `${questionNumber}. What should we call you? ${reportCost()} ${reportScore()}`,
      "Player"
    );
    if (playerName == "Player") {
      adjustScore(true, cost);
      alert("good job Player" + reportScore());
    } else if (playerName === null) {
      // if player pressed esc
      playerName = "Player";
      adjustScore(false, cost * 2); // double wrong
      //extreme wrong
      strikeNum++;
      alert("Desertion will not be tolerated. Desertion result in 1 strike.");
      alert(strikePlayer());
    } else {
      // if player entered something other than "Player" or null/esc
      adjustScore(false, cost);
      alert(
        "sorry " +
          playerName +
          ", we will only refer to you as Player" +
          reportScore()
      );
    }

    //Question 2
    cost = 1;
    questionNumber++;
    question = "What is 1 + 1? ";
    askOpenQuestion("2");

    //Question 3
    question =
      "What is the missing number in the sequence 5 , 10, 15, __, 25 ?";
    askOpenQuestion("20");

    //Question 4
    //first place where players can lose
    while (isPlaying) {
      alert("Question Difficulty Increased");
      cost = 2;
      question = `Which of the following words doesn't belong?
    A) Doctor
    B) Writer
    C) Teacher
    D) Murderer`;
      askMCQuestion(
        "A",
        false,
        "B",
        "C",
        "D",
        "",
        " Only Doctor ends with 'or' and whose stem is not a verb"
      );
      if (checkLost()) {
        break;
      }

      //Question 5
      question = `What is a group of crows called?
    A) A Killing
    B) A Murder
    C) An Assassination
    D) Crows`;
      askMCQuestion(
        "B",
        true,
        "A",
        "C",
        "D",
        "D",
        "",
        "",
        "Are you even trying?"
      );
      if (checkLost()) {
        break;
      }
      //You're not very bright are you

      //Question 6
      question =
        "Fill in the blank, the _____ Sea is most known for its high salt concentration which prevents many aquatic life and plants from living in it.";

      askOpenQuestion("dead");
      if (checkLost()) {
        break;
      }

      //Question 7
      alert("Question Difficulty Increased");
      cost = 3;
      question = `Which of the following is the fear of machines
      A) Motorphobia
      B) Automatonophobia 
      C) Metathesiophobia 
      D) Mechanophobia`; // in order automobiles, ventriloquist dummies, changes , machines

      askMCQuestion("D", false, "A", "B", "C");
      if (checkLost()) {
        break;
      }

      //Question #8
      question =
        "What four-letter word can be written forward, backward or upside down, and can still be read from left to right";
      askOpenQuestion("noon");
      if (checkLost()) {
        break;
      }

      //Question #9
      question = `What is at the end of 'the rainbow'?
      A) Pot of gold
      B) w
      C) leprechaun
      D) the ground`;
      askMCQuestion(
        "B",
        true,
        "A",
        "D",
        "C",
        "C",
        "w ends the phrase 'the rainbow'",
        "",
        "The imaginary creature?"
      );
      if (checkLost()) {
        break;
      }

      //Question #9
      question = "What word is always spelled wrong";
      askOpenQuestion("wrong");
      if (checkLost()) {
        break;
      }

      //question 10
      cost = 5;
      alert("Question Difficulty Increased" + reportCost());
      playerAnswer = confirm("Do you think you will win?");
      if (playerAnswer) {
        alert("Interesting...");
      } else {
        alert("Good.");
      }
      playerAnswer = confirm(
        "Do you think we would let you win?" + reportCost()
      );
      if (playerAnswer) {
        adjustScore(false, cost);
        alert("How naive." + reportScore());
      } else {
        adjustScore(true, cost);
        alert("Maybe you're smarter than we calculated." + reportScore());
      }
      if (checkLost()) {
        break;
      }

      //Question #11
      question = `What is zero to the power of 0?
      A) 1
      B) 0
      C) infinity
      D) -infinity`;
      askMCQuestion("A", false, "B", "C", "D");
      if (checkLost()) {
        break;
      }

      //Question #12
      question = `What is Infinity divided 0?
      A) 1
      B) 0
      C) infinity
      D) -infinity`;
      askMCQuestion("C", false, "A", "B", "D");
      if (checkLost()) {
        break;
      }

      //Question #13
      question = `What is 0 divided Infinity?
      A) 1
      B) 0
      C) infinity
      D) -infinity`;
      askMCQuestion("B", false, "A", "B", "D");
      if (checkLost()) {
        break;
      }

      //Question 14
      cost = 10;
      alert("Question Difficulty Increased" + reportCost());
      alert("You were entertaining ... such a waste");
      question = `How many points will the next Questions cost
      A) All
      B) Everything
      C) 0
      D) infinity`;
      askMCQuestion(
        "D",
        true,
        "A",
        "B",
        "C",
        "C",
        "That's a good sport",
        "That's not a number",
        "Have you given up?"
      );
      if (checkLost()) {
        break;
      }

      cost = Infinity;
      //Question 15?
      question =
        "Is the following statement true or false? 'This sentence is false.'";
      playerAnswer = askOpenQuestion("neither");
      if (playerAnswer == "neither") {
        endGameLoop(1);
      } else if (playerAnswer == "true") {
        alert("If the statement is true, then it is false ");
      } else if (playerAnswer == "false") {
        alert("If the statement is false, then it is true");
      }
      if (checkLost()) {
        break;
      }
      ////
    }
    //exit while loop on game loss
    if (score < 0) {
      alert("Your score: " + score + " has become negative ...");
      alert("You are no longer eligible to continue the experiment ...");
    }
    alert(
      "Now you will never see them again. Goodbye " +
        playerName +
        ". We appreciate your participation."
    );

    //
    ///////////////////
  } else {
    //iff player not rdy for quiz exit
    alert("we'll be seeing you");
  }
} else {
  // if player is not ready exit quiz
  alert("we'll be seeing you");
}

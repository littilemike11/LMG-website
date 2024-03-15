const wrongLetters = ["i","l","!","|",];
const startButton= document.getElementById("startButton");

let round =1;
let rcount=2;
let ccount=2;

// update round and row/cols variables
function setRound(){
  ccount++;
  rcount++;
  round ++;
}

//display round number 
function displayRound(){
  document.getElementById("roundNum").innerHTML ="Round: " +round;
}

//reset round button logic
function resetRound(){
  //reset timer settings
  timer.innerHTML="0s";
  sec=0;
  isTimerOn=false;
  // reset start button
  startButton.innerText="Start";
  startButton.style.visibility="visible";
  //reset round,row, col vars
  round=1;
  rcount=2;
  ccount=2;

  displayRound();
  resetLives();
  clearGrid();

}
//clear grid of cells
function clearGrid(){
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}

function CreateGrid(r,c) {
  displayRound();
  startButton.innerHTML="Next";
  startButton.style.visibility="hidden"; 
  let count=0;
  const grid = document.getElementById("grid");
  //var r = document.getElementById("rcount").value;
  //var c = document.getElementById("ccount").value;
  let spawn = spawnAnswerSpot(r,c);
  //grid.style.gridTemplateRows = "repeat(4,1fr)";
  //grid.style.gridTemplateColumns = "repeat(4,1fr)"; 
  let root = document.querySelector(':root');//get root
  root.style.setProperty('--rows',r); // change root rows to r
  root.style.setProperty('--cols',c); //change root cols to c
  clearGrid();
  for (var rows = 0; rows < r; rows++) {
    for (var cols = 0; cols < c; cols++) {
      //create cells
      const cell = document.createElement("div");
      //create correct answer
      if(count==spawn){
        cell.innerText="1";
        cell.setAttribute('id',"cellCorrect");
        cell.addEventListener("click",(event)=>{ CreateGrid(r+1,c+1) });
      }
      //create wrong answers
      else{
        cell.innerText = getRandomLetter();
        cell.setAttribute('id', 'cellIncorrect');
        cell.addEventListener("click",(event)=>{lifeManager(lives)})
      }
      //add cells to grid
      cell.classList.add('cell');
      grid.appendChild(cell);
      count++;
    }
  }
  setRound();
  }

  //get random wrong letter from list
  function getRandomLetter(){
    let x = Math.floor(Math.random()*wrongLetters.length);
    return wrongLetters[x];
  }
  //create spawn location of "1"
  function spawnAnswerSpot(r,c){
    let total=r*c;
    let spawn = Math.floor(Math.random()*total);
    return spawn;
  }

  let isTimerOn =false;
  startButton.addEventListener("click", (event)=>{isTimerOn=true;})
  var sec =0;
  setInterval(controlTimer,1000);
  let timer = document.getElementById("timer");
  function controlTimer(){
    if(isTimerOn){
      sec++;
    }
    timer.innerHTML =sec +"s";
  }

  startButton.addEventListener("click", (event)=>{resetLives();})
  let livesText = document.getElementById("lives");
  let lives =3;

  function lifeManager(lifeCount){
    lives--;
    let lifeText="";
    for (let i = 0; i < lives; i++) {
      lifeText+= "&hearts; ";
    }
    if(lives<=0){
      resetRound();
    }
    livesText.innerHTML = lifeText;
  }
  function resetLives(){
    lives=3;
    livesText.innerHTML = "&hearts; &hearts; &hearts;";
  }
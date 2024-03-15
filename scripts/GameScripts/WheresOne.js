const wrongLetters = ["i","l","!","|",];
const startButton= document.getElementById("startButton");
const roundNum=document.getElementById("roundNum");

let round =1;
let rcount=2;

// update round and row/cols variables
function setRound(){
  rcount++;
  round ++;
}

//display round number 
function displayRound(){
  roundNum.innerHTML ="Round: " +round;
}

//reset round button logic
function resetRound(){
  //reset timer settings

  isTimerOn=false;
  // reset start button
  startButton.innerText="Start";
  startButton.style.visibility="visible";
  //reset round,row, col vars
  roundNum.innerHTML ="Previous Round: " +round;
  round=1;
  rcount=2;

  restartTimer();

  resetLives();
  clearGrid();
  

}
//clear grid of cells
function clearGrid(){
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}

function CreateGrid(r) {
  displayRound();
  startButton.innerHTML="Next";
  startButton.style.visibility="hidden"; 
  let count=0;
  const grid = document.getElementById("grid");
  //var r = document.getElementById("rcount").value;
  //var c = document.getElementById("ccount").value;
  let spawn = spawnAnswerSpot(r);
  //grid.style.gridTemplateRows = "repeat(4,1fr)";
  //grid.style.gridTemplateColumns = "repeat(4,1fr)"; 
  let root = document.querySelector(':root');//get root
  root.style.setProperty('--rows',r); // change root rows to r
  root.style.setProperty('--cols',r); //change root cols to c
  clearGrid();
  for (var rows = 0; rows < r; rows++) {
    for (var cols = 0; cols < r; cols++) {
      //create cells
      const cell = document.createElement("button");
      //create correct answer
      if(count==spawn){
        cell.innerText="1";
        cell.setAttribute('id',"cellCorrect");
        cell.addEventListener("click",(event)=>{ setRound();CreateGrid(r+1); restartTimer(); });
        
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
  }

  //get random wrong letter from list
  function getRandomLetter(){
    let x = Math.floor(Math.random()*wrongLetters.length);
    return wrongLetters[x];
  }
  //create spawn location of "1"
  function spawnAnswerSpot(r){
    let total=r*r;
    let spawn = Math.floor(Math.random()*total);
    return spawn;
  }

  //timer functions
  let isTimerOn =false;
  startButton.addEventListener("click", (event)=>{isTimerOn=true;})
  var sec =3;
  setInterval(controlTimer,1000);
  function restartTimer(){
    sec=round+2;
    bar.innerHTML = sec +"s";
  }
  function controlTimer(){
    if(isTimerOn){
      sec--;
    }
    //if run out of time --live, create new grid of same round, restart timer
    if(sec==0){
      CreateGrid(rcount);
      lifeManager(lives);
      restartTimer();
    }
    bar.innerHTML = sec +"s";
  }

  const progress =document.getElementById("progress");
  const bar=document.getElementById("bar");
  setInterval(progressBarManager,100);
  //progress bar functions
  function progressBarManager(){
    let total = round +2;
    let percent = sec/total*100;
    if(percent>67){
      bar.style.backgroundColor= "var(--great)";
    }
    else if(percent>34){
      bar.style.backgroundColor="var(--mid)";
    }
    else{
      bar.style.backgroundColor="var(--bad)";
    }
    bar.style.width= percent+"%";
  }

  startButton.addEventListener("click", (event)=>{resetLives();});
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
    //document.body.style.backgroundColor="white";
  }
  function resetLives(){
    lives=3;
    livesText.innerHTML = "&hearts; &hearts; &hearts;";
  }

  var collapsible =document.getElementById("collapsible");
  //var content = document.getElementsByClassName("content");
  collapsible.addEventListener("click",function() {
    collapsible.classList.toggle("active");
    var content = collapsible.nextElementSibling;
    if(content.style.display=="block"){
      content.style.display="none";
    }
    else{
      content.style.display="block";
    }
  });

  //prevent ctrl+f search on windows
  window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        document.body.style.backgroundImage= "url(/images/Cheater.jpg)";
        e.preventDefault();
    }
  })
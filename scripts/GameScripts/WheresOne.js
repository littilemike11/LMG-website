const wrongLetters = ["i","l","!","|",];
const startButton= document.getElementById("startButton");

let round =1;
let rcount=2;
let ccount=2;

function setRound(){
  ccount++;
  rcount++;
  round ++;
}

function displayRound(){
  document.getElementById("roundNum").innerHTML ="Round: " +round;
}

function resetRound(){
  startButton.innerText="Start";
  startButton.style.visibility="visible";
  round=1;
  displayRound();
  rcount=2;
  ccount=2;
  clearGrid();
}
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
      const cell = document.createElement("button");
      //create correct answer
      if(count==spawn){
        cell.innerText="1";
        cell.setAttribute('id',"cellCorrect");
        cell.addEventListener("click",(event)=>{ cell.style.backgroundColor="var(--correct)"});
        cell.addEventListener("click",(event)=>{ CreateGrid(r+1,c+1) });
      }
      //create wrong answers
      else{
        cell.innerText = getRandomLetter();
        cell.setAttribute('id', 'cellIncorrect');
      }
      //add cells to grid
      cell.classList.add('cell');
      grid.appendChild(cell);
      count++;
    }
  }
  setRound();
  }

  function setColor(){
    document.getElementById("cellCorrect").style.backgroundColor="var(--correct)";
  }

  function getRandomLetter(){
    let x = Math.floor(Math.random()*wrongLetters.length);
    return wrongLetters[x];
  }

  function spawnAnswerSpot(r,c){
    let total=r*c;
    let spawn = Math.floor(Math.random()*total);
    return spawn;
  }


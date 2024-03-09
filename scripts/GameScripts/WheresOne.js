const wrongLetters = ["i","l","!","|",];


function CreateGrid() {
    let count=0;
    const grid = document.getElementById("grid");
    var r = document.getElementById("rcount").value;
    var c = document.getElementById("ccount").value;
    let spawn = spawnAnswerSpot(r,c);
    //grid.style.gridTemplateRows = "repeat(4,1fr)";
    //grid.style.gridTemplateColumns = "repeat(4,1fr)"; 
    let root = document.querySelector(':root');//get root
    root.style.setProperty('--rows',r); // change root rows to r
    root.style.setProperty('--cols',c); //change root cols to c
    for (var rows = 0; rows < r; rows++) {
      for (var cols = 0; cols < c; cols++) {
        //create cells
        const cell = document.createElement("div");
        //create correct answer
        if(count==spawn){
          cell.innerText="1";
          cell.setAttribute('id',"cellCorrect");
          cell.addEventListener("click",console.log("hi"));
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


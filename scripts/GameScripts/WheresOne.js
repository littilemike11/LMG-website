function CreateGrid(r, c) {
    const grid = document.getElementById("grid");
    grid.style.gridTemplateRows = "repeat(4,1fr)";
    grid.style.gridTemplateColumns = "repeat(4,1fr)";

    for (var rows = 0; rows < r; rows++) {
      for (var cols = 0; cols < c; cols++) {
        const cell = document.createElement("div");
        cell.innerText = rows + "," + cols;
        cell.classList.add('cell');
        grid.appendChild(cell);
      }
    }

  }
    const value = document.getElementById("value");
    const input = document.getElementById("dobD");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });

    const valueM = document.getElementById("valueM");
    const inputM = document.getElementById("dobM");
    valueM.textContent = inputM.value;
    inputM.addEventListener("input", (event) => {
        valueM.textContent = event.target.value;
    });

    const valueY = document.getElementById("valueY");
    const inputY = document.getElementById("dobY");
    valueY.textContent = inputY.value;
    inputY.addEventListener("input", (event) => {
        valueY.textContent = event.target.value;
    });
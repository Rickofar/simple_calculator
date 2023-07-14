let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let wordCountResult = document.querySelector("#count");

button.addEventListener("click", function () {
  let display = input.value;
  let counter = display.split("");
  let count = counter.length;
  wordCountResult.innerHTML = count;

  if (count >= 1) {
    button.style.backgroundColor = "yellow";
  }
  if (count >= 11) {
    button.style.backgroundColor = "greenyellow";
  }
  if (count >= 21) {
    button.style.backgroundColor = "lightgreen";
  }
  if (count >= 31) {
    button.style.backgroundColor = "green";
  }
});


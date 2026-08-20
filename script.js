const button = document.getElementById("greet-btn");
const greetingText = document.getElementById("greeting");

button.addEventListener("click", function() {
  greetingText.textContent = "Hello, Gill! JavaScript just changed this text.";
});

const button2 = document.getElementById("useless-btn");
const uselessText = document.getElementById("useless");

button2.addEventListener("click", function() {
    uselessText.textContent = "Congratulations! You clicked a useless button!"
});
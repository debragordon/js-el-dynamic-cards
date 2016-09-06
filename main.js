var userInput;
var userInputField = document.getElementById("user-input");
var createButton = document.getElementById("create-card");
var outputArea = document.getElementById("card-output");

createButton.addEventListener("click", function (event) {
  userInput = document.getElementById("user-input").value;
  outputArea.innerHTML += "<article>" + userInput + "<button id='delete-this'>Delete</button>" + "</article>";
  userInputField.value = "";
  console.log(userInput);
});

outputArea.addEventListener("click", function(event) {
  if (event.target.id === "delete-this") {
    toDelete = event.target.parentNode;
    outputArea.removeChild(toDelete);
  };
});
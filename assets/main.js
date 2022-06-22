function bfunction() {
 let userInput = document.querySelector("#name");
 let message = document.querySelector("#message");

 message.innerHTML="Hello " + userInput.value + " welcome to the bootcamp";
}
const bfunction = () => {
    let userInput = document.querySelector("#text");
     const generatedElement = document.createElement('p');
     generatedElement.innerHTML = `Hello ${userInput.value}, welcome to the bootcamp`;
     document.body.appendChild(generatedElement);
   }
function generatePoem(event) {
  event.preventDefault();

  let poemContainer = document.querySelector("#poem-verse");
  poemContainer.innerHTML = `I like sizzling sausages.
          <br />
          I like bubbling beans.`;
}

let poemFormElement = document.querySelector("#food-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

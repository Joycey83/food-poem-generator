function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-verse", {
    strings: `I like sizzling sausages.
          <br />
          I like bubbling beans.`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#food-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

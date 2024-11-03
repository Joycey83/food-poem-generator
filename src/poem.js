function generatePoem(event) {
  event.preventDefault();

  let apiKey = "a3a5bbeff1t6546488o90285fa5b0853";
  let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}";

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

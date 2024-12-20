function displayPoem(response) {
  new Typewriter("#poem-verse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a3a5bbeff1t6546488o90285fa5b0853";
  let prompt = `user instructions: Generate a funny poem about ${instructionsInput.value}`;
  let context =
    "You are a food connoisseur who loves cooking and eating great food around the world. You love to write funny short poems about food. Your mission is to generate a 5 line poem and separate each line with a <br/>.Make sure to follow the users instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-verse");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a funny food poem about ${instructionsInput.value}</div>`;

  // make API call
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#food-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

document.addEventListener("DOMContentLoaded", init)

function init() {
  //functions to run at start
  getCharacters();
  submitCalories();
}

const baseURL = "http://localhost:3000/characters/"

function getCharacters() {
  fetch(baseURL)
  .then(resp => resp.json())
  .then(data => data.forEach(renderCharacters))
}

function renderCharacters(character){
  const characterBar = document.querySelector("#character-bar");

  const characterSpan = document.createElement("span");
  characterSpan.innerText = character.name;

  characterBar.append(characterSpan);

  characterSpan.addEventListener("click", (event) => {

    const characterInfo = document.querySelector("#detailed-info");

    const characterName = document.querySelector("#name")
    characterName.innerText = character.name;

    const characterImage = document.querySelector("#image")
    characterImage.src = character.image;

    const characterCalories = document.querySelector("#calories");
    characterCalories.innerText = character.calories;

    const inputId = document.querySelector("#characterId");
    //inputId.dataset.id = character.id;
    inputId.innerText = character.id;

  })
}

function submitCalories() {

  const inputForm = document.querySelector("#calories-form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const characterId = +event.target[0].innerText;

    const calorieCount = +document.querySelector("#calories").innerText

    const addCalories = {
      calories: calorieCount + +event.target[1].value
    }

    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(addCalories)
    }

    fetch(baseURL+characterId, reqObj)
    .then(resp => resp.json())
    .then(updatedCalories => {
      document.querySelector("#calories").innerText = updatedCalories.calories;
    })

    event.target.reset();
  }) 
}
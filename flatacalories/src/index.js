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

    fetch(baseURL+(character.id))
    .then(resp => resp.json())
    .then(character => {
      
    const characterInfo = document.querySelector("#detailed-info");

    const characterName = document.querySelector("#name")
    characterName.innerText = character.name;

    const characterImage = document.querySelector("#image")
    characterImage.src = character.image;

    const characterCalories = document.querySelector("#calories");
    characterCalories.innerText = character.calories;

    const inputId = document.querySelector("#characterId");
    inputId.innerText = character.id;
    })
  })
}

function submitCalories() {

  const inputForm = document.querySelector("#calories-form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const characterId = +event.target[0].innerText;
    //debugger

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

  resetCalories();
}

function resetCalories() {

  const resetButton = document.querySelector("#reset-btn")
  
  resetButton.addEventListener("click", (event) => {
    const id = +characterId.innerText;

    const resetCalories = {
        calories: +0
    }
  
    const resetObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(resetCalories)
    }
  
    fetch(baseURL+id, resetObj)
    .then(resp => resp.json())
    .then(emptiedCalories => {
        document.querySelector("#calories").innerText = emptiedCalories.calories;
      })
    })
  }



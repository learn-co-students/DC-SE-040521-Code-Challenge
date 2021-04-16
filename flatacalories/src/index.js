const baseUrl = "http://localhost:3000/characters";

getCharacters();
addCalories();

function getCharacters() {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data.forEach(makeCharacters));
}

function makeCharacters(data) {
  //console.log(data);
  const charSpan = document.createElement("span");
  charSpan.innerText = data.name;
  charSpan.id = data.id;

  document.getElementById("character-bar").appendChild(charSpan);

  charSpan.addEventListener("click", () => {
    //console.log(event);
    const charName = document.querySelector("p");
    charName.innerText = data.name;

    const charImage = document.getElementById("image");
    charImage.src = data.image;

    const calories = document.getElementById("calories");
    calories.innerHTML = data.calories;
    document.getElementById("detailed-info").append(charName, charImage);
  });
}

function addCalories() {
  console.log("click");
  const caloriesBtn = document.getElementById("calories-form");

  caloriesBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const newCalories = event.target[1].value;
    //const newCalories = document.querySelector("#calories");
    console.log(newCalories);
    const reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(newCalories),
    };
    fetch(baseUrl + "/" + characterId, reqObj)
      .then((response) => response.json())
      .then(
        (updateCalories) =>
          (document.getElementById(caloriesBtn).innerText = newCalories)
      );
    event.target.reset();
  });
}

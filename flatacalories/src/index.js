const baseUrl = "http://localhost:3000/characters";

getCharacters();
addCalories();

function getCharacters() {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data.forEach(makeCharacters));
}

function makeCharacters(data) {
  const charSpan = document.createElement("span");
  charSpan.innerText = data.name;
  document.getElementById("character-bar").appendChild(charSpan);

  charSpan.addEventListener("click", () => {
    const charName = document.querySelector("p");
    charName.innerText = data.name;

    const id = document.getElementById("characterId");
    id.innerText = data.id;

    const charImage = document.getElementById("image");
    charImage.src = data.image;

    const calories = document.getElementById("calories");
    calories.innerHTML = data.calories;

    document
      .getElementById("detailed-info")
      .append(charName, charImage, calories);
  });
}

function addCalories() {
  const caloriesForm = document.getElementById("calories-form");

  caloriesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const charId = event.target[0].innerText;
    console.log(charId);

    const oldCalories = document.getElementById("calories").innerText;

    const newCalories = {
      calories: oldCalories + event.target[1].value,
    };
    console.log(newCalories);
    const reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(newCalories),
    };
    fetch(baseUrl + "/" + charId, reqObj)
      .then((response) => response.json())
      .then(
        (updateCal) =>
          (document.getElementById("calories").innerText = updateCal.calories)
      );
  });
}

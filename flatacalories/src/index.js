BASE_URL = "http://localhost:3000/characters/"

fetch(BASE_URL)
    .then (res => res.json())
    .then (data => data.forEach((character) => {
        renderCharacter(character)
    }))

function renderCharacter(character) {
    const characterSpan = document.createElement("span")
          characterSpan.id = character.id
          characterSpan.addEventListener("click", (event) => {

            const characterName = document.getElementById("name")
                  characterName.innerText = character.name
            
            const characterImg = document.getElementById("image")
                  characterImg.src = character.image
            
            const characterCalories = document.getElementById("calories")
                  characterCalories.innerText = character.calories

            const caloriesForm = document.getElementById("calories-form")
                  caloriesForm.id = character.id
                  caloriesForm.addEventListener("submit", (event) => {
                    event.preventDefault()
                    
                    const currentCalories = characterCalories.innerText

                    const updateCalories = {
                        calories: +currentCalories + +event.target["calories-update"].value,
                    }

                    const reqObj = {
                        headers: {"Content-Type": "application/json"},
                        method: "PATCH",
                        body: JSON.stringify(updateCalories),
                    }

                    fetch(BASE_URL+character.id, reqObj)
                        .then( res => res.json())
                        .then( updateCal => {
                            characterCalories.innerText = updateCal.calories
                    })

            const resetCaloriest = document.getElementById("reset-btn")
                  resetCaloriest.addEventListener("click", () => {

                    const resetCal = {
                        calories: 0
                    }

                    const reqObj = {
                        headers: {"Content-Type": "application/json"},
                        method: "PATCH",
                        body: JSON.stringify(resetCal),
                    }

                    fetch(BASE_URL+character.id, reqObj)
                        .then( res => res.json())
                        .then( reset => {
                            characterCalories.innerText = +reset.calories
                    })

            const changeName = document.getElementById("name-update")
                  changeName.addEventListener("click", (event) => {
                      event.preventDefault()

                    const updateName = {
                        name: event.target["name"].value,
                    }

                    const reqObj = {
                        headers: {"Content-Type": "application/json"},
                        method: "PATCH",
                        body: JSON.stringify(updateName),
                    }

                    fetch(BASE_URL+character.id, reqObj)
                        .then( res => res.json())
                        .then( update => {
                            characterName.innerText = update.name
                    })
                })
            })
        })
    })

            const characterName = document.createElement("h4")
            characterName.innerText = character.name
            
            characterSpan.append(characterName)
            
            document.getElementById("character-bar").append(characterSpan)
        }
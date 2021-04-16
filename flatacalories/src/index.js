BASE_URL = "http://localhost:3000/characters"

fetch(BASE_URL)
    .then (res => res.json())
    // .then (data => console.log(data))
    .then (data => data.forEach((character) => {
        renderCharacter(character)
    }))

function renderCharacter(character) {
    const characterSpan = document.createElement("span")
          characterSpan.id = character.id
          characterSpan.addEventListener("click", (event) => {

                const updateCharacter = {
                    name: characterName,
                    image: characterImg,
                    calories: characterCalories,
                }

                const reqObj = {
                    headers: {"Content-Type": "application/json"},
                    method: "PATCH",
                    body: JSON.stringify(updateCharacter),
                }
        
                fetch(BASE_URL+character.id, reqObj)
                    .then( res => res.json())
                    // must update the target you're PATCHing
                    .then( update => update)

                    const characterName = document.createElement("h2")
                          characterName.innerText = character.name
                
                    const characterImg = document.createElement("img")
                          characterImg.src = character.image
                
                    const characterCalories = document.createElement("h4")
                          characterCalories.innerText = character.calories 
                
                document.getElementById("detailed-info").append(characterName, characterImg, characterCalories)

                document.getElementById("characterInfo").append(characterSpan)
          })
    
    const characterName = document.createElement("h4")
          characterName.innerText = character.name

    characterSpan.append(characterName)

    document.getElementById("character-bar").append(characterSpan)
}

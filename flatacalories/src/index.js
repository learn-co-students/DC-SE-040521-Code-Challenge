const Base_Url = "http://localhost:3000/characters/"
function init() {
    renderChar()
    updateCalories() 

}
document.addEventListener("DOMContentLoaded", init)

function renderChar(){
    fetch(Base_Url)
    .then(res => res.json())
    .then(character => character.forEach(addCharacter))
}

function addCharacter(character){

    const characterBar = document.getElementById("character-bar")
    const charName = document.createElement("span")
    charName.innerText = character.name
    characterBar.append(charName)

    charName.addEventListener("click", () => {
        document.getElementById("name").innerText = character.name
        document.getElementById("image").src = character.image
        document.getElementById("calories1").innerText = character.calories
        document.getElementById("characterId").value = character.id

    })

}

function updateCalories(){
    const form = document.getElementById("calories-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const ID = document.getElementById("characterId").value
        const value = +e.target[1].value
        const currentCalories = document.getElementById('calories1').innerText 
        const calories = parseInt(currentCalories)
        const NewValue = value + calories
        
        //console.log(value)

        const updatedCalories = {
            calories: NewValue
        }
        //debugger

        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(updatedCalories)
        }

        fetch(Base_Url+ID, reqObj)
        .then(res => res.json())
        .then(newCal => {
            document.getElementById('calories1').innerText = `${newCal.calories}`
        })
        e.target.reset()
    })  
   

}

    
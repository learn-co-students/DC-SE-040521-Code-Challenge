const Base_Url = "http://localhost:3000/characters/"
function init() {
    renderChar()

}
document.addEventListener("DOMContentLoaded", init)

function renderChar(){
    fetch(Base_Url)
    .then(res => res.json())
    .then(char => char.forEach(addCharacter))
    }

    function addCharacter(char){
        const charID = char.id
        charCal = char.calories
        const characterBar = document.getElementById("character-bar")
        const charName = document.createElement("span")
        charName.innerText = char.name
        characterBar.append(charName)

        charName.addEventListener("click", () => {
            document.getElementById("name").innerText = char.name
            document.getElementById("image").src = char.image
            document.getElementById("calories1").innerText = char.calories
        })


        function updateCalories() {
            const calForm = document.getElementById("calories-form")
            calForm.addEventListener("submit", (e) => {
                e.preventDefault()

                const updatedCalories = {
                    calories: parseInt(calories)
                }
                


               const reqObj = {
                   headers: {"Content-Type": "application/json"},
                   method: "PATCH",
                   body: JSON.stringify(updatedCalories)
               } 

               fetch(Base_Url+charID, reqObj)
               .then(res => res.json())
               .then((newCal) => {
                   document.querySelector("#calories1").innerText = `${newCal.calories}`
               })
               e.target.reset()

            }) 
        }
         updateCalories()

        
            

    }






    




const BASE_URL = "http://localhost:3000/characters"



getList();
characterList();
createSpan();

const getList = () => {
    return fetch(BASE_URL)
    .then (res => res.json())
    .then((renderCharacter)=>renderCharacter.forEach(characterList))

}
function characterList (eachObjList){



function createSpan (){
    const spanDiv = document.querySelector("#character-bar")
    const span = document.createElement("span")
    span = eachObjList.name
    span.addEventListener("click", (event) => {
        characterInfo();
    })
    }




function characterInfo (){
const div = document.querySelector("#detailed-info")


 document.querySelector("p").innerText =  eachObjList.name
document.querySelector("img").src = eachObjList.image
document.querySelector("h4"). innerText = eachObjectList.calories

}

function addCalories (calorie){
    const form = document.querySelector("#calories-form")
    form.addEvenListener ("submit", (e)=>{
        e.preventDefault()
        const  newItem = {
            characterId : e.currentTarget.id
            characterName: e.currentTarget.name
        }
    })
}
}


const BASE_URL = "http://localhost:3000/characters/"

//initializer 
addCats()

//add cats to character bar
function addCats () {
    fetch(BASE_URL)
    .then (res => res.json())
    // .then (data => console.log(data))
    .then (data => data.forEach(makeSpan))
}

//make span
function makeSpan(cat) {
    const span = document.createElement("span")
    span.innerText = cat.name
    document.getElementById("character-bar").appendChild(span)

    span.addEventListener("click", (e) => {
        // console.log(cat)
        updateCat(cat)
    })
}

function updateCat(cat) {
    document.querySelector("#name").innerText = cat.name
    document.querySelector("#image").src = cat.image 
    document.querySelector("#calories").innerText = cat.calories 

    document.querySelector("#calories-form").dataset.id = cat.id 
}

function addCalories() {
    document.querySelector("#calories-form").addEventListener("submit", (ev) => {
        // console.log 
        ev.preventDefault()
            const newCount = {
                calories: ev.target[1].value 
            }
                const reqObj = {
                headers: {"Content-type": "application/json"},
                method: "PATCH",
                body: JSON.stringify(newCount)
                }
                        fetch(BASE_URL+ev.target.dataset.id, reqObj)
                        .then (res => res.json())
                        // .then (console.log)
                        .then (updateCat => {
                            document.querySelector("#calories").innerText = `${updateCat.calories}`
                        })
                        }
    )}
    addCalories()

    //I have no excuse for making all function names cat related when there is only one cat
   // my brain is very tired 

    

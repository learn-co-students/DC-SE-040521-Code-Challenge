const BASE_URL = "http://localhost:3000/characters"

fetchCharacters()
addCalories()
// addNewName()
resetCaloriesBtn()


// STEP 1:  fetch request... retrieve characters and 
//          then for each element, add a span including name
function fetchCharacters() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(characters => characters.forEach(elem => {
        const myDiv = document.getElementById('character-bar')

        // create span
        const newSpan = document.createElement('span')
        newSpan.innerText = elem.name
        newSpan.src = elem.image                    // < STEP 2
        newSpan.dataset.calories = elem.calories    // < STEP 2
        newSpan.id = elem.id                        // < STEP 3

        // append span
        myDiv.appendChild(newSpan)

        // STEP 2: when user clicks character span element
        // --> see the info inside detailed info div

        // Button evnt listener for span
        newSpan.addEventListener('click', event => {
            const detailedDiv = document.getElementById('detailed-info')
            detailedDiv.children[0].innerText = event.target.innerText
            detailedDiv.children[1].src = event.target.src
            detailedDiv.children[2].children[0].innerText = event.target.dataset.calories
            detailedDiv.children[3].children[0].id = event.target.id        // < STEP 3
        })
    }))
}

// STEP 3:  User click triggers event and adds calories to char
//          onto server as well as the DOM
function addCalories() {
    // Add event listener to form submit
    const myForm = document.getElementById('calories-form')
    myForm.addEventListener('submit', event => {
        event.preventDefault()

        // Now we add whatever's in "Enter calories" to the server
        // and afterwards, reflect it on the DOM
        const userInput = +document.getElementById('calories-form').children[1].value
        const serverCalories = +event.target.previousElementSibling.children[0].innerText
        const patchObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                calories: userInput + serverCalories
            })
        }

        const charName = event.target.parentElement.children[0].innerText

        fetch(`${BASE_URL}/${event.target.children[0].id}`, patchObj)
            .then(res => res.json())
            .then(data => {
                // Change calories value in DOM
                const pointForm = document.getElementById('detailed-info')
                pointForm.children[2].children[0].innerText = userInput + serverCalories
            })
    })
}

// Advanced Deliverables
//
// First deliverable: Reset calories button
function resetCaloriesBtn() {
    // Add event listener to calories button
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', event => {
        // Update server and reflect on the DOM
        // so we need a PATCH request
        const patchObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                calories: 0
            })
        }
        fetch(`${BASE_URL}/${event.target.previousElementSibling.children[0].id}`, patchObj)
            .then(res => res.json())
            .then(data => {
                // reflect reset in the DOM
                const pointForm = document.getElementById('detailed-info')
                pointForm.children[2].children[0].innerText = 0
            })
    })
}

// Second deliverable: Change a character's name
function addNewName() {
    // Add event listener to submit
    const myForm = document.getElementById('calories-form')
    myForm.addEventListener('submit', event => {
        event.preventDefault()

        // Update server and reflect on the DOM
        const newName = document.getElementById('calories-form').children[3].value
        const patchObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newName
            })
        }
        fetch(`${BASE_URL}/${event.target.children[0].id}`, patchObj)
            .then(res => res.json())
            .then(data => {
                // Change calories value in DOM
                const pointForm = document.getElementById('detailed-info')
                pointForm.children[0].innerText = newName
            })
    })
}

// We need to account for two types of form submit
function formSubmitHandler() {


}


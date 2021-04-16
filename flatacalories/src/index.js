const baseURL = 'http://localhost:3000/characters/'


fetchChar()
// submitCal()

function fetchChar() {
    fetch(baseURL)
    .then(res => res.json())
    .then((charData) => charData.forEach(addSpan))
}

function addSpan(chars) {
    const charBar = document.getElementById('character-bar')    

     const span = document.createElement('span')
     span.innerText = chars.name
    //  span.id = 'character-bar'

    charBar.appendChild(span)
    
    span.addEventListener('click', (e)=> {
    
            //const id = e.target
    
            const detailedInfo = document.getElementById('detailed-info')
            
            const charName = document.getElementById('name')
            charName.innerText = chars.name
            
            const charImg = document.getElementById('image')
            charImg.src = chars.image
            
            const charCal = document.getElementById('calories')
            //charCal.id = "calories"
            charCal.innerText = chars.calories
    
            const inputId = document.getElementsByTagName('characterId')
            inputId.innerText = chars.id
    
            
             const addBtn = document.getElementById('calories-form')
             addBtn.addEventListener('submit', submitCal)
            
            //detailedInfo.append(charName, charImg, charCal)
            
        })
    }
    


function submitCal(e) {
    const form = document.getElementById('calories-form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const id = e.target.id
        
        const newCal = e.target[1].value

        const charId = +e.target[0].innerText

        const calCount = +document.getElementById('calories').innerText

        const addCal = {
            calories: parseInt(calCount) + parseInt(newCal)
        }

        const calObj = {calories: addCal}

        const reqObj = {
            headers: {'Content-Type': 'application/json'},
            method: "PATCH",
            body: JSON.stringify(calObj)
        }

        fetch(baseURL+id, reqObj)
        .then(res => res.json())
        .then(updatedCal => {
            document.getElementById('calories').innerText = chars.calories;
        })
        e.target.reset()

    })
    
    
}



// const newVal = ''



// function submitCals() {
//     const form = document.querySelector('calories-form')

//     form.addEventListener('click', (e) => {
//         e.preventDefault()
//         const charId = e.target.id.innerText

//         const calCount = +document.getElementsByTagName('calories').innerText

//         const addCal = {
//             calories: calCount + +e.target.name.value
//         }

//         const reqObj = {
//             headers: {'Content-Type': "application/json"},
//             method: "PATCH",
//             body: JSON.stringify(addCal)
//         }
//         fetch(baseURL+charId, reqObj)
//         .then(res => res.json())
//         .then(newCal => {
//             document.getElementById('calories').innerText = newCal.calories
//         })
//         e.target.reset()
//     })
// }








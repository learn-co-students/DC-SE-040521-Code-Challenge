const baseURL = 'http://localhost:3000/characters/'

    
    fetchChar();
    addCal()



    function fetchChar() {
        fetch(baseURL)
            .then(res => res.json())
            .then((charData) => charData.forEach((chars) => {
                 addSpan(chars)
            }) 
    )}







    
    function addSpan(chars){
        const charDiv = document.querySelector('#character-bar')
    
        const newSpan = document.createElement('span')
        newSpan.innerText = chars.name
    
        charDiv.appendChild(newSpan)

        
        newSpan.addEventListener('click', (e) => {
            
            

            const charDiv = document.querySelector('#detailed-info')
            
            const CharName = document.querySelector('#name')
            CharName.innerText = chars.name

            const charImg = document.querySelector('#image')
            charImg.src = chars.image

            const charCal = document.querySelector('#calories')
            charCal.innerText = chars.calories

            const charId = document.querySelector('#characterId')
            charId.innerText = chars.id


    })
    }

    function addCal() {
        const calForm = document.querySelector('#calories-form')
        calForm.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const newId = +e.target[0].innerText

            const calCount = +document.querySelector('#calories').innerText

            const newCal = +e.target[1].value

            const addCal = {
                calories: calCount + newCal
            }


            
            const reqObj = {
                headers: {"Content-Type": "application/json"},
                method: "PATCH",
                body: JSON.stringify(addCal)
            }
           
           fetch(baseURL+newId, reqObj)
           .then(res => res.json())
           .then((updatedCals) => {
            document.querySelector('#calories').innerText = updatedCals.calories
           })
           
           
            })

    }









    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function addSpan(chars){
//     const charBar = document.querySelector('#character-bar')    

//      const span = document.createElement('span')
//      span.innerText = chars.name
//     //   span.id = chars.id

//     charBar.appendChild(span);
  
    
//             //const id = e.target
    
//             const detailedInfo = document.querySelector('#detailed-info')
            
//             const charName = document.querySelector('#name')
//             charName.innerText = chars.name
            
//             const charImg = document.querySelector('#image')
//             charImg.src = chars.image
            
//             const charCal = document.querySelector('#calories')
//             //charCal.id = "calories"
//             charCal.innerTexts = chars.calories
    
//             const inputId = document.querySelector('#characterId')
//             inputId.innerText = chars.id
//             //used a .getelementbytagnamebyaccident
    
            
            
//            // detailedInfo.append(charName, charImg, charCal)
            
//         })
//     })
    
//     }
    
    
//      function submitCal() {

//     const addBtn = document.querySelector('#calories-form')

//     addBtn.addEventListener('submit', (event) => {
    
//         event.preventDefault();

//         const charId = +event.target[0].innerText;

//         const calCount = +document.querySelector('#calories').innerText

//         const newCal = +event.target[1].value
    
//             const addCal = {
//             calories: calCount + newCal
//         }
        
//         const reqObj = {
//             headers: {'Content-Type': 'application/json'},
//             method: "PATCH",
//             body: JSON.stringify(addCal)
//         }
        
//         fetch(baseURL + charId, reqObj)
//         .then(res => res.json())
//         .then((updatedCal) => {
//             document.querySelector('#calories').innerText = updatedCal.calories;
//         })
        
//         event.target.reset();
        
//     })
// }











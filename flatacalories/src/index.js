const url = 'http://localhost:3000/characters/'

getFetch()


function getFetch(){
    fetch(url)
    .then((resp)=> resp.json())
    .then(function(data){
        console.log(data);
        data.forEach(createNames)
    })
}


function createNames(data){
    const spanner = document.createElement('span')
    spanner.innerText=data.name
    document.querySelector('#character-bar').appendChild(spanner)

    spanner.addEventListener('click', ()=>{
        addInfo(data)
    })
    
}

function addInfo(data){
    // console.log(data.image)
    const imgs = document.querySelector('#image')
    imgs.src = data.image
    
    const name = document.querySelector('#name')
    name.innerText = data.name

    const calories = document.querySelector('#calories')
    calories.innerText = data.calories

    const ids = document.createElement('span')
    ids.innerText = data.id
    document.querySelector('#CharacterId').appendChild(ids)

    const calBar = document.querySelector('#calories-form')
    calBar.addEventListener('submit', (e)=> {
        e.preventDefault()
        // let animalId = ""
        console.log(data)
        
        animalId = data.id
        parseInt(animalId)
        console.log(animalId)

        const newCals = e.target[1].value

        const existingCals = +document.querySelector('#calories').innerText

        const totCals = parseInt(existingCals) + parseInt(newCals)

        console.log(url+animalId)

        // debugger

        calsObj = {calories: totCals}
    
        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(calsObj)
            }
    
            fetch(url+animalId,reqObj)
            .then((resp)=>resp.json())
            .then(function(data){
                document.querySelector('#calories').innerText = data.calories
            })
    
        
    })

    document.querySelector('#reset-btn').addEventListener('click',(e)=>{
        // const calspan = document.querySelector('#calories').innerText
        // calspan = 0
        animalId = data.id
        

        zeroObj = {calories: 0}
    
        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(zeroObj)
            }
    
            fetch(url+animalId,reqObj)
            .then((resp)=>resp.json())
            .then(function(data){
                document.querySelector('#calories').innerText = data.calories
            })

        
        
    })
        

}

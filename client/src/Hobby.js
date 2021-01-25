const HOBBY_URL = "http://localhost:3000/hobbies"


function renderHobbies(){
    fetch(HOBBY_URL)
        .then(r => r.json())
        .then(hobbies => hobbies.forEach(renderHobbiesList))
}

function renderHobbiesList(hobby){
    let hobbyLi = document.createElement('li')
        hobbyLi.classList.add("list-group-item")
        hobbyLi.innerText = hobby.name

    document.querySelector("#hobbies").appendChild(hobbyLi)
}

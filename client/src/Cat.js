const CAT_URL = "http://localhost:3000/cats"

function loadCats() {
    fetch(CAT_URL)
        .then(r => r.json())
        .then(cats => cats.forEach(renderCat))
}

function renderCat(cat) {
    document.getElementById("cat-container").innerHTML += 
    `<div class="col-sm m-2">
            <div class="card">
                <img src=${cat.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cat.name}</h5>
                    <p class="card-text">Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia </p>
                    <p class="card-text"><small class="text-muted">Breed: ${cat.breed}</small></p>
                    <h3 class="card-title">Hobbies</h3>
                    <ul id=${cat.id}-group class="list-group"><ul>
                </div>
            </div>
        </div>`

    
    cat.hobbies.forEach(hobby => {
        let hobbyLi = document.createElement("li")
            hobbyLi.innerText = hobby.name
            hobbyLi.classList.add("list-group-item")
            document.getElementById(`${cat.id}-group`).appendChild(hobbyLi)
    })
}

//Define a function for handling submit
// Grabing the form for new cat, add a 'submit' event to the form
// Grab the values from the event
// let newCat = {
//     name: event.target.???
// }
function handleSubmit(){
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        let newCat = {
            name: event.target.catName.value,
            image: event.target.image.value,
            breed: event.target.breed.value,
            fluffiness: event.target.fluff.value
        }

        fetch(CAT_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCat)
        })
        .then(r => r.json())
        .then(renderCat)

        console.log(newCat)
    })
}

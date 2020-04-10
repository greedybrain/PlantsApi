const BASE_URL = "http://localhost:3000/plants"
let main = document.querySelector('main');
let addBtn = document.querySelector('.add');

// >>>>>> IT ALL COMES DOWN TO THIS
document.addEventListener("DOMContentLoaded", e => {
     getPlants();
     addAPlant();
     deletePlant();
})


// >>>>>> THIS WORKS
function getPlants() {
     fetch(`${BASE_URL}`)
          .then(res => res.json())
          .then(data => {
               fillPlantCards(data)
          })
}

function fillPlantCards(plantData) {
          plantData.forEach(plant => {
               createPlantCard(plant)
          })
}
// >>>>>> THIS WORKS


// >>>>>> THIS WORKS
function addAPlant() {
     addBtn.addEventListener('click', setUpAddPlant)
}

function setUpAddPlant() {
     let options = {
          "method": "POST",
          "headers": {
               'Content-Type': "application/json",
               'Accept': "application/json"
          }
     }
     fetch(BASE_URL, options)
          .then(res => res.json())
          .then(plant => {
               createPlantCard(plant)
          })
          .catch(err => console.log(err.message))
}
// >>>>> THIS WORKS


// >>>>>> THIS WORKS
function deletePlant() {
     main.addEventListener('click', setUpDeletePlant)
}

function setUpDeletePlant(event) {
     let delBtns = document.querySelectorAll('.del-btn')
     delBtns.forEach(plantDelBtn => {
          if (event.target === plantDelBtn) {
               let plantId = plantDelBtn.parentElement.parentElement.dataset.id;
               plantDelBtn.parentElement.parentElement.remove()
               createFetchDeleteBy(plantId)
          }
     });
}

function createFetchDeleteBy(id) {
     fetch(`${BASE_URL}/${id}`, {
               "method": "DELETE"
          })
          .then(console.log("Deleted Successfully"))
          .catch(err => console.log(err.message))
}
// >>>>>> THIS WORKS


// >>>>>> THIS WORKS
function createPlantCard(plant) {
     let plantDiv = document.createElement('div');
     plantDiv.setAttribute('data-id', `${plant.id}`)
     plantDiv.classList.add('plant-card')

     let h2 = document.createElement('h2');
     h2.textContent = plant.name

     let p = document.createElement('p');
     p.textContent = plant.species

     let btnWrapper = document.createElement('div')
     btnWrapper.classList.add('btn-wrapper')

     let del = document.createElement('button')
     del.classList.add('del-btn')
     del.textContent = "Delete"

     btnWrapper.append(del)
     plantDiv.append(h2, p, btnWrapper)
     main.prepend(plantDiv);
} // >>>>>> THIS WORKS

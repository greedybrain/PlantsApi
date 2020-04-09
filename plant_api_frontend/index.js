const BASE_URL = "http://localhost:3000"
let main = document.querySelector('main');

document.addEventListener("DOMContentLoaded", e => {
     getPlants();
     deletePlant();
})

function getPlants() {
     setUpPlantsForRetrieval();
}

function deletePlant() {
     setUpPlantForDeletion()
}

function setUpPlantsForRetrieval() {
     fetch(`${BASE_URL}/plants`)
          .then(res => res.json())
          .then(plant => createPlantCards(plant))

     function createPlantCards(plant) {

          plant.data.forEach(currPlant => {
               // debugger
               let plantDiv = document.createElement('div');
               plantDiv.setAttribute('data-id', `${currPlant.id}`)
               plantDiv.classList.add('plant-card')

               let h2 = document.createElement('h2');
               h2.textContent = currPlant.attributes.name

               let p = document.createElement('p');
               p.textContent = currPlant.attributes.species

               let del = document.createElement('button')
               del.classList.add('del-btn')
               del.textContent = "Delete"

               plantDiv.append(h2, p, del)
               main.appendChild(plantDiv);
          })
     }
}

function setUpPlantForDeletion() {
     main.addEventListener('click', e => {

          let delBtns = document.querySelectorAll('.del-btn') // all release pokemon buttons
          delBtns.forEach(plant => {
               if (e.target === plant) {
                    let plantId = plant.dataset.id;
                    plant.parentElement.remove()
                    createFetchDeleteBy(plantId)
                    // }
               }
          });
          // ===============================================

          // ABSTRACTING AWAY DELETE FETCH CODE
          function createFetchDeleteBy(id) {
               fetch(`${BASE_URL}/${id}`, {
                         "method": "DELETE"
                    })
                    .then(console.log("Deleted Successfully"))
                    .catch(err => console.log(err.message))
          }
          // ===============================================
     })
}
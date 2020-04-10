const BASE_URL = "http://localhost:3000/plants"
let main = document.querySelector('main');
let addBtn = document.querySelector('.add');

document.addEventListener("DOMContentLoaded", e => {
     getPlants();
     addBtn.addEventListener('click', createFetchPost)
     deletePlant();
})

// ALL THE SETTING UP GOES DOWN HERE 

function getPlants() {
     fetch(`${BASE_URL}`)
          .then(res => res.json())
          .then(plant => createPlantCards(plant))
}

function createFetchPost() {
     let options = {
          "method": "POST",
          "headers": {
               'Content-Type': "application/json",
               'Accept': "application/json"
          }
     }

     fetch(BASE_URL, options)
          .then(res => res.json())
          .then(plant => console.log(plant))
          .catch(err => console.log(err.message))

}


function deletePlant() {
     main.addEventListener('click', e => {
          let delBtns = document.querySelectorAll('.del-btn')
          delBtns.forEach(plantDelBtn => {
               if (e.target === plantDelBtn) {
                    let plantId = plantDelBtn.parentElement.parentElement.dataset.id;
                    plantDelBtn.parentElement.parentElement.remove()
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
     })
}


function createPlantCards(plant) {

     plant.data.forEach(currPlant => {
          let plantDiv = document.createElement('div');
          plantDiv.setAttribute('data-id', `${currPlant.id}`)
          plantDiv.classList.add('plant-card')

          let h2 = document.createElement('h2');
          h2.textContent = currPlant.attributes.name

          let p = document.createElement('p');
          p.textContent = currPlant.attributes.species

          let btnWrapper = document.createElement('div')
          btnWrapper.classList.add('btn-wrapper')

          let del = document.createElement('button')
          del.classList.add('del-btn')
          del.textContent = "Delete"

          btnWrapper.append(del)
          plantDiv.append(h2, p, btnWrapper)
          main.prepend(plantDiv);
     })
}
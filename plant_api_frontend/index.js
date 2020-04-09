let main = document.querySelector('main');

document.addEventListener("DOMContentLoaded", e => {
     fetchPlants()
})

function fetchPlants() {
     fetch('http://localhost:3000/plants')
          .then(res => res.json())
          .then(plant => createPlantCards(plant))
}

// Create Plants Cards

function createPlantCards(plant) {

     plant.data.forEach(currPlant => {
          let plantDiv = document.createElement('div');
          plantDiv.classList.add('plant-card')

          let h2 = document.createElement('h2');
          h2.textContent = currPlant.attributes.name

          let p = document.createElement('p');
          p.textContent = currPlant.attributes.species

          plantDiv.append(h2, p)
          main.appendChild(plantDiv);
     })
}
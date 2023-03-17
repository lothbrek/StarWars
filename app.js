function fetchPlanets(url) {
    axios.get(url)
      .then(response => {
        const planets = response.data.results;
        addPlanetNames(planets);
  
        if (response.data.next) {
          fetchPlanets(response.data.next);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  function addPlanetNames(planets) {
    for (let planet of planets) {
      const listItem = document.createElement("li");
      listItem.textContent = planet.name;
      planetList.appendChild(listItem);
    }
  }
  
  fetchPlanets("https://swapi.dev/api/planets/");
const inputValue = document.querySelector("#search-input");
const plantCardList = document.querySelector("#plant-card-list");

document.getElementById("search-bar").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputValue.value);
  console.log("SEARCH FOR THIS PLANT", e.target);

  var term = inputValue.value;
  fetch(`/api/search/plants/${term}`).then(async (data) => {
    // console.log("THIS IS THE RESPONSE", await data.json());
    const plantResponseData = await data.json();

    plantResponseData.forEach((plantData) => {
      //card wrapper//
      const plantCard = document.createElement("div");
      plantCard.classList.add("card");

      //card body//
      const plantCardBody = document.createElement("div");
      plantCardBody.classList.add("card-body");

      //card title//
      const plantName = document.createElement("h5");
      plantName.innerHTML = plantData.common[0];

      //card sub-title//
      const plantSubTitle = document.createElement("p");
      plantSubTitle.innerHTML = plantData.latin;

      //build card here//
      plantCard.appendChild(plantCardBody);
      plantCardBody.appendChild(plantName);
      plantCardBody.appendChild(plantSubTitle);
      plantCardList.appendChild(plantCard);
    });
  });
});
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
//Example payload//
// {
//   "id": 0,
//   "latin": "Aeschynanthus lobianus",
//   "family": "Gesneriaceae",
//   "common": [
//     "Lipstick"
//   ],
//   "category": "Hanging",
//   "origin": "Java",
//   "climate": "Tropical",
//   "tempmax": {
//     "celsius": 32,
//     "fahrenheit": 89.6
//   },
//   "tempmin": {
//     "celsius": 14,
//     "fahrenheit": 57.2
//   },
//   "ideallight": "Bright light",
//   "toleratedlight": "Direct sunlight",
//   "watering": "Keep moist between watering. Can be a bit dry between watering",
//   "insects": [
//     "Mealy bug",
//     "Aphid",
//     "Thrips"
//   ],
//   "diseases": "N/A",
//   "use": [
//     "Hanging",
//     "Flower",
//     "Tertiary"
//   ]
// },

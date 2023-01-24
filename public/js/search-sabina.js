
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

      //car button //
      const addPlantBtn = document.createElement("button");
      addPlantBtn.innerHTML = "Add Plant";
      addPlantBtn.addEventListener("click", () => {
        addPlantToDb(plantData);
      });
      //build card here//
      plantCard.appendChild(plantCardBody);
      plantCardBody.appendChild(plantName);
      plantCardBody.appendChild(plantSubTitle);
      plantCardBody.appendChild(addPlantBtn);
      plantCardList.appendChild(plantCard);
    });
  });
});

const addPlantToDb = async (data) => {
  console.log("add this plant", data);
  const response = await fetch(`/api/myPlants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  if (response.ok) {
    document.location.replace("/myPlants");
  } else {
    alert("failed to add plant");
  }
};

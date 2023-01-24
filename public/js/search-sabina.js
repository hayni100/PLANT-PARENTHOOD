const inputValue = document.querySelector("#search-input");

document.getElementById("search-bar").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputValue.value);
  console.log("SEARCH FOR THIS PLANT", e.target);

  var term = inputValue.value;
  fetch(`/api/search/plants/${term}`).then(async (data) => {
    console.log("THIS IS THE RESPONSE", await data.json());
  });
});

//inputValue.value is term

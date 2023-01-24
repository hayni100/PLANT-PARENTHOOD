const router = require("express").Router();







require("dotenv").config();
const axios = require("axios");
const { Plant } = require("../../models");

//:term is considered a query parameter//
router.get("/plants/:term", async (req, res) => {
  console.log("we are here!!!", req.params.term);

  const options = {
    method: "GET",
    url: `https://house-plants.p.rapidapi.com/common/${req.params.term}`,
    headers: {
      "X-RapidAPI-Key": process.env.api_key,
      "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
    },
  };

  const response = await axios
    .request(options)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log(response);
  res.json(response);
});

module.exports = router;

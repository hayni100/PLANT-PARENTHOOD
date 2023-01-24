<<<<<<< HEAD
const router = require('express').Router();

require('dotenv').config();
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://house-plants.p.rapidapi.com/all',
    headers: {
      'X-RapidAPI-Key': process.env.api_key,
      'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
  };
router.get('/plants', (req,res) => {
    console.log('we are here!!!');
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

module.exports = router;
=======
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
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log(response);
  res.json(response);
});

module.exports = router;
>>>>>>> 45328388a2de6b0262d430b05e4b3b7432f0000e

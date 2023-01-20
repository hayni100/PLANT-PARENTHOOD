const router = require('express').Router();

require('dotenv').config();
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://house-plants.p.rapidapi.com/common' + plantname,
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
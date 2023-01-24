const router = require("express").Router();
const { Plant } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPlant = await Plant.create({
  
      name: req.body.common[0],
      maxTemp: req.body.tempmax.fahrenheit,
      minTemp: req.body.tempmin.fahrenheit,
      idealLight: req.body.ideallight,
      toleratedLight: req.body.toleratedlight,
      watering: req.body.watering,
      user_id: req.session.user_id,
    });
    console.log("@@@@@@ HIT ADD PLANT POST");
    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

//NEED TO USE ABOVE CODE BLOCK//
// router.post("/", async (req, res) => {
//   try {
//     const newPlant = await Plant.create({
//       // ...req.body,
//       // user_id: req.session.user_id,

//       name: req.body.common[0],
//       maxTemp: req.body.tempmax.fahrenheit,
//       minTemp: req.body.tempmin.fahrenheit,
//       idealLight: req.body.ideallight,
//       toleratedLight: req.body.toleratedlight,
//       watering: req.body.watering,
//       user_id: 1,
//     });
//     console.log("@@@@@@ HIT ADD PLANT POST");
//     res.status(200).json(newPlant);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const myPlantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!myPlantData) {
      res.status(404).json({ message: "No plants found with this id!" });
      return;
    }

    res.status(200).json(myPlantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

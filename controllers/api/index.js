const router = require("express").Router();
const userRoutes = require("./userRoutes");
const myPlantsRoutes = require("./myPlantsRoutes");
const plantSearch = require("./plantSearch");

router.use("/myPlants", myPlantsRoutes);
router.use("/users", userRoutes);
router.use("/search", plantSearch);

module.exports = router;

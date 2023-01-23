const router = require('express').Router();
const userRoutes = require('./userRoutes');
const myPlantsRoutes = require('./myPlantsRoutes');
const plantSearches = require('./plantSearch');

router.use('/users', userRoutes);
router.use('/myPlants', myPlantsRoutes);
router.use('/search',plantSearches);

module.exports = router;

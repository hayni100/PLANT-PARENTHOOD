const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const plantSearches = require('./plantSearch');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/search',plantSearches);

module.exports = router;

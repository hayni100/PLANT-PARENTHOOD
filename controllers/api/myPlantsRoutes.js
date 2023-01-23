const router = require('express').Router();
const { Plant } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPlant = await Plant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const myPlantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!myPlantData) {
      res.status(404).json({ message: 'No plants found with this id!' });
      return;
    }

    res.status(200).json(myPlantsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

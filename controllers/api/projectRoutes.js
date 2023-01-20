const router = require('express').Router();
const { myPlants } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPlants = await myPlants.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlants);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const myPlantsData = await myplants.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!myPlantsData) {
      res.status(404).json({ message: 'No plants found with this id!' });
      return;
    }

    res.status(200).json(myPlantsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

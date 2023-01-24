const router = require("express").Router();
const { Plant, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("GET HOME ROUTE");
  try {
    // Get all myplants and JOIN with user data
    const myPlantData = await Plant.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    // Serialize data so the template can read it
    const serializedPlants = myPlantData.map((plant) =>
      plant.get({ plain: true })
    );
    console.log("MYPLANTSDATA", serializedPlants);
    // Pass serialized data and session flag into template
    res.render("homepage", {
      serializedPlants,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/myPlants/:id", async (req, res) => {
  try {
    const myPlantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const myPlant = myPlantData.get({ plain: true });

    res.render("myPlants", {
      ...myPlant,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/myPlants", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Plant }],
    });

    const user = userData.get({ plain: true });

    res.render("myPlants", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/myPlants");
    return;
  }

  res.render("login");
});


router.get("/myPlants", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_out) {
    res.redirect("/");
    return;
  }

  res.render("myPlants");
});

router.get("/search", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("search");
});
module.exports = router;

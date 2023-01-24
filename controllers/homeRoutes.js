const router = require("express").Router();
const { Plant, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("GET HOME ROUTE");
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/myPlants", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Plant }],
    });
    console.log("user DATA", userData);
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

router.get("/search", withAuth, async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("search", {
    logged_in: req.session.logged_in,
  });
});
module.exports = router;

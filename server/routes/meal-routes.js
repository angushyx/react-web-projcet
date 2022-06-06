const router = require("express").Router();
const Meal = require("../models/meal");
const mealValidation = require("../validation").mealValidation;

router.use((req, res, next) => {
  console.log("A request is coming into api.");
  next();
});

router.post("/", async (req, res) => {
  const { error } = mealValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { name, description, price, amount, picture } = req.body;

  /**
   * !為何req會有 user 可以用??????
   * 說是從 passport 來的???
   */
  // if (req.user.isConsumer()) {
  //   return res.status(400).send("Only seller can post new meals");
  // }

  let newMeal = new Meal({
    name,
    description,
    price,
    amount,
    picture,
  });

  try {
    await newMeal.save();
    res.status(200).send("New meal has been saved.");
  } catch (error) {
    res.status(400).send("Cannot save meal.");
  }
});

module.exports = router;

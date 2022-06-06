const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models/user-model");

// const { signIn, signup } = require("../controllers/user");

router.get("/test", (req, res) => {
  const mseObj = {
    message: "test api",
  };
  return res.json(mseObj);
});

router.post("/signup", async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send("Email is already been registered.");

  //register the user
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const saveUser = await newUser.save();
    res.status(200).send({
      msg: "success",
      savedObject: saveUser,
    });
  } catch (error) {
    res.status(400).send("User not saved.");
  }
});

// //middleware

// router.post("/signIn", signIn);
// router.post("/signup", signup);
// router.get("/test", (req, res) => {
//   res.send("可以");
// });

// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile"],
//   })
// );

// // When logout, redirect to client
// router.get(
//   "/google/redirect",
//   passport.authenticate("google", {
//     successRedirect: CLIENT_HOME_PAGE_URL,
//   })
// );

// //要做 login 還是 google login
// router.get("/login/success", (req, res) => {
//   console.log(req.body);
//   if (req.user) {
//     console.log(req.user);
//     res.json({
//       success: true,
//       message: "user has successfully authenticated",
//       user: req.user,
//       cookies: req.cookies,
//     });
//   }
// });

module.exports = router;

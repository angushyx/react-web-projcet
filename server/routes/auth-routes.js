const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
// const { signIn, signup } = require("../controllers/user");

router.post("/signup", async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send("Email is already been registered.");

  /**
   * register the user，如果 google 也要存到 mongodb 就要從 client side 拿到 google login 資料，接著再 new 一個新的 google user，用同一套 model，
   */
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    role: req.body.role,
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

router.post("/login", (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.status(400).send(err);
    }
    if (!user) {
      res.status(401).send("User not found");
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) return res.status(400).send(err);
        if (isMatch) {
          const tokenObject = { _id: user.id, email: user.email };
          const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
          res.send({ success: true, token: "JWT " + token, user });
        } else {
          res.status(400).send("Wrong password");
        }
      });
    }
  });
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

const router = require("express").Router();
const passport = require("passport");

const { signIn, signup } = require("../controllers/user");

// //middleware

router.post("/signIn", signIn);
router.post("/signup", signup);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

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

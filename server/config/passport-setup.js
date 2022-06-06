// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20");
// const User = require("../models/user-model");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       //這裡可以找到選取的 google 帳號資訊
//       //把 google 提供的資訊塞到剛剛做好的 SCHEME 裡面
//       const currentUser = await User.findOne({
//         googleId: profile.id,
//       });
//       if (!currentUser) {
//         const newUser = await new User({
//           name: profile.displayName,
//           google: profile.id,
//           avatar: profile.photos[0].value,
//         }).save();
//         if (newUser) {
//           done(null, newUser);
//         }
//       }
//       done(null, currentUser);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   console.log(user);
//   done(null, user._id);
// });

// passport.deserializeUser((_id, done) => {
//   User.findById({ _id })
//     .then((user) => {
//       console.log("Found user");
//       done(null, user);
//     })
//     .catch((e) => {
//       done(new Error("Failed to deserialize an user"));
//     });
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = 8080;

const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");

require("./config/passport-setup");

const authRoutes = require("./routes/auth-routes.js");
// const cartRoutes = require("./routes/cart-routes");

const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const req = require("express/lib/request");

mongoose
  .connect(process.env.DB_CONNECT, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connect to mongodb atlas.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SECRET],
  })
);

app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(cookieParser());
app.use(passport.initialize());
//讓 browser store cookie
app.use(passport.session());

// set up cors to allow us to accept requests from our client
// app.use(
//   cors({
//     origin: "http://localhost:3000", // allow to server to accept request from different origin
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // allow session cookie from browser to pass through
//   })
// );

// set up routes

// app.use("/cart", cartRoutes);

// const authCheck = (req, res, next) => {
//   if (!req.user) {
//     res.status(401).json({
//       authenticated: false,
//       message: "user has not been authenticated",
//     });
//   } else {
//     next();
//   }
// };

// app.get("/auth", authCheck, (req, res) => {
//   res.status(200).json({
//     authenticated: true,
//     message: "user successfully authenticated",
//     user: req.user,
//     cookies: req.cookies,
//   });
// });

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

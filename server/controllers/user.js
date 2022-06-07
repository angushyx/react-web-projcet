// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user-model");

// //!每次的 state 都是 404 ?
// exports.signIn = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const exitingUser = await User.findOne({ email });
//     console.log(req.body);
//     //Don't have the exiting user in the database
//     if (!exitingUser)
//       return res.status(404).json({ message: "User doesn't  exist." });

//     // Compare password between DB and server
//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       exitingUser.password
//     );

//     if (!isPasswordCorrect)
//       return res.status(400).json({ message: "Invalid credentials." });

//     const token = jwt.sign(
//       { email: exitingUser.email, id: exitingUser._id },
//       "test",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ result: exitingUser, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." });
//   }
// };

// exports.signup = async (req, res) => {
//   const { email, password, confirmPassword, firstName, lastName } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exiting." });
//     if (password !== confirmPassword)
//       return res.status(400).json({ message: "Password don't match." });

//     const hashPassword = await bcrypt.hash(password, 12);

//     const result = await User.create({
//       email,
//       password: hashPassword,
//       name: `${firstName} ${lastName}`,
//     });

//     //use result create token
//     const token = jwt.sign({ email: result.email, id: result._id }, "test", {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ result, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." });
//   }
// };

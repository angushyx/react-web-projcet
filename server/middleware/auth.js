// // import jwt from "jsonwebtoken";
// const jwt = require("jsonwebtoken");

// //want to add item to cart

// //click the cart icon => auth middleware confirm or denies that request if(ok)(NEXT) ==> add to cart controller...

// //middleware have next
// const auth = async (req, res, next) => {
//   try {
//     const token = req.header.authorization.split(" ")[1];
//     const isCustomAuth = token.length < 500;

//     let decodedData;

//     if (token && isCustomAuth) {
//       decodedData = jwt.verify(token, "test");
//       req.userId = decodedData?.id;
//     } else {
//       decodedData = jwt.decode(token);

//       req.userId = decodedData?.sub;
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// //Use in routes
// module.exports = auth;

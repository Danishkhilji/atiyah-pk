const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const token = req.headers.get("Authorization");

  if (token) {
    // The token is present in the request header.

    // Get the token from the header.
    const tokenWithoutBearer = token.replace("Bearer ", "");

    // Verify the token.
    jwt.verify(tokenWithoutBearer, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        // The token is invalid.
        throw new Error(err);
      }

      // The token is valid.
      next();
    });
  } else {
    // The token is not present in the request header.
    throw new Error("user not found");
  }
};

module.exports = authenticateJWT;

// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const authenticateJWT = (req, res, next) => {
//   const jwt_token = req.cookies.JWT_token;

//   if (jwt_token) {
//     jwt.verify(jwt_token, process.env.TOKEN_SECRET, (err, user) => {
//       if (err) {
//         throw new Error(err);
//       }
//       next();
//     });
//   } else {
//     throw new Error("user not found");
//   }
// };

// module.exports = authenticateJWT;

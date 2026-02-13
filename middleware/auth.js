const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", req.headers.authorization);


  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    console.log("Decoded:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

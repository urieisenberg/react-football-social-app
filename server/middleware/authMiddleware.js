const { verifyToken } = require("../config/token");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = await verifyToken(token);
      req.user = await User.findById(decoded.id).select("-password");
      return next();
    } catch (e) {
      res.status(401).json({ error: "Unauthorized" });
    }
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
};

module.exports = auth;

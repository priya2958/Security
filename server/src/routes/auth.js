import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body } from "express-validator";
import users from "../models/users.js";
import validate from "../middleware/inputValidator.js";
import auditLogger from "../middleware/auditLogger.js";

const router = express.Router();

// Login route
router.post(
  "/login",
  validate([
    body("username").isString().trim().notEmpty(),
    body("password").isString().trim().notEmpty(),
  ]),
  (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) {
      auditLogger.warn(`Failed login attempt for username: ${username}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        auditLogger.warn(`Failed login attempt for username: ${username}`);
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      auditLogger.info(`User ${username} logged in successfully`);
      res.json({ token });
    });
  }
);

export default router;

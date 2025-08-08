import express from "express";
import { authorizeRoles } from "../middleware/auth.js";
import auditLogger from "../middleware/auditLogger.js";
import users from "../models/users.js";

const router = express.Router();

// Get all users (admin only)
router.get("/", authorizeRoles("admin"), (req, res) => {
  auditLogger.info(`Admin ${req.user.username} viewed all users`);
  res.json(
    users.map((u) => ({ id: u.id, username: u.username, role: u.role }))
  );
});

// Get own profile
router.get("/me", (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  auditLogger.info(`User ${req.user.username} viewed their profile`);
  res.json({ id: user.id, username: user.username, role: user.role });
});

export default router;

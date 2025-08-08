# React + Vite

# Prompts

Create a React + Node.js REST API following industry standards.

Requirements
Authentication: Use OAuth 2.0 or JWT
Authorization: Role-based access control (e.g. user/admin)
Rate Limiting: Throttle requests (e.g. 100 req/min/IP)
Input Validation: Sanitize and validate all incoming data
Audit Logging: Log login attempts, failures, and security events

### How My Code Meets the Requirements:

JWT Authentication: Implemented using `jsonwebtoken` in `auth.js` to protect routes.
Role-Based Authorization: Role checks added in `middleware/auth.js` to restrict access based on user roles (`user`, `admin`).
Rate Limiting: Added `express-rate-limit` in `middleware/rateLimiter.js` to throttle API calls.
Input Validation: Used `express-validator` in `routes/` to validate and sanitize user inputs.
Audit Logging: Security events (logins, failures, etc.) logged using `winston` in `utils/logger.js`.

# Secure Node.js REST API

## Features

- JWT Authentication
- Role-based Authorization (user/admin)
- Rate Limiting (100 req/min/IP)
- Input Validation & Sanitization
- Audit Logging (login attempts, failures, security events)

## Getting Started

1. Install dependencies:
   ```sh
   cd server
   npm install
   ```
2. Set environment variables in `.env` (see example in `.env` file).
3. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `POST /api/auth/login` — Login, returns JWT
- `GET /api/users/me` — Get own profile (JWT required)
- `GET /api/users/` — List all users (admin only)

## Security

- All sensitive actions are logged to `audit.log`.
- All input is validated and sanitized.
- Rate limiting is enforced globally.

---

**Note:** This is a demo. In production, use a database and secure secrets properly.

// ────────────────────────────────────────────────────────────
// Auth scaffold — DO NOT EDIT.
// It exists only so your React app has a real /auth/login to call.
// A parallel backend course builds the full version; here it just
// checks a demo credential and signs a short-lived access token.
// ────────────────────────────────────────────────────────────
import "dotenv/config";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

// Two demo accounts. Password for both is "password".
const USERS = [
  { id: 1, name: "Ada", email: "ada@threadbase.dev", password: "password", role: "user" },
  { id: 2, name: "Linus", email: "linus@threadbase.dev", password: "password", role: "admin" },
];

// POST /auth/login  →  { accessToken, user }
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body ?? {};
  const found = USERS.find((u) => u.email === email && u.password === password);
  if (!found) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const accessToken = jwt.sign(
    { userId: found.id, role: found.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
  // Never send the password back. The refresh token would be an httpOnly
  // cookie in the real scaffold; omitted here to keep the starter tiny.
  res.json({ accessToken, user: { id: found.id, name: found.name, role: found.role } });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`✅ Auth scaffold on http://localhost:${PORT}`));

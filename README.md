# Threadbase — AuthContext Starter

A React + Vite app (TanStack Query already wired) plus a tiny auth scaffold server.
Your job: give the app a safe home for its auth state — the access token in **memory**,
never in `localStorage`.

## What you build

1. `client/src/auth/AuthContext.jsx` — `createContext`, an `authReducer`
   (`LOGIN` / `LOGOUT` / `TOKEN_REFRESHED` / default), an `AuthProvider` using
   `useReducer`, and a `useAuth` hook. Export `AuthProvider` and `useAuth`.
2. `client/src/main.jsx` — wrap `<App />` in `<AuthProvider>`.
3. `client/src/pages/LoginPage.jsx` — a `useMutation` that calls `POST /auth/login`
   and, on success, dispatches `LOGIN` with `{ user, accessToken }`.

The fields, the API client, and the login server are already done. Do **not** edit
`client/src/services/apiClient.js` or anything in `server/`.

## Run it

**Terminal 1 — the auth server (do not edit):**
```bash
cd server
cp .env.example .env      # local secret — never commit .env
npm install
npm start                 # → http://localhost:3001
```

**Terminal 2 — the React app:**
```bash
cd client
cp .env.development.example .env.development
npm install
npm run dev               # → http://localhost:5173
```

## Demo accounts

| email | password | role |
|---|---|---|
| `ada@threadbase.dev` | `password` | user |
| `linus@threadbase.dev` | `password` | admin |

## Prove it works

After you wire everything, log in and open **React DevTools → Components → `AuthProvider`**:
its state should show `{ user: {...}, accessToken: "eyJ..." }`. Then open
**Application → Local Storage** and confirm it is **empty** — the token lives only in
memory. That contrast is the whole point (and the screenshot your PR needs).

## Structure

```
threadbase-authcontext-starter/
├── client/                         # React + Vite + TanStack Query
│   └── src/
│       ├── auth/AuthContext.jsx    # ← YOU implement (empty)
│       ├── pages/LoginPage.jsx     # ← YOU wire the mutation (fields done)
│       ├── services/apiClient.js   # Axios instance — do NOT edit
│       ├── App.jsx
│       └── main.jsx                # ← YOU wrap <App /> in <AuthProvider>
└── server/                         # auth scaffold — do NOT edit
    └── server.js                   # POST /auth/login → { accessToken, user }
```

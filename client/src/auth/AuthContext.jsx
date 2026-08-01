// auth/AuthContext.jsx
// ────────────────────────────────────────────────────────────
// YOUR TASK: build the app's auth-state home. Implement all five pieces:
//   1. const AuthContext = createContext(null)   — keep it PRIVATE to this file
//   2. const initialState = { user: null, accessToken: null }
//   3. authReducer(state, action)  — handle:
//        LOGIN            → set BOTH user and accessToken from action.payload
//        LOGOUT           → clear BOTH back to null
//        TOKEN_REFRESHED  → update accessToken ONLY, keep user
//        default          → return state unchanged
//   4. export function AuthProvider({ children }) — useReducer(authReducer, initialState),
//        provide value={{ ...state, dispatch }} to <AuthContext.Provider>
//   5. export function useAuth() — wrap useContext(AuthContext); throw a clear error
//        if it is null (used outside the provider)
//
// Export AuthProvider and useAuth. Do NOT export AuthContext itself.
// The full walkthrough is in the lesson.
// ────────────────────────────────────────────────────────────
import { createContext, useContext, useReducer } from "react";

// TODO: implement the five pieces above, then wrap <App /> with <AuthProvider>
//       in main.jsx and wire the login mutation in pages/LoginPage.jsx.

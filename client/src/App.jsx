import LoginPage from "./pages/LoginPage.jsx";
// After you build AuthContext, you can read the logged-in user here with useAuth().

export default function App() {
  return (
    <div className="wrap">
      <h1>Threadbase</h1>
      <p className="muted">
        Log in, then open React DevTools → Components → AuthProvider and find the
        access token in state. Check Application → Local Storage: it must stay empty.
      </p>
      <LoginPage />
      {/* Optional stretch: once AuthContext works, show the current user via useAuth(). */}
    </div>
  );
}

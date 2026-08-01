import { useState } from "react";
// TODO (task): import the pieces you need:
// import { useMutation } from "@tanstack/react-query";
// import apiClient from "../services/apiClient.js";
// import { useAuth } from "../auth/AuthContext.jsx";

export default function LoginPage() {
  // These fields are already wired to local state — leave them.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO (task): const { dispatch } = useAuth();
  // TODO (task): build a login mutation:
  //   const loginMutation = useMutation({
  //     mutationFn: (credentials) =>
  //       apiClient.post("/auth/login", credentials).then((res) => res.data),
  //     onSuccess: (data) => {
  //       // data is { user, accessToken }
  //       dispatch({ type: "LOGIN", payload: { user: data.user, accessToken: data.accessToken } });
  //     },
  //   });

  function handleSubmit(e) {
    e.preventDefault();
    // TODO (task): loginMutation.mutate({ email, password });
    alert("Wire the login mutation to dispatch LOGIN — see the lesson.");
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="ada@threadbase.dev"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
}

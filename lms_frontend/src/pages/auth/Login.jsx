import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import { signIn } from "../../store/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Login
 * Email/password login using Supabase.
 */
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      await dispatch(signIn({ email, password })).unwrap();
      navigate(from, { replace: true });
    } catch (error) {
      setErr(error?.message || "Unable to sign in");
    }
  };

  return (
    <div className="container" style={{ display: "grid", placeItems: "center", minHeight: "80vh" }}>
      <Card style={{ padding: 24, maxWidth: 420, width: "100%" }}>
        <h2 style={{ marginTop: 0 }}>Welcome back</h2>
        <p style={{ marginTop: 0, color: "#6b7280" }}>Sign in to continue</p>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="email">Email</label>
            <input id="email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="password">Password</label>
            <input id="password" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {err ? <div style={{ color: "var(--op-error)", marginBottom: 12 }}>{err}</div> : null}
          <Button type="submit" style={{ width: "100%" }}>Sign in</Button>
        </form>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between" }}>
          <Link to="/register">Create account</Link>
          <Link to="/reset">Forgot password?</Link>
        </div>
      </Card>
    </div>
  );
}

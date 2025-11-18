import React, { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/authSlice";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Register
 * Sign up users using Supabase Auth, email confirmation flow.
 */
export default function Register() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState(null);
  const [err, setErr] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setInfo(null);
    setErr(null);
    try {
      await dispatch(signUp({ email, password })).unwrap();
      setInfo("Please check your email to confirm your account.");
    } catch (error) {
      setErr(error?.message || "Unable to register");
    }
  };

  return (
    <div className="container" style={{ display: "grid", placeItems: "center", minHeight: "80vh" }}>
      <Card style={{ padding: 24, maxWidth: 420, width: "100%" }}>
        <h2 style={{ marginTop: 0 }}>Create your account</h2>
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
          {info ? <div style={{ color: "var(--op-secondary)", marginBottom: 12 }}>{info}</div> : null}
          <Button type="submit" style={{ width: "100%" }}>Register</Button>
        </form>
        <div style={{ marginTop: 12 }}>
          <Link to="/login">Back to login</Link>
        </div>
      </Card>
    </div>
  );
}

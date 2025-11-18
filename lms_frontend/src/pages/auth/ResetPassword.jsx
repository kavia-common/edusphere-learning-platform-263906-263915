import React, { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { getSupabaseClient } from "../../lib/supabaseClient";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * ResetPassword
 * Requests password reset email.
 */
export default function ResetPassword() {
  const supabase = getSupabaseClient();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setErr(null);
    try {
      const redirectTo = `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/reset/callback`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo
      });
      if (error) throw error;
      setMsg("If the email exists, a reset link has been sent.");
    } catch (error) {
      setErr(error?.message || "Unable to request reset");
    }
  };

  return (
    <div className="container" style={{ display: "grid", placeItems: "center", minHeight: "80vh" }}>
      <Card style={{ padding: 24, maxWidth: 420, width: "100%" }}>
        <h2 style={{ marginTop: 0 }}>Reset Password</h2>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="email">Email</label>
            <input id="email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          {err ? <div style={{ color: "var(--op-error)", marginBottom: 12 }}>{err}</div> : null}
          {msg ? <div style={{ color: "var(--op-secondary)", marginBottom: 12 }}>{msg}</div> : null}
          <Button type="submit" style={{ width: "100%" }}>Send reset link</Button>
        </form>
        <div style={{ marginTop: 12 }}>
          <Link to="/login">Back to login</Link>
        </div>
      </Card>
    </div>
  );
}

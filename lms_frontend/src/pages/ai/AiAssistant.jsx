import React, { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import apiClient from "../../lib/apiClient";

/**
 * PUBLIC_INTERFACE
 * AiAssistant
 * Simple panel that calls backend AI endpoint for assistance.
 * Feature can be gated via REACT_APP_FEATURE_FLAGS=ai
 */
export default function AiAssistant() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const onAsk = async () => {
    setLoading(true);
    setErr(null);
    setAnswer("");
    try {
      // Placeholder: adjust to actual backend route when available
      const res = await apiClient.post("/api/ai/assist", { prompt });
      setAnswer(res.data?.answer || "No answer provided.");
    } catch (error) {
      setErr(error?.response?.data?.error || "AI request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>AI Assistant</h2>
      <Card style={{ padding: 16 }}>
        <div style={{ marginBottom: 12 }}>
          <textarea className="input" rows={5} placeholder="Ask anything about your course..."
            value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button onClick={onAsk} disabled={loading || !prompt.trim()}>
            {loading ? "Thinking..." : "Ask AI"}
          </Button>
          <Button variant="ghost" onClick={() => { setPrompt(""); setAnswer(""); setErr(null); }}>Clear</Button>
        </div>
        {err ? <div style={{ color: "var(--op-error)", marginTop: 12 }}>{err}</div> : null}
        {answer ? (
          <Card style={{ padding: 12, marginTop: 12, background: "linear-gradient(180deg, rgba(59,130,246,0.05), #fff)" }}>
            <div>{answer}</div>
          </Card>
        ) : null}
      </Card>
    </div>
  );
}

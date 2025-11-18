import React, { useEffect, useState } from "react";
import useRealtimeChannel from "../../hooks/useRealtimeChannel";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

/**
 * PUBLIC_INTERFACE
 * ChatRoom
 * Real-time chat using Supabase Realtime channel. Defaults to "global".
 */
export default function ChatRoom() {
  const [params] = useSearchParams();
  const room = params.get("room") || "global";
  const { user } = useAuth();
  const { messages, sendMessage } = useRealtimeChannel(room);
  const [text, setText] = useState("");

  const onSend = async () => {
    if (!text.trim()) return;
    await sendMessage({
      user: user?.email || "anon",
      text,
      ts: new Date().toISOString()
    });
    setText("");
  };

  useEffect(() => {
    // scroll, etc. omitted for brevity
  }, [messages]);

  return (
    <div className="container">
      <h2>Chat: {room}</h2>
      <Card style={{ padding: 16, marginBottom: 12 }}>
        <div style={{ maxHeight: 360, overflowY: "auto", display: "grid", gap: 8 }}>
          {messages.map((m, i) => (
            <div key={`${m.ts}-${i}`} style={{ padding: 8, borderRadius: 8, background: "rgba(37,99,235,0.08)" }}>
              <div style={{ fontSize: 12, opacity: 0.7 }}>{m.user}</div>
              <div>{m.text}</div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>{new Date(m.ts).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </Card>
      <div style={{ display: "flex", gap: 8 }}>
        <input className="input" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={onSend}>Send</Button>
      </div>
    </div>
  );
}

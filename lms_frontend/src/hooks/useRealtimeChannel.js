import { useEffect, useRef, useState } from "react";
import { getSupabaseClient } from "../lib/supabaseClient";

/**
 * PUBLIC_INTERFACE
 * useRealtimeChannel
 * Subscribe to a Realtime channel and receive messages.
 * Typical usage: const { messages, sendMessage } = useRealtimeChannel(`course_chat:${courseId}`)
 */
export default function useRealtimeChannel(channelName, { onEvent } = {}) {
  const supabase = getSupabaseClient();
  const channelRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!channelName) return;

    const ch = supabase.channel(channelName, {
      config: { broadcast: { ack: true } }
    });

    channelRef.current = ch;

    ch.on("broadcast", { event: "msg" }, (payload) => {
      setMessages((prev) => [...prev, payload?.payload]);
      if (onEvent) onEvent(payload?.payload);
    });

    ch.subscribe((s) => {
      setStatus(s);
    });

    return () => {
      ch.unsubscribe();
      channelRef.current = null;
    };
  }, [channelName]); // eslint-disable-line react-hooks/exhaustive-deps

  const sendMessage = async (payload) => {
    if (!channelRef.current) return;
    await channelRef.current.send({
      type: "broadcast",
      event: "msg",
      payload
    });
  };

  return { status, messages, sendMessage };
}

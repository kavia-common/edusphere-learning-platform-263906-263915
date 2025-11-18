# EduSphere LMS - Integration Quickstart

This guide summarizes how to run the frontend and backend locally with Supabase.

## Environment variables

Create `.env` files per container (do NOT commit secrets).

Frontend (lms_frontend/.env):
- REACT_APP_FRONTEND_URL=http://localhost:3000
- REACT_APP_BACKEND_URL=http://localhost:3001
- REACT_APP_WS_URL=ws://localhost:3001
- REACT_APP_SUPABASE_URL=your-supabase-url
- REACT_APP_SUPABASE_KEY=your-supabase-anon-key
- REACT_APP_FEATURE_FLAGS=chat,ai

Backend:
- Ensure CORS allows http://localhost:3000
- Configure backend to validate Supabase JWTs if needed and expose routes matching openapi.json (e.g., /ai/assist, /auth/me)

## Token propagation

The frontend axios client (src/lib/apiClient.js) automatically attaches `Authorization: Bearer <supabase access_token>` from the current Supabase session. No further action is required in feature pages.

## Services

- Start backend on http://localhost:3001 (also serve OpenAPI at /openapi.json, /docs)
- Start frontend on http://localhost:3000

## Notes

- Supabase email redirects use REACT_APP_FRONTEND_URL.
- Realtime chat uses Supabase Realtime channels; no backend WS required.
- If you add a backend WebSocket, reference REACT_APP_WS_URL for the client.

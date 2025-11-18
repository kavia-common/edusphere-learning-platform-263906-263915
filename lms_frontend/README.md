# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Integration Quickstart (Frontend ↔ Backend ↔ Supabase)

1) Copy environment example and fill in values
- cp .env.example .env
- Required:
  - REACT_APP_SUPABASE_URL (from Supabase → Project Settings → API)
  - REACT_APP_SUPABASE_KEY (Anon public key)
- Defaults provided for local dev:
  - REACT_APP_BACKEND_URL=http://localhost:3001
  - REACT_APP_WS_URL=ws://localhost:3001
  - REACT_APP_FRONTEND_URL=http://localhost:3000

2) Start services
- Backend should listen on http://localhost:3001 with CORS allowing http://localhost:3000
- Frontend: npm start (uses REACT_APP_PORT=3000 by default)

3) Authentication & bearer token
- The axios client at src/lib/apiClient.js automatically attaches the Supabase access_token as Authorization: Bearer <token> on every request based on the current session.

4) AI & sample endpoints
- Example page src/pages/ai/AiAssistant.jsx calls POST /api/ai/assist on the backend. Ensure your backend exposes this route (per backend OpenAPI under /ai/assist).

5) Realtime
- Supabase Realtime is used for chat via src/hooks/useRealtimeChannel.js
- For future backend WebSocket connections, use REACT_APP_WS_URL (default ws://localhost:3001).

6) Email redirects
- Sign-up and reset flows use REACT_APP_FRONTEND_URL to build emailRedirectTo/redirectTo links. Make sure it matches your deployed frontend URL in production.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

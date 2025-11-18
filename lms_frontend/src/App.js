import React, { useEffect } from "react";
import "./App.css";
import "./assets/styles/theme.css";
import AppRouter from "./routes/AppRouter";
import { applyTheme } from "./utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { initSession, registerAuthListener } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((s) => s.ui);

  useEffect(() => {
    applyTheme();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // initialize auth session and register listener
    dispatch(initSession());
    registerAuthListener(dispatch);
  }, [dispatch]);

  return <AppRouter />;
}

export default App;

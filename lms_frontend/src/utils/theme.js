import { OCEAN_PROFESSIONAL } from "./constants";

/**
 * PUBLIC_INTERFACE
 * applyTheme
 * Applies CSS variables to document root using Ocean Professional palette.
 */
export function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--op-primary", OCEAN_PROFESSIONAL.primary);
  root.style.setProperty("--op-secondary", OCEAN_PROFESSIONAL.secondary);
  root.style.setProperty("--op-error", OCEAN_PROFESSIONAL.error);
  root.style.setProperty("--op-surface", OCEAN_PROFESSIONAL.surface);
  root.style.setProperty("--op-background", OCEAN_PROFESSIONAL.background);
  root.style.setProperty("--op-text", OCEAN_PROFESSIONAL.text);
  root.style.setProperty("--op-gradient-from", OCEAN_PROFESSIONAL.gradientFrom);
  root.style.setProperty("--op-gradient-to", OCEAN_PROFESSIONAL.gradientTo);
}

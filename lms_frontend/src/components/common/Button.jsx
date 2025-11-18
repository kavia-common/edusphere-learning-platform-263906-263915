import React from "react";
import clsx from "clsx";

/**
 * PUBLIC_INTERFACE
 * Button
 * Reusable button with Ocean Professional styles.
 */
export default function Button({ children, className, variant = "primary", ...props }) {
  return (
    <button
      className={clsx("btn", variant === "secondary" && "secondary", variant === "ghost" && "ghost", className)}
      {...props}
    >
      {children}
    </button>
  );
}

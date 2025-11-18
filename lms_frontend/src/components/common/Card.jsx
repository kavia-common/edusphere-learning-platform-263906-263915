import React from "react";
import clsx from "clsx";

/**
 * PUBLIC_INTERFACE
 * Card
 * Simple card wrapper.
 */
export default function Card({ children, className, ...props }) {
  return (
    <div className={clsx("card", className)} {...props}>
      {children}
    </div>
  );
}

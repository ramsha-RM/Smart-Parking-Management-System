import React from "react";
import "./common.css"
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  ...rest
}) {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...rest}>
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}

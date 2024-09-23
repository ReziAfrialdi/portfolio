import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * @param {"primary" | "secondary" | "tertiary" | "disabled"} props.variant
 * @param {"xl" | "lg" | "md" | "sm" | "xs"} props.size
 */
function Button({
  children,
  onClick,
  type = "button",
  className,
  variant = "primary", // default variant
  size = "lg", // default size
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        // Common styles
        "text-center duration-300 ease-in-out transition-all transform",

        // Variant styles
        {
          "bg-primary-500 hover:bg-primary-600 text-text-white hover:rounded-none": variant === "primary",
          " border border-secondary-800 text-text-primary": variant === "secondary",
          "bg-transparent hover:bg-transparent text-text-tertiary": variant === "tertiary",
          "cursor-not-allowed bg-secondary-600 text-text-secondary": variant === "disabled",
        },

        // Size styles
        {
          "h-12 py-[10px] px-8 rounded-xl button-1": size === "xl",
          "h-10 py-2 px-7 rounded-xl button-2": size === "lg",
          "h-8 py-[6px] px-6 rounded-lg button-3": size === "md",
          "h-7 py-[6px] px-5 rounded-lg button-3": size === "sm",
          "h-6 py-[6px] px-4 rounded-lg button-5": size === "xs",
        },

        className
      )}
      disabled={variant === "disabled"}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "disabled"]),
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  size: "md", // default size
};

export default Button;

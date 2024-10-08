import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * @param {"default" | "active"} props.variant
 * @param {"purple" | "blue"} props.color
 */
function ButtonTab({
  children,
  onClick,
  type = "button",
  className,
  color = "purple",
  variant = "default", // default size
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        // Common styles
        "text-center duration-300 ease-in-out transition-all transform h-7 py-[6px] px-5 rounded-lg button-4",

        // Variant styles
        {
          "text-text-tertiary hover:text-text-secondary":
            variant === "default" && (color !== "purple" || color !== "blue"),
          "bg-primary-500 active:bg-primary-600  visited:bg-primary-600 text-text-white":
            variant === "active" && color === "purple",
          "bg-other-royalBlue active:bg-[#2F3EC2] visited:bg-[#2F3EC2] text-text-white":
            variant === "active" && color === "blue",
          "bg-other-carnation hover:bg-other-carnation/90 active:bg-other-carnation/90 visited:bg-other-carnation/90 text-text-white":
            variant === "active" && color === "carnation",
          "bg-other-screaminGreen hover:bg-other-screaminGreen/90 active:bg-other-screaminGreen/90 visited:bg-other-screaminGreen/90 text-text-primary":
            variant === "active" && color === "screaminGreen",
          "bg-other-lemon hover:bg-other-lemon/90 active:bg-other-lemon/90 visited:bg-other-lemon/90 text-text-primary":
            variant === "active" && color === "lemon",
          "bg-transparent hover:bg-transparent active:bg-transparent visited:bg-transparent !px-0 !py-0":
            variant === "default" && color === "default",
        },

        className
      )}
      disabled={variant === "disabled"}
    >
      {children}
    </button>
  );
}

ButtonTab.propTypes = {
  variant: PropTypes.oneOf(["active", "default"]),
  color: PropTypes.oneOf([
    "purple",
    "blue",
    "carnation",
    "default",
    "screaminGreen",
    "lemon",
  ]),
};

ButtonTab.defaultProps = {
  type: "button",
  variant: "default", // default size
  color: "purple",
};

export default ButtonTab;

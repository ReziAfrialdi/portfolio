import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * @param {"xl" | "lg" | "md" | "sm" | "xs"} props.size
 */
function ButtonIcon({
  children,
  onClick,
  type = "button",
  className,
  isDisabled,
  size = "lg", // default size
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        // Common styles
        "text-center duration-300 ease-in-out transition-all transform   bg-secondary-600 hover:bg-primary-500 hover:rounded-none text-tertiary-800 hover:text-secondary-50",
        // Size styles
        {
          "text-2xl p-3 rounded-xl": size === "xl",
          "text-xl p-[10px] rounded-xl": size === "lg",
          "text-base p-2 rounded-lg": size === "md",
          "text-xs p-2 rounded-lg": size === "sm",
          "text-[10px] p-[7px] rounded-lg": size === "xs",
        },

        className
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

ButtonIcon.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
};

ButtonIcon.defaultProps = {
  type: "button",
  size: "md", // default size
};

export default ButtonIcon;

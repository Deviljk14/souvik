import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    black_900_66: "border border-black-900_66 border-solid text-black-900",
    black_900_7f: "outline outline-[1px] outline-black-900_7f text-black-900",
  },
  fill: {
    orange_A200: "bg-orange-A200 shadow-bs text-black-900",
    purple_A700: "bg-purple-A700 text-gray-50_01",
    green_A400: "bg-green-A400 text-gray-50",
    blue_A700: "bg-blue-A700 shadow-bs text-white-A700",
    gray_100: "bg-gray-100",
    red_600: "bg-red-600 text-gray-50",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-[5px]",
  md: "p-2.5",
  lg: "p-4",
  xl: "pl-[19px] pr-5 py-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900_66",
    "black_900_7f",
    "orange_A200",
    "purple_A700",
    "green_A400",
    "blue_A700",
    "gray_100",
    "red_600",
    "white_A700",
  ]),
};

export { Button };

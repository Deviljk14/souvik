import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    black_900: "border border-black-900 border-solid text-black-900_87",
    gray_50: "border border-gray-50 border-solid text-gray-50_7e",
  },
  fill: {
    orange_A200: "bg-orange-A200 shadow-bs text-white-A700",
    gray_200: "bg-gray-200 text-gray-900",
    gray_100: "bg-gray-100 text-black-900_87",
  },
};
const shapes = { round: "rounded" };
const sizes = {
  xs: "p-2.5",
  sm: "pb-3 pt-[13px] px-3",
  md: "pb-[13px] pt-[18px] px-[13px]",
  lg: "pb-[19px] pt-5 px-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "gray_50",
    "orange_A200",
    "gray_200",
    "gray_100",
  ]),
};

export { Input };

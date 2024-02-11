import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const CartColumncarttotal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <Text
          className="mt-1.5 text-black-900 text-xl"
          size="txtPoppinsMedium20Black900_1"
        >
          {props?.carttotal}
        </Text>
        <div className="flex flex-row gap-[307px] items-start justify-between mt-[23px] w-auto sm:w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.subtotalOne}
          </Text>
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.priceFive}
          </Text>
        </div>
        <Img
          className="h-px mt-[15px]"
          src="images/img_underline_black_900.svg"
          alt="underline"
        />
        <div className="flex flex-row gap-[314px] items-start justify-between mt-4 w-auto sm:w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.shipping}
          </Text>
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.free}
          </Text>
        </div>
        <Img
          className="h-px mt-3.5"
          src="images/img_underline_black_900.svg"
          alt="underline_One"
        />
        <div className="flex flex-row gap-[335px] items-start justify-between mt-4 w-auto sm:w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.total}
          </Text>
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.priceSix}
          </Text>
        </div>
        <Button
          className="common-pointer cursor-pointer font-medium font-poppins mb-2 min-w-[260px] md:ml-[0] ml-[65px] mt-[15px] text-base text-center"
          onClick={() => navigate("/checkout")}
          shape="round"
          color="red_600"
          size="lg"
          variant="fill"
        >
          {props?.proceesToCheckout}
        </Button>
      </div>
    </>
  );
};

CartColumncarttotal.defaultProps = {
  carttotal: "Cart Total",
  subtotalOne: "Subtotal:",
  priceFive: "$1750",
  shipping: "Shipping:",
  free: "Free",
  total: "Total:",
  priceSix: "$1750",
  proceesToCheckout: "Procees to checkout",
};

export default CartColumncarttotal;

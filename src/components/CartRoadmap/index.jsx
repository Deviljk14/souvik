import React from "react";

import { Line, Text } from "components";

const CartRoadmap = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-black-900_87 text-sm w-auto"
          size="txtPoppinsRegular14Black90087"
        >
          {props?.account}
        </Text>
        <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        <Text
          className="text-black-900_87 text-sm w-auto"
          size="txtPoppinsRegular14Black90087"
        >
          {props?.myaccount}
        </Text>
        {!!props?.linefourteen ? (
          <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.product ? (
          <Text
            className="text-black-900_87 text-sm w-auto"
            size="txtPoppinsRegular14Black90087"
          >
            {props?.product}
          </Text>
        ) : null}
        {!!props?.linefifteen ? (
          <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.viewcart ? (
          <Text
            className="text-black-900_87 text-sm w-auto"
            size="txtPoppinsRegular14Black90087"
          >
            {props?.viewcart}
          </Text>
        ) : null}
        {!!props?.linesixteen ? (
          <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.checkout ? (
          <Text
            className="text-black-900 text-sm w-auto"
            size="txtPoppinsRegular14Black900"
          >
            {props?.checkout}
          </Text>
        ) : null}
      </div>
    </>
  );
};

CartRoadmap.defaultProps = { account: "Account", myaccount: "My Account" };

export default CartRoadmap;

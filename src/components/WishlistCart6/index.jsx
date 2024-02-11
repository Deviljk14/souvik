import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-[7px] items-center justify-end pt-3 rounded w-full">
          <div className="flex flex-col relative w-[92%]">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="bg-green-A400 flex flex-col items-center justify-center mb-2 px-3 py-1 rounded w-auto">
                  <Text
                    className="text-gray-50 text-xs w-auto"
                    size="txtPoppinsRegular12Gray50"
                  >
                    {props?.newbuttontext}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[34px]">
                  <Button
                    className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                    shape="circle"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_quickview.svg"
                      alt="quickview_Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[-24px] mx-auto p-[9px] w-[78%] z-[1]">
              <Img
                className="h-[152px] md:h-auto my-[5px] object-cover w-full"
                src="images/img_g922500x5001.png"
                alt="g922500x5001"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-end p-2 rounded-bl rounded-br w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_cart1_white_a700.svg"
                alt="cartOne_Two"
              />
              <Text
                className="text-white-A700 text-xs w-auto"
                size="txtPoppinsRegular12WhiteA700"
              >
                {props?.addtocarttext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.productname}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-red-600 w-auto"
              size="txtPoppinsMedium16Red600"
            >
              {props?.productprice}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Img
              className="h-5 w-[100px]"
              src="images/img_signal.svg"
              alt="signal_Two"
            />
            <Text
              className="text-black-900_87 text-sm w-[30px]"
              size="txtPoppinsSemiBold14"
            >
              {props?.signaltext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart6.defaultProps = {
  newbuttontext: "NEW",
  addtocarttext: "Add To Cart",
  productname: "HAVIT HV-G92 Gamepad",
  productprice: "$560",
  signaltext: "(65)",
};

export default WishlistCart6;

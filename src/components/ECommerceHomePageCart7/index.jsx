import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col p-3 relative rounded w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-[92%]">
            <div className="flex flex-row items-start justify-between w-full">
              <Button
                className="cursor-pointer font-poppins mb-[50px] min-w-[51px] text-center text-xs"
                shape="round"
                color="green_A400"
                size="sm"
                variant="fill"
              >
                {props?.new}
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Button
                  className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_wishlist.svg"
                    alt="heartsmall"
                  />
                </Button>
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
                    alt="quickview"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-auto mt-[-53px] mx-auto p-[5px] w-[71%] z-[1]">
            <Img
              className="h-[133px] md:h-auto my-[18px] object-cover w-full"
              src="images/img_newmercedesbe.png"
              alt="newmercedesbe"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.kidselectriccarOne}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-red-600 w-auto"
                size="txtPoppinsMedium16Red600"
              >
                {props?.pricetext}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Img
                className="h-5 w-[100px]"
                src="images/img_signal.svg"
                alt="signal"
              />
              <Text
                className="text-black-900_87 text-sm w-[30px]"
                size="txtPoppinsSemiBold14"
              >
                {props?.signaltext}
              </Text>
            </div>
          </div>
          <Img
            className="h-5 w-12"
            src="images/img_colourchnage.svg"
            alt="colourchnage"
          />
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart7.defaultProps = {
  new: "NEW",
  kidselectriccarOne: "Kids Electric Car",
  pricetext: "$960",
  signaltext: "(65)",
};

export default ECommerceHomePageCart7;

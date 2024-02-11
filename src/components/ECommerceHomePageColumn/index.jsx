import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col p-3 relative rounded w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-[92%]">
            <div className="flex flex-row items-start justify-between w-full">
              <Button
                className="cursor-pointer font-poppins mb-[50px] min-w-[55px] text-center text-xs"
                shape="round"
                color="red_600"
                size="sm"
                variant="fill"
              >
                {props?.p40}
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
          <div className="flex flex-col items-center justify-start mb-auto mt-[-53px] mx-auto p-[9px] w-[71%] z-[1]">
            <Img
              className="h-[152px] md:h-auto my-[5px] object-cover w-full"
              src="images/img_g922500x5001.png"
              alt="g922500x5001"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.havithvg92gamepone}
          </Text>
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Text
              className="text-base text-red-600 w-auto"
              size="txtPoppinsMedium16Red600"
            >
              {props?.price}
            </Text>
            <Text
              className="line-through text-base text-black-900_87 w-auto"
              size="txtPoppinsMedium16Black90087"
            >
              {props?.priceOne}
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
              {props?.eightyeight}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumn.defaultProps = {
  p40: "-40%",
  havithvg92gamepone: "HAVIT HV-G92 Gamepad",
  price: "$120",
  priceOne: "$160",
  eightyeight: "(88)",
};

export default ECommerceHomePageColumn;

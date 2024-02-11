import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart10 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 md:h-[180px] h-[250px] p-3 relative rounded w-full">
          <div className="absolute flex flex-col gap-2 items-center justify-start right-[5%] top-[5%] w-auto">
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
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto p-0.5 w-[71%]">
            <Img
              className="h-44 md:h-auto object-cover w-[98%]"
              src="images/img_698717z8a1x34.png"
              alt="698717z8a1xThirtyFour"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.quiltedsatinjacOne}
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
              <div className="flex flex-row items-start justify-start w-auto">
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal"
                />
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-5 rounded-[1px] w-5"
                  src="images/img_signal_orange_a200.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_starhalffilled.svg"
                  alt="starhalffilled"
                />
              </div>
              <Text
                className="text-black-900_87 text-sm w-[31px]"
                size="txtPoppinsSemiBold14"
              >
                {props?.fiftyfive}
              </Text>
            </div>
          </div>
          <Img
            className="h-5 w-12"
            src="images/img_user_red_600.svg"
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart10.defaultProps = {
  quiltedsatinjacOne: "Quilted Satin Jacket",
  pricetext: "$660",
  fiftyfive: "(55)",
};

export default ECommerceHomePageCart10;

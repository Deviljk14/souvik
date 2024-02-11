import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart6 = (props) => {
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
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto px-[9px] w-[71%]">
            <Img
              className="h-[180px] md:h-auto object-cover w-full"
              src="images/img_ideapadgaming3i01500x500.png"
              alt="ideapadgaming3i"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.asusfhdgaming}
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
                className="text-black-900_87 text-sm w-[38px]"
                size="txtPoppinsSemiBold14"
              >
                {props?.signaltext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart6.defaultProps = {
  asusfhdgaming: "ASUS FHD Gaming Laptop",
  pricetext: "$700",
  signaltext: "(325)",
};

export default ECommerceHomePageCart6;

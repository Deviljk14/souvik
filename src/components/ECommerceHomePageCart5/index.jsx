import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-3.5 justify-start pt-3 rounded w-full">
          <div className="md:h-[179px] h-[183px] ml-9 md:ml-[0] relative w-[83%]">
            <div className="absolute flex flex-col gap-2 items-center justify-start right-[0] top-[0] w-auto">
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
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-2 w-[86%]">
              <Img
                className="h-[163px] md:h-auto object-cover w-[84%]"
                src="images/img_eos250d03500x500.png"
                alt="eos250d03500xFifty"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start p-2 rounded-bl rounded-br w-full">
            <Text
              className="text-base text-white-A700"
              size="txtPoppinsMedium16WhiteA700"
            >
              {props?.addtocarttext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.canoneosdslrcamOne}
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
                src="images/img_television.svg"
                alt="television"
              />
              <Text
                className="text-black-900_87 text-sm w-[30px]"
                size="txtPoppinsSemiBold14"
              >
                {props?.discounttext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart5.defaultProps = {
  addtocarttext: "Add To Cart",
  canoneosdslrcamOne: "CANON EOS DSLR Camera",
  pricetext: "$360",
  discounttext: "(95)",
};

export default ECommerceHomePageCart5;

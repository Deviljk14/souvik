import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-[7px] justify-end pt-3 rounded w-full">
          <div className="md:h-[179px] h-[190px] ml-10 md:ml-[0] mr-3 relative w-[81%]">
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[34px]">
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
                  alt="quickview_One"
                />
              </Button>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] p-2.5 w-[88%]">
              <Img
                className="h-[129px] md:h-auto my-[15px] object-cover w-full"
                src="images/img_g27cq4500x5001.png"
                alt="g27cq4500x5001"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-end p-2 rounded-bl rounded-br w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_cart1_white_a700.svg"
                alt="cartOne_One"
              />
              <Text
                className="text-white-A700 text-xs w-auto"
                size="txtPoppinsRegular12WhiteA700"
              >
                {props?.addtocartOne}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.ipslcdgamingmonOne}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-red-600 w-auto"
              size="txtPoppinsMedium16Red600"
            >
              {props?.priceTwo}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Img
              className="h-5 w-[100px]"
              src="images/img_signal.svg"
              alt="signal_One"
            />
            <Text
              className="text-black-900_87 text-sm w-[30px]"
              size="txtPoppinsSemiBold14"
            >
              {props?.sixtyfiveOne}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart5.defaultProps = {
  addtocartOne: "Add To Cart",
  ipslcdgamingmonOne: "IPS LCD Gaming Monitor",
  priceTwo: "$1160",
  sixtyfiveOne: "(65)",
};

export default WishlistCart5;

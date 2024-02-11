import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-[7px] justify-end pt-3 rounded w-full">
          <div className="md:h-[180px] h-[190px] ml-10 md:ml-[0] mr-3 relative w-[81%]">
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
                  src="images/img_thumbsup.svg"
                  alt="thumbsup_Three"
                />
              </Button>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] p-0.5 w-[88%]">
              <Img
                className="h-44 md:h-auto object-cover w-[98%]"
                src="images/img_698717z8a1x34.png"
                alt="698717z8a1xThirtyFour"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start p-2 rounded-bl rounded-br w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_cart1_white_a700.svg"
                alt="cartOne_Three"
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
            {props?.producttitle}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-red-600 w-auto"
              size="txtPoppinsMedium16Red600"
            >
              {props?.productprice}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart3.defaultProps = {
  addtocarttext: "Add To Cart",
  producttitle: "Quilted Satin Jacket",
  productprice: "$750",
};

export default WishlistCart3;

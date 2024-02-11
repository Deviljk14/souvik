import React from "react";

import { Button, Img, Text } from "components";

const AccountDropdownWithAccountColumncurologyj7pkvqr = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-row items-center justify-end p-3 rounded w-full">
          <Img
            className="h-[159px] md:h-auto my-[33px] object-cover w-[70%]"
            src="images/img_curologyj7pkvqrtusmunsplash.png"
            alt="curologyj7pkvqr"
          />
          <div className="flex flex-col gap-2 items-start justify-start ml-[3px] w-auto">
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
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.producttitle}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
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
                src="images/img_television.svg"
                alt="television"
              />
              <Text
                className="text-black-900_87 text-sm w-9"
                size="txtPoppinsSemiBold14"
              >
                {props?.televisioncount}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountDropdownWithAccountColumncurologyj7pkvqr.defaultProps = {
  producttitle: "Curology Product Set ",
  productprice: "$500",
  televisioncount: "(145)",
};

export default AccountDropdownWithAccountColumncurologyj7pkvqr;

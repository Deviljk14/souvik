import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-3.5 items-center justify-start pt-3 rounded w-full">
          <div className="flex flex-col relative w-[92%]">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Button
                  className="cursor-pointer font-poppins mb-[50px] min-w-[55px] text-center text-xs"
                  shape="round"
                  color="red_600"
                  size="sm"
                  variant="fill"
                >
                  {props?.p35}
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
            <div className="flex flex-col items-center justify-end mb-auto mt-[-73px] mx-auto py-[39px] w-[78%] z-[1]">
              <Img
                className="h-[101px] md:h-auto object-cover w-full"
                src="images/img_ak90001500x500.png"
                alt="ak90001500x500"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start p-2 rounded-bl rounded-br w-full">
            <Text
              className="text-base text-white-A700"
              size="txtPoppinsMedium16WhiteA700"
            >
              {props?.addtocart}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.ak900wiredkeyboone}
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
              src="images/img_television.svg"
              alt="television"
            />
            <Text
              className="text-black-900_87 text-sm w-[29px]"
              size="txtPoppinsSemiBold14"
            >
              {props?.seventyfive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumnOne.defaultProps = {
  p35: "-35%",
  addtocart: "Add To Cart",
  ak900wiredkeyboone: "AK-900 Wired Keyboard",
  price: "$960",
  priceOne: "$1160",
  seventyfive: "(75)",
};

export default ECommerceHomePageColumnOne;

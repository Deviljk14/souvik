import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col gap-3.5 items-center justify-start pt-3 rounded w-full">
          <div className="flex flex-col relative w-[92%]">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Button
                  className="cursor-pointer font-poppins mb-2 min-w-[55px] text-center text-xs"
                  shape="round"
                  color="red_600"
                  size="sm"
                  variant="fill"
                >
                  {props?.p35}
                </Button>
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
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-auto mt-[-31px] mx-auto p-1.5 w-[78%] z-[1]">
              <Img
                className="h-[129px] md:h-auto my-[19px] object-cover w-full"
                src="images/img_5479539c2st87.png"
                alt="5479539c2stEightySeven"
              />
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start p-2 rounded-bl rounded-br w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_cart1_white_a700.svg"
                alt="cartOne"
              />
              <Text
                className="text-white-A700 text-xs w-auto"
                size="txtPoppinsRegular12WhiteA700"
              >
                {props?.addtocart}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.guccidufflebag}
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
        </div>
      </div>
    </>
  );
};

WishlistCart.defaultProps = {
  p35: "-35%",
  addtocart: "Add To Cart",
  guccidufflebag: "Gucci duffle bag",
  price: "$960",
  priceOne: "$1160",
};

export default WishlistCart;

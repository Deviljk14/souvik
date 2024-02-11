import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 md:h-[178px] h-[250px] p-3 relative rounded w-full">
          <div className="absolute flex flex-col gap-2 items-center justify-start right-[5%] top-[5%] w-auto">
            {!!props?.hearticon ? (
              <Button
                className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img className="h-6" alt="heartsmall" src={props?.hearticon} />
              </Button>
            ) : null}
            {!!props?.quickviewicon ? (
              <Button
                className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-6"
                  alt="quickview"
                  src={props?.quickviewicon}
                />
              </Button>
            ) : null}
          </div>
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[71%]">
            {!!props?.productimage ? (
              <Img
                className="h-44 md:h-auto mt-0.5 object-cover w-[74%]"
                alt="sammoghadamkh"
                src={props?.productimage}
              />
            ) : null}
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
      </div>
    </>
  );
};

ECommerceHomePageCart3.defaultProps = {
  producttitle: "Small BookSelf",
  productprice: "$360",
  signaltext: "(65)",
};

export default ECommerceHomePageCart3;

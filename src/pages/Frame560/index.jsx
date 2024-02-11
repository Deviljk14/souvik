import React from "react";

import { Img, Line, Text } from "components";

const Frame560Page = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col items-start justify-start mx-auto p-4 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1006px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-5 items-start justify-start">
            <div className="flex flex-row font-poppins gap-6 items-center justify-start w-auto">
              <Img
                className="h-[49px] md:h-auto object-cover w-10"
                src="images/img_1200pxapplegraylogo.png"
                alt="1200pxapplegray"
              />
              <Text
                className="text-base text-center text-gray-50 w-[126px]"
                size="txtPoppinsRegular16Gray50"
              >
                iPhone 14 Series
              </Text>
            </div>
            <Text
              className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[1.92px] w-[74%] sm:w-full"
              size="txtInterSemiBold48"
            >
              Up to 10% off Voucher
            </Text>
            <div className="flex flex-row font-poppins gap-2 items-center justify-start md:ml-[0] ml-[3px] w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-base text-center text-gray-50 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Shop Now
                </Text>
                <Line className="bg-gray-50 h-px w-full" />
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright_gray_50.svg"
                alt="arrowright"
              />
            </div>
            <Img
              className="h-3.5 md:ml-[0] ml-[289px] w-[110px]"
              src="images/img_frame883.svg"
              alt="frame883"
            />
          </div>
          <Img
            className="h-[352px] md:h-auto object-cover"
            src="images/img_heroendframe.png"
            alt="heroendframe"
          />
        </div>
      </div>
    </>
  );
};

export default Frame560Page;

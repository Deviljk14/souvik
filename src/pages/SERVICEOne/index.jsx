import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer2 from "components/Footer2";

const SERVICEOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
        <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-[148px] items-center justify-start max-w-[1179px] mt-10 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[190px] items-start justify-between w-auto md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                size="txtInterBold24"
                onClick={() => navigate("/ecommercehomepage")}
              >
                STARTUP IDEA
              </Text>
            </div>
            <div className="flex flex-row font-poppins gap-12 items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="common-pointer text-base text-black-900 text-center w-auto"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/ecommercehomepage")}
                >
                  Home
                </Text>
                <Img
                  className="h-px w-12"
                  src="images/img_underline.svg"
                  alt="underline"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="common-pointer text-base text-black-900 text-center w-auto"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Text>
                <Img
                  className="h-px w-12"
                  src="images/img_underline.svg"
                  alt="underline"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="common-pointer text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/servicethree")}
                >
                  Services
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="common-pointer text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/about")}
                >
                  About
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer min-w-[61px] text-base text-black-900 text-center"
                onClick={() => navigate("/signup")}
                size="xs"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="flex flex-row font-poppins gap-6 items-center justify-start w-auto">
            <ECommerceHomePageColumnwhatareyoulookiOne className="bg-gray-100 flex flex-col gap-2.5 items-center justify-center pl-5 pr-3 py-[7px] rounded w-auto" />
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_wishlist.svg"
                alt="wishlist"
              />
              <div className="flex flex-col h-8 items-center justify-start w-8">
                <Img
                  className="common-pointer h-8 w-8"
                  src="images/img_cart1.svg"
                  alt="cartOne"
                  onClick={() => navigate("/cart")}
                />
              </div>
            </div>
          </div>
        </div>
        <Img className="h-px mt-4" src="images/img_line3.svg" alt="lineThree" />
        <div className="flex flex-col items-end mt-10 md:px-10 sm:px-5 px-[65px] w-full">
          <div className="bg-black-900 flex flex-col items-start justify-start p-4 md:px-5 w-[96%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-12 md:ml-[0] w-[83%] md:w-full">
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
        </div>
        <div className="font-poppins sm:h-[328px] h-[403px] md:h-[564px] max-w-[1202px] mt-[59px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[60px] inset-x-[0] items-start justify-start max-w-[1170px] mx-auto top-[0] w-full">
            <div className="flex flex-col items-end justify-start w-auto">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-row font-poppins gap-4 items-center justify-start w-auto">
                  <div className="bg-red-600 h-10 rounded w-[16%]"></div>
                  <Text
                    className="text-base text-red-600 w-auto"
                    size="txtPoppinsSemiBold16"
                  >
                    Categories
                  </Text>
                </div>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                  size="txtInterSemiBold36"
                >
                  Packers & Movers{" "}
                </Text>
              </div>
            </div>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtPoppinsSemiBold14Black900"
            >
              (
            </Text>
          </div>
          <div className="absolute bg-white-A700 border border-black-900_7f border-solid bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-4 rounded-[5px] shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[74%] md:w-full">
              <Img
                className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[33%] md:w-full"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty"
              />
              <Img
                className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
                src="images/img_placemarker.png"
                alt="placemarker"
              />
              <div className="flex flex-col justify-start ml-2.5 md:ml-[0] w-3/5 md:w-full">
                <Text
                  className="md:ml-[0] ml-[47px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] mt-[9px] w-[56%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsMedium20Black900"
                  >
                    Nigadi, Pune
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                    <Img
                      className="h-6 mt-[5px] w-6"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Img
                      className="h-6 mt-[5px] w-6"
                      src="images/img_star.svg"
                      alt="star_One"
                    />
                    <Img
                      className="h-6 mt-[5px] w-6"
                      src="images/img_star.svg"
                      alt="star_Two"
                    />
                    <Img
                      className="h-6 my-0.5 w-6"
                      src="images/img_star.svg"
                      alt="star_Three"
                    />
                    <Img
                      className="h-6 mb-1 w-6"
                      src="images/img_star.svg"
                      alt="star_Four"
                    />
                    <Text
                      className="mb-[5px] text-base text-black-900"
                      size="txtPoppinsSemiBold16Black900"
                    >
                      ( 195 Rating)
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start mt-[34px] w-[88%] md:w-full">
                  <Input
                    name="groupFiftyOne"
                    placeholder="Show Number"
                    className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                    type="number"
                    shape="round"
                    color="orange_A200"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="common-pointer border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                    onClick={() => navigate("/servicetwo")}
                    shape="round"
                    color="blue_A700"
                    size="md"
                    variant="fill"
                  >
                    Send Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[26px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleTwentyFour"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_One"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Five"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Six"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Seven"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_Eight"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_Nine"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupFortyEight"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[26px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleTwentyEight"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Two"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Ten"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Eleven"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Twelve"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_Thirteen"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_Fourteen"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupFortyFive"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[26px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleThirtyTwo"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Three"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Fifteen"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Sixteen"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Seventeen"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_Eighteen"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_Nineteen"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupFortyTwo"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[34px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleThirtySix"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Four"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Twenty"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyOne"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyTwo"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyThree"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyFour"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupThirtyNine"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[34px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleForty"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Five"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyFive"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentySix"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentySeven"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyEight"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_TwentyNine"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupThirtySix"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[17px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleFortyFour"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Six"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Thirty"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyOne"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyTwo"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyThree"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyFour"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupThirtyThree"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[17px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleFortyEight"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Seven"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyFive"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtySix"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtySeven"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyEight"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_ThirtyNine"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupThirty"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[25px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleFiftyTwo"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Eight"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_Forty"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortyOne"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortyTwo"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_FortyThree"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortyFour"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupTwentySeven"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-col font-poppins items-start justify-start max-w-[1202px] mt-[34px] mx-auto p-4 md:px-5 rounded-[5px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[13px] ml-3.5 md:ml-[0] w-[72%] md:w-full">
            <Img
              className="h-[211px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-sm w-[34%] md:w-full"
              src="images/img_rectangle20.png"
              alt="rectangleFiftySix"
            />
            <Img
              className="h-6 md:h-auto ml-7 md:ml-[0] md:mt-0 mt-[46px] object-cover w-6"
              src="images/img_placemarker.png"
              alt="placemarker_Nine"
            />
            <div className="flex flex-col gap-[34px] justify-start ml-2.5 md:ml-[0] w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[97%] md:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Southern Express Packers And Movers
                </Text>
                <Text
                  className="mt-[9px] text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
                <div className="flex flex-row items-start justify-start mt-0.5 w-[62%] md:w-full">
                  <Img
                    className="h-6 mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortyFive"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortySix"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-[5px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortySeven"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star.svg"
                    alt="star_FortyEight"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star.svg"
                    alt="star_FortyNine"
                  />
                  <Text
                    className="mb-[5px] ml-[23px] text-base text-black-900"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    ( 195 Rating)
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                <Input
                  name="groupTwentyFour"
                  placeholder="Show Number"
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] sm:w-full"
                  type="number"
                  shape="round"
                  color="orange_A200"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer2 className="bg-black-900 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
        {/* <div className="flex flex-col font-poppins md:gap-10 gap-[355px] items-end mt-[1118px] md:px-10 sm:px-5 px-[89px] w-full">
          <Button
            className="flex h-[46px] items-center justify-center rotate-[90deg] w-[46px]"
            shape="circle"
            color="gray_100"
            size="md"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_arrowright.svg"
              alt="arrowright_One"
            />
          </Button>
          <Text
            className="mr-[520px] text-base text-gray-50"
            size="txtPoppinsRegular16Gray50"
          >
            Become a Seller{" "}
          </Text>
        </div> */}
      </div>
    </>
  );
};

export default SERVICEOnePage;

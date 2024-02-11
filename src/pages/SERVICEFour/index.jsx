import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer3 from "components/Footer3";

const SERVICEFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
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
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
        </div>
        <div className="flex flex-col font-inter items-end mt-10 md:px-10 sm:px-5 px-[65px] w-full">
          <div className="bg-black-900 h-96 md:h-[352px] p-4 md:px-5 relative w-[96%] md:w-full">
            <Img
              className="absolute h-[352px] inset-y-[0] my-auto object-cover right-[14%] w-2/5"
              src="images/img_heroendframe.png"
              alt="heroendframe"
            />
            <Text
              className="absolute leading-[60.00px] left-[5%] text-5xl sm:text-[38px] md:text-[44px] text-gray-50 top-[23%] tracking-[1.92px] w-[44%] sm:w-full"
              size="txtInterSemiBold48"
            >
              Sell Your Product Easily with STARTUP IDEA{" "}
            </Text>
            <div className="absolute bottom-[23%] flex flex-row font-poppins gap-2 items-center justify-center left-[5%] w-auto">
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
              className="absolute bottom-[13%] h-3.5 left-[28%] w-[110px]"
              src="images/img_frame883.svg"
              alt="frame883"
            />
          </div>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[68px] items-center mt-[91px] sm:pl-5 pl-[27px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
            size="txtPoppinsBold36"
          >
            <>Seller&#39;s Registration Form</>
          </Text>
          <div className="bg-gray-50_01 flex flex-col font-nunito items-center justify-end max-w-[1212px] mx-auto p-[43px] md:px-5 rounded-[10px] shadow-bs3 w-full">
            <div className="flex flex-col items-start justify-start mt-4 w-[97%] md:w-full">
              <Text
                className="text-deep_orange-600 text-xl"
                size="txtNunitoBold20"
              >
                Personal Information
              </Text>
              <div className="flex flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-10 w-[62%] md:w-full">
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  First name
                </Text>
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Last name
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-3.5 w-full">
                <Input
                  name="groupSeventy"
                  placeholder="John"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="groupSixtyFour"
                  placeholder="Doe"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-10 w-[61%] md:w-full">
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Business /Startup Name{" "}
                </Text>
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Address
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[13px] w-full">
                <Input
                  name="groupSixtyNine"
                  placeholder="Esparse Matrix SOlutions Pvt Ltd"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="groupSixtyFive"
                  placeholder="St James street New jersey"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-10 w-[81%] md:w-full">
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  City
                </Text>
                <Text
                  className="md:ml-[0] ml-[342px] text-gray-900 text-lg"
                  size="txtNunitoBold18"
                >
                  State
                </Text>
                <Text
                  className="md:ml-[0] ml-[371px] text-gray-900 text-lg"
                  size="txtNunitoBold18"
                >
                  Zip Code
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[25px] w-full">
                <Input
                  name="groupSixtyEight"
                  placeholder="janes Inn"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="groupSixtySeven"
                  placeholder="new Jersey"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="zipcode_One"
                  placeholder="123789"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-900 text-left text-lg w-full"
                  wrapClassName="border border-gray-400 border-solid sm:flex-1 rounded-lg sm:w-full"
                  color="gray_200"
                  size="lg"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[45px] w-3/5 md:w-full">
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Mobile Number{" "}
                </Text>
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Email Id
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-full">
                <Input
                  name="frameSixtyFive"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-400 border-solid flex sm:flex-1 h-[49px] rounded-lg sm:w-full"
                  color="gray_200"
                  variant="fill"
                ></Input>
                <Input
                  name="frameSeventyThree"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-400 border-solid flex sm:flex-1 h-[49px] rounded-lg sm:w-full"
                  color="gray_200"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[5px] mt-6 w-[89%] md:w-full">
                <div className="flex flex-col gap-[50px] items-start justify-start md:mt-0 mt-0.5 w-[26%] md:w-full">
                  <Text
                    className="text-deep_orange-600 text-xl"
                    size="txtNunitoBold20"
                  >
                    Business Timings
                  </Text>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-[33px]"
                      src="images/img_checkboxoutline.svg"
                      alt="checkboxoutline"
                    />
                    <Text
                      className="ml-4 mt-[3px] text-black-900 text-lg"
                      size="txtNunitoBold18Black900"
                    >
                      Mon
                    </Text>
                    <Img
                      className="h-[33px] ml-[66px]"
                      src="images/img_checkboxoutline.svg"
                      alt="checkboxoutline_One"
                    />
                    <Text
                      className="ml-[15px] mt-[3px] text-black-900 text-lg"
                      size="txtNunitoBold18Black900"
                    >
                      Tue
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[33px] md:ml-[0] ml-[70px] md:mt-0 mt-[81px]"
                  src="images/img_checkboxoutline.svg"
                  alt="checkboxoutline_Two"
                />
                <Text
                  className="mb-1 ml-4 md:ml-[0] md:mt-0 mt-[84px] text-black-900 text-lg"
                  size="txtNunitoBold18Black900"
                >
                  Wed
                </Text>
                <div className="md:h-24 h-[114px] md:ml-[0] ml-[49px] relative w-[13%] md:w-full">
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[77%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                      <Img
                        className="h-[33px]"
                        src="images/img_checkboxoutline.svg"
                        alt="checkboxoutline_Three"
                      />
                      <Text
                        className="mt-[3px] text-black-900 text-lg"
                        size="txtNunitoBold18Black900"
                      >
                        Thur
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-24 right-[0] top-[0] w-24"
                    src="images/img_cropsquare.svg"
                    alt="cropsquare"
                  />
                </div>
                <Img
                  className="h-[33px] md:ml-[0] ml-[19px] md:mt-0 mt-[81px]"
                  src="images/img_checkboxoutline.svg"
                  alt="checkboxoutline_Four"
                />
                <Text
                  className="mb-1 ml-4 md:ml-[0] md:mt-0 mt-[84px] text-black-900 text-lg"
                  size="txtNunitoBold18Black900"
                >
                  Fri
                </Text>
                <Img
                  className="h-[33px] md:ml-[0] ml-[57px] md:mt-0 mt-[81px]"
                  src="images/img_checkboxoutline.svg"
                  alt="checkboxoutline_Five"
                />
                <Text
                  className="mb-1 ml-4 md:ml-[0] md:mt-0 mt-[84px] text-black-900 text-lg"
                  size="txtNunitoBold18Black900"
                >
                  Sat
                </Text>
                <Img
                  className="h-[33px] md:ml-[0] ml-[60px] md:mt-0 mt-[81px]"
                  src="images/img_checkboxoutline.svg"
                  alt="checkboxoutline_Six"
                />
                <Text
                  className="mb-1 ml-4 md:ml-[0] md:mt-0 mt-[84px] text-black-900 text-lg"
                  size="txtNunitoBold18Black900"
                >
                  Sun
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[5px] mt-[21px] w-[61%] md:w-full">
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Opens At
                </Text>
                <Text className="text-gray-900 text-lg" size="txtNunitoBold18">
                  Closes At
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[5px] w-full">
                <Input
                  name="frameSeventyFive"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-400 border-solid flex sm:flex-1 h-[49px] rounded-lg sm:w-full"
                  color="gray_200"
                  variant="fill"
                ></Input>
                <Input
                  name="frameSeventySix"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-400 border-solid flex sm:flex-1 h-[49px] rounded-lg sm:w-full"
                  color="gray_200"
                  variant="fill"
                ></Input>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-[22px] text-deep_orange-600 text-xl"
                size="txtNunitoBold20"
              >
                Years Of Establishment
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[5px] mt-[7px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-2.5 w-[47%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtNunitoSemiBold18"
                  >
                    Month
                  </Text>
                  <div className="h-[57px] relative w-full">
                    <div className="absolute bg-gray-200 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-start m-auto p-3 rounded-lg w-[498px] sm:w-full">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtNunitoMedium18"
                      >
                        Select Month{" "}
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[57px] inset-y-[0] my-auto right-[2%]"
                      src="images/img_evaarrowiosbackfill.svg"
                      alt="evaarrowiosback"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[7px] mt-[13px] text-deep_orange-600 text-xl"
                    size="txtNunitoBold20"
                  >
                    Business Category
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-1 text-gray-800 text-lg"
                    size="txtNunitoSemiBold18"
                  >
                    Select Business Category{" "}
                  </Text>
                  <div className="h-[57px] md:h-[70px] mt-[13px] relative w-full">
                    <div className="absolute bg-gray-200 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-end m-auto p-3 rounded-lg w-[498px] sm:w-full">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtNunitoMedium18"
                      >
                        Select Business Category
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[57px] inset-y-[0] my-auto right-[2%]"
                      src="images/img_evaarrowiosbackfill.svg"
                      alt="evaarrowiosback_One"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[9px] mt-5 text-deep_orange-600 text-xl"
                    size="txtNunitoBold20"
                  >
                    Business Website{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-1 text-gray-800 text-lg"
                    size="txtNunitoSemiBold18"
                  >
                    Add Business Website{" "}
                  </Text>
                  <Input
                    name="frame562"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-400 border-solid flex h-[49px] ml-0.5 md:ml-[0] mt-[18px] rounded-lg w-full"
                    color="gray_200"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtNunitoSemiBold18"
                  >
                    Year
                  </Text>
                  <div className="h-[57px] relative w-full">
                    <div className="absolute bg-gray-200 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-start m-auto p-3 rounded-lg w-[498px] sm:w-full">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtNunitoMedium18"
                      >
                        Select Year
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[57px] inset-y-[0] my-auto right-[0]"
                      src="images/img_evaarrowiosbackfill.svg"
                      alt="evaarrowiosback_Two"
                    />
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-semibold h-[59px] leading-[normal] md:ml-[0] ml-[163px] mt-[316px] rounded-[10px] text-center text-lg w-[326px]"
                    onClick={() => navigate("/service")}
                    color="purple_A700"
                    size="lg"
                    variant="fill"
                  >
                    Next session
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer3 className="bg-black-900 flex font-poppins items-center justify-center md:px-5 w-full" />
        </div>
        {/* <div className="flex flex-col font-poppins md:gap-10 gap-[355px] items-end mt-[2666px] md:px-10 sm:px-5 px-[89px] w-full">
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

export default SERVICEFourPage;

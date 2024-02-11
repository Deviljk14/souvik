import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import ECommerceHomePageCart from "components/ECommerceHomePageCart";
import ECommerceHomePageCart1 from "components/ECommerceHomePageCart1";
import ECommerceHomePageCart2 from "components/ECommerceHomePageCart2";
import ECommerceHomePageCart3 from "components/ECommerceHomePageCart3";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageFlashselltimer from "components/ECommerceHomePageFlashselltimer";
import ECommerceHomePageFlashselltimer1 from "components/ECommerceHomePageFlashselltimer1";
import ECommerceHomePageFlashselltimer2 from "components/ECommerceHomePageFlashselltimer2";
import ECommerceHomePageFlashselltimer3 from "components/ECommerceHomePageFlashselltimer3";
import ECommerceHomePageListicondelivery from "components/ECommerceHomePageListicondelivery";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer2 from "components/Footer2";

const SERVICEThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <ECommerceHomePageTopheader className="bg-black-900 flex flex-col sm:h-2.5 items-end justify-start sm:min-h-[10px] sm:opacity-100 p-3 sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] w-full" />
        <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-[148px] items-center justify-start max-w-[1179px] mt-10 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[190px] items-start justify-between w-auto md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                size="txtInterBold24"
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
            <div
              className="common-pointer flex flex-row gap-4 items-center justify-center w-auto"
              onClick={() => navigate("/wishlist")}
            >
              <Img
                className="common-pointer h-8 w-8"
                src="images/img_wishlist.svg"
                alt="wishlist"
                onClick={() => navigate("/wishlist")}
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
        <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[59px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[691px] items-end justify-between w-auto md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
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
                Browse By Category
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="flex h-[46px] items-center justify-center w-[46px]"
                shape="circle"
                color="gray_100"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="flex h-[46px] items-center justify-center w-[46px]"
                shape="circle"
                color="gray_100"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowright_black_900.svg"
                  alt="arrowright_One"
                />
              </Button>
            </div>
          </div>
          <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
            <div className="border border-black-900_4c border-solid flex flex-col gap-[18px] items-center justify-end p-[21px] sm:px-5 rounded w-full">
              <Img
                className="h-[34px] md:h-auto mt-[25px] object-cover w-[68px] sm:w-full"
                src="images/img_image64.png"
                alt="imageSixtyFour"
              />
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                Repairing
              </Text>
            </div>
            <div className="border border-black-900_4c border-solid flex flex-col gap-[11px] items-center justify-end p-[21px] sm:px-5 rounded w-full">
              <Img
                className="h-12 md:h-auto mt-[18px] object-cover w-[45%] sm:w-full"
                src="images/img_image65.png"
                alt="imageSixtyFive"
              />
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                Painting{" "}
              </Text>
            </div>
            <div className="border border-black-900_4c border-solid flex flex-col gap-[17px] items-center justify-end p-6 sm:px-5 rounded w-full">
              <Img
                className="h-[45px] md:h-auto mt-[9px] object-cover w-[58px] sm:w-full"
                src="images/img_image66.png"
                alt="imageSixtySix"
              />
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                Electrician{" "}
              </Text>
            </div>
            <div
              className="common-pointer bg-red-600 flex flex-col gap-[21px] items-center justify-end p-[23px] sm:px-5 rounded shadow-bs1 w-full"
              onClick={() => navigate("/serviceone")}
            >
              <Img
                className="h-[50px] md:h-auto mt-0.5 object-cover w-[53px] sm:w-full"
                src="images/img_image67.png"
                alt="imageSixtySeven"
              />
              <Text
                className="text-base text-center text-gray-50"
                size="txtPoppinsRegular16Gray50"
              >
                Pest Control
              </Text>
            </div>
            <div className="border border-black-900_4c border-solid flex flex-col gap-[11px] items-center justify-start p-[15px] rounded w-full">
              <Img
                className="h-[73px] md:h-auto object-cover w-[50px] sm:w-full"
                src="images/img_image68.png"
                alt="imageSixtyEight"
              />
              <Text
                className="mb-1.5 text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                Makeup
              </Text>
            </div>
            <div className="border border-black-900_4c border-solid flex flex-col gap-[23px] items-start justify-end p-[21px] sm:px-5 rounded w-full">
              <Img
                className="h-11 md:h-auto md:ml-[0] ml-[31px] mt-2.5 object-cover w-[51px] sm:w-full"
                src="images/img_image69.png"
                alt="imageSixtyNine"
              />
              <Text
                className="md:ml-[0] ml-[31px] text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                Massage
              </Text>
            </div>
          </div>
        </div>
        <div className="flex font-poppins md:h-[1204px] sm:h-[1280px] h-[518px] justify-end max-w-[1170px] mt-[50px] mx-auto md:px-5 relative w-full">
          <Line className="bg-black-900_75 h-px mb-[170px] mt-auto mx-auto rotate-[-180deg] w-full" />
          <div className="absolute flex flex-col md:gap-10 gap-[60px] h-full inset-[0] items-start justify-start m-auto w-auto">
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[611px] items-end justify-between w-auto md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-row font-poppins gap-4 items-center justify-start w-auto">
                  <div className="bg-red-600 h-10 rounded w-[16%]"></div>
                  <Text
                    className="text-base text-red-600 w-auto"
                    size="txtPoppinsSemiBold16"
                  >
                    This Month
                  </Text>
                </div>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                  size="txtInterSemiBold36"
                >
                  Repairing Sevice{" "}
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[159px] text-base text-center"
                shape="round"
                color="red_600"
                size="lg"
                variant="fill"
              >
                View All
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
              <div className="relative w-[24%] md:w-full">
                <ECommerceHomePageCart
                  className="flex flex-col gap-4 items-start justify-start mt-auto mx-auto w-auto"
                  hearticon="images/img_wishlist.svg"
                  quickviewicon="images/img_quickview.svg"
                  productimage="images/img_672462zah9d56.png"
                  productname="Ac Service &  Repair  "
                />
                <Img
                  className="absolute h-[315px] inset-x-[0] mx-auto object-cover top-[0] w-[270px]"
                  src="images/img_image70.png"
                  alt="imageSeventy"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <ECommerceHomePageCart1
                  className="flex flex-col gap-4 items-start justify-start w-auto"
                  productname="Water Purifier Repair"
                />
                <div className="relative w-full">
                  <ECommerceHomePageCart2
                    className="flex flex-col gap-4 items-start justify-start ml-auto my-auto w-auto"
                    productname="Washing Machine Repair "
                  />
                  <Img
                    className="absolute h-[181px] inset-x-[0] mx-auto object-cover top-[5%] w-[300px]"
                    src="images/img_image72.png"
                    alt="imageSeventyTwo"
                  />
                </div>
              </List>
              <ECommerceHomePageCart3
                className="flex flex-col gap-4 items-start justify-start w-auto"
                producttitle="Chimney Repair"
              />
            </div>
          </div>
        </div>
        <div className="font-poppins md:h-[1193px] h-[466px] sm:h-[661px] max-w-[1212px] mt-[54px] mx-auto md:px-5 relative w-full">
          <Line className="bg-black-900_75 h-px m-auto rotate-[-180deg] w-[97%]" />
          <div className="absolute flex flex-col md:gap-10 gap-[60px] h-full inset-[0] items-start justify-start m-auto w-auto">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[611px] items-end justify-between w-auto md:w-full">
              <div className="flex flex-col font-inter items-start justify-start w-auto">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                  size="txtInterSemiBold36"
                >
                  {" "}
                  Service List{" "}
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium font-poppins min-w-[159px] text-base text-center"
                onClick={() => navigate("/productdetailspage")}
                shape="round"
                color="red_600"
                size="lg"
                variant="fill"
              >
                View All
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
              <div className="relative w-[23%] md:w-full">
                <ECommerceHomePageCart
                  className="flex flex-col gap-4 items-start justify-start mt-auto mx-auto w-auto"
                  productname="Water Purifier Sales "
                />
                <Img
                  className="absolute h-[315px] inset-x-[0] mx-auto object-cover top-[0] w-[270px]"
                  src="images/img_image70_315x270.png"
                  alt="imageSeventy_One"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[48%] md:w-full"
                orientation="horizontal"
              >
                <ECommerceHomePageCart1
                  className="flex flex-col gap-4 items-start justify-start w-auto"
                  productname="Income Tax Return Service"
                />
                <ECommerceHomePageCart2
                  className="flex flex-col gap-4 items-start justify-start w-auto"
                  productname="Travels &Tourism Services"
                />
              </List>
              <div className="relative w-[26%] md:w-full">
                <ECommerceHomePageCart3
                  className="flex flex-col gap-4 items-start justify-start mt-auto w-auto"
                  producttitle="Travels &Tourism Services"
                />
                <Img
                  className="absolute h-[315px] inset-x-[0] mx-auto object-cover top-[0] w-[312px]"
                  src="images/img_image73_315x312.png"
                  alt="imageSeventyThree_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1170px] mt-[74px] mx-auto px-11 md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start w-[99%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[42%] md:w-full">
              <Text
                className="text-base text-green-A400"
                size="txtPoppinsSemiBold16GreenA400"
              >
                Categories
              </Text>
              <Text
                className="leading-[60.00px] mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-gray-50 tracking-[1.92px] w-full"
                size="txtInterSemiBold48"
              >
                Enhance Your Music Experience
              </Text>
              <List
                className="sm:flex-col flex-row font-poppins gap-6 grid grid-cols-4 justify-start mt-8 w-auto"
                orientation="horizontal"
              >
                <ECommerceHomePageFlashselltimer className="bg-white-A700 flex flex-col h-[62px] items-center justify-start p-[11px] rounded-[50%] w-full" />
                <ECommerceHomePageFlashselltimer1 className="bg-white-A700 flex flex-col h-[62px] items-center justify-start p-[11px] rounded-[50%] w-full" />
                <ECommerceHomePageFlashselltimer2 className="bg-white-A700 flex flex-col h-[62px] items-center justify-start p-[9px] rounded-[50%] w-full" />
                <ECommerceHomePageFlashselltimer3 className="bg-white-A700 flex flex-col h-[62px] items-center justify-start p-[7px] rounded-[50%] w-full" />
              </List>
              <Button
                className="cursor-pointer font-medium font-poppins min-w-[171px] mt-10 text-base text-center"
                shape="round"
                color="green_A400"
                size="lg"
                variant="fill"
              >
                Buy Now!
              </Button>
            </div>
            <div className="h-[500px] relative w-[57%] md:w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-100_75 blur-[200.00px] h-[500px] inset-y-[0] left-[4%] my-auto rounded-[252px] w-[84%]"></div>
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 w-full">
                <Img
                  className="h-[330px] md:h-auto my-[29px] object-cover w-full"
                  src="images/img_jblboombox2hero020x1.png"
                  alt="jblboombox2hero"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[105px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-auto">
            <div className="flex flex-row font-poppins gap-4 items-center justify-start w-auto">
              <div className="bg-red-600 h-10 rounded w-[19%]"></div>
              <Text
                className="text-base text-red-600 w-auto"
                size="txtPoppinsSemiBold16"
              >
                Featured
              </Text>
            </div>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
              size="txtInterSemiBold36"
            >
              New Arrival
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
            <div className="bg-black-900 flex md:h-[511px] h-[600px] justify-end pt-[29px] sm:px-5 px-[29px] relative rounded w-[49%] md:w-full">
              <Img
                className="sm:h-[200px] h-[511px] mt-auto mx-auto object-cover sm:p-[] sm:pb-20 sm:pt-[] sm:w-[200px] w-[511px]"
                src="images/img_ps5slimgoedko.png"
                alt="ps5slimgoedko"
              />
              <div className="absolute bottom-[5%] flex flex-col gap-4 items-start justify-start left-[6%] w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px] w-auto"
                    size="txtInterSemiBold24"
                  >
                    PlayStation 5
                  </Text>
                  <Text
                    className="leading-[21.00px] max-w-[242px] md:max-w-full text-gray-50 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Black and White version of the PS5 coming out on sale.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    Shop Now
                  </Text>
                  <Img
                    className="h-px w-[81px]"
                    src="images/img_underline_white_a700.svg"
                    alt="underline_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
              <div className="bg-black-900_01 h-[284px] sm:pl-5 pl-6 relative rounded w-full">
                <Img
                  className="absolute h-[284px] inset-y-[0] my-auto object-cover right-[0] w-[76%]"
                  src="images/img_attractivewoma.png"
                  alt="attractivewoma"
                />
                <div className="absolute bottom-[8%] flex flex-col gap-4 items-start justify-start left-[8%] w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px] w-auto"
                      size="txtInterSemiBold24"
                    >
                      Women’s Collections
                    </Text>
                    <Text
                      className="leading-[21.00px] max-w-[255px] md:max-w-full text-gray-50 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Featured woman collections that give you another vibe.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      Shop Now
                    </Text>
                    <Img
                      className="h-px w-[81px]"
                      src="images/img_underline_white_a700.svg"
                      alt="underline_Two"
                    />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center w-auto sm:w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900 md:h-[221px] h-[284px] p-6 sm:px-5 relative rounded w-full">
                  <div className="absolute md:h-[221px] h-[222px] inset-[0] justify-center m-auto w-[78%]">
                    <div className="backdrop-opacity-[0.5] bg-blue_gray-100_e5 blur-[300.00px] h-[196px] m-auto rounded-[50%] w-[196px]"></div>
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[221px] sm:h-[] md:h-auto object-cover w-[91%]"
                        src="images/img_69694768amazo.png"
                        alt="69694768amazo"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[8%] flex flex-col gap-2 items-start justify-start left-[8%] w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px] w-auto"
                        size="txtInterSemiBold24"
                      >
                        Speakers
                      </Text>
                      <Text
                        className="text-gray-50 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Amazon wireless speakers
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        Shop Now
                      </Text>
                      <Img
                        className="h-px w-[81px]"
                        src="images/img_underline_white_a700.svg"
                        alt="underline"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-black-900 md:h-[238px] h-[284px] p-4 relative rounded w-full">
                  <div className="h-[238px] m-auto w-[238px]">
                    <div className="backdrop-opacity-[0.5] bg-blue_gray-100_e5 blur-[300.00px] h-[238px] m-auto rounded-[50%] w-[238px]"></div>
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 w-[89%]">
                      <Img
                        className="h-[203px] sm:h-[] md:h-auto mb-[7px] mt-1 object-cover w-full"
                        src="images/img_652e82cd70aa652.png"
                        alt="652e82cd70aa652"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[8%] flex flex-col gap-2 items-start justify-start left-[9%] w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px] w-auto"
                        size="txtInterSemiBold24"
                      >
                        Perfume
                      </Text>
                      <Text
                        className="text-gray-50 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        GUCCI INTENSE OUD EDP
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        Shop Now
                      </Text>
                      <Img
                        className="h-px w-[81px]"
                        src="images/img_underline_white_a700.svg"
                        alt="underline"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <ECommerceHomePageListicondelivery
          className="sm:flex-col flex-row font-poppins md:gap-10 gap-[88px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[935px] mt-[140px] mx-auto md:px-5 w-full"
          checkmarkicon="images/img_checkmark.svg"
          moneybacktext="VERIFIED PROFESSIONALS "
          moneybacktext1="We reurn money within 30 days"
        />
        <Footer2 className="bg-black-900 flex font-poppins items-center justify-center mt-[50px] md:px-5 w-full" />
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
              alt="arrowright_Two"
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

export default SERVICEThreePage;

import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import ECommerceHomePageCart from "components/ECommerceHomePageCart";
import ECommerceHomePageCart1 from "components/ECommerceHomePageCart1";
import ECommerceHomePageCart10 from "components/ECommerceHomePageCart10";
import ECommerceHomePageCart2 from "components/ECommerceHomePageCart2";
import ECommerceHomePageCart3 from "components/ECommerceHomePageCart3";
import ECommerceHomePageCart4 from "components/ECommerceHomePageCart4";
import ECommerceHomePageCart5 from "components/ECommerceHomePageCart5";
import ECommerceHomePageCart6 from "components/ECommerceHomePageCart6";
import ECommerceHomePageCart7 from "components/ECommerceHomePageCart7";
import ECommerceHomePageCart8 from "components/ECommerceHomePageCart8";
import ECommerceHomePageCart9 from "components/ECommerceHomePageCart9";
import ECommerceHomePageColumn from "components/ECommerceHomePageColumn";
import ECommerceHomePageColumn1 from "components/ECommerceHomePageColumn1";
import ECommerceHomePageColumn2 from "components/ECommerceHomePageColumn2";
import ECommerceHomePageColumnOne from "components/ECommerceHomePageColumnOne";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageFlashselltimer from "components/ECommerceHomePageFlashselltimer";
import ECommerceHomePageFlashselltimer1 from "components/ECommerceHomePageFlashselltimer1";
import ECommerceHomePageFlashselltimer2 from "components/ECommerceHomePageFlashselltimer2";
import ECommerceHomePageFlashselltimer3 from "components/ECommerceHomePageFlashselltimer3";
import ECommerceHomePageListicondelivery from "components/ECommerceHomePageListicondelivery";
import ECommerceHomePageRowdays from "components/ECommerceHomePageRowdays";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";

const ECommerceHomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto overflow-auto w-full">
        <ECommerceHomePageTopheader className="bg-black-900 flex flex-col sm:gap-[] sm:gap-x-[] sm:gap-y-[] sm:h-px items-end justify-start sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] p-3 sm:p-px w-full" />
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
                  className="common-pointer cursor-pointer text-base text-black-900 text-center w-auto"
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
                  className="common-pointer cursor-pointer text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/servicethree")}
                >
                  Services
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="common-pointer cursor-pointer text-base text-black-900 text-center"
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
        <div
          className="common-pointer flex flex-col font-poppins gap-14 items-center sm:m-[] mt-10 sm:mt-[] md:px-5 w-full"
          onClick={() => navigate("/frame560")}
        >
          <div className="bg-black-900 flex flex-col items-start justify-between pl-[60px] pr-10 py-10 w-[71%] md:w-full">
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
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[470px] items-end justify-between w-auto md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[87px] items-end justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 h-[109px] md:h-auto items-start justify-start w-auto">
                  <div className="flex flex-row font-poppins gap-4 items-center justify-start w-auto">
                    <div className="bg-red-600 h-10 rounded w-1/5"></div>
                    <Text
                      className="text-base text-red-600 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Today’s
                    </Text>
                  </div>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                    size="txtInterSemiBold36"
                  >
                    Flash Sales
                  </Text>
                </div>
                <ECommerceHomePageRowdays className="flex flex-row items-start justify-between w-[51%] sm:w-full" />
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
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start max-w-[1770px] w-full"
              orientation="horizontal"
            >
              <ECommerceHomePageColumn className="flex flex-col gap-4 items-start justify-start w-auto" />
              <ECommerceHomePageColumnOne className="flex flex-col gap-4 items-start justify-start w-auto" />
              <ECommerceHomePageColumn1 className="flex flex-col gap-4 items-start justify-start w-auto" />
              <ECommerceHomePageColumn2 className="flex flex-col gap-4 items-start justify-start w-auto" />
              <ECommerceHomePageColumn2 className="flex flex-col gap-4 items-start justify-start w-auto" />
              <ECommerceHomePageColumn2 className="flex flex-col gap-4 items-start justify-start w-auto" />
            </List>
          </div>
        </div>
        <Button
          className="common-pointer cursor-pointer font-medium min-w-[234px] mt-[103px] text-base text-center"
          onClick={() => navigate("/productdetailspage")}
          shape="round"
          color="red_600"
          size="lg"
          variant="fill"
        >
          View All Products
        </Button>
        <Line className="bg-black-900_75 h-px max-w-[1170px] mt-[60px] mx-auto rotate-[-180deg] w-full" />
        <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[74px] mx-auto md:px-5 w-full">
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
                  alt="arrowleft_One"
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
                  alt="arrowright_Two"
                />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-col gap-4 items-center justify-end hover:mx-0 p-[23px] sm:px-5 rounded hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="h-14 w-14"
                src="images/img_categorycellphone.svg"
                alt="categorycellpho"
              />
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                Phones
              </Text>
            </div>
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-col gap-[18px] items-center justify-end hover:mx-0 p-[21px] sm:px-5 rounded hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="h-14 mt-[3px] w-14"
                src="images/img_categorycomputer.svg"
                alt="categorycompute"
              />
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                Computers
              </Text>
            </div>
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-col gap-4 items-center justify-end hover:mx-0 p-[23px] sm:px-5 rounded hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="h-14 w-14"
                src="images/img_categorysmartwatch.svg"
                alt="categorysmartwa"
              />
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                SmartWatch
              </Text>
            </div>
            <div className="bg-red-600 border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-col gap-4 items-center justify-end hover:mx-0 p-[23px] sm:px-5 rounded hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-14 w-14"
                src="images/img_categorycamera.svg"
                alt="categorycamera"
              />
              <Text
                className="text-base text-gray-50"
                size="txtPoppinsRegular16Gray50"
              >
                Camera
              </Text>
            </div>
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-col gap-4 items-center justify-end hover:mx-0 p-[23px] sm:px-5 rounded hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="h-14 w-14"
                src="images/img_categoryheadphone.svg"
                alt="categoryheadpho"
              />
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                HeadPhones
              </Text>
            </div>
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-col gap-[18px] items-center justify-end hover:mx-0 p-[21px] sm:px-5 rounded hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="h-14 mt-[3px] w-14"
                src="images/img_categorygamepad.svg"
                alt="categorygamepad"
              />
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                Gaming
              </Text>
            </div>
          </List>
        </div>
        <Line className="bg-black-900_75 h-px max-w-[1170px] mt-[75px] mx-auto rotate-[-180deg] w-full" />
        <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[69px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[611px] items-end justify-between w-auto md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
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
                Best Selling Products
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
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <ECommerceHomePageCart
              className="flex flex-col gap-4 items-start justify-start w-auto"
              hearticon="images/img_wishlist.svg"
              quickviewicon="images/img_quickview.svg"
              productimage="images/img_672462zah9d56.png"
            />
            <ECommerceHomePageCart1
              className="flex flex-col gap-4 items-start justify-start w-auto"
              hearticon="images/img_wishlist.svg"
              quickviewicon="images/img_quickview.svg"
            />
            <ECommerceHomePageCart2
              className="flex flex-col gap-4 items-start justify-start w-auto"
              hearticon="images/img_wishlist.svg"
              quickviewicon="images/img_quickview.svg"
              productimage="images/img_gammaxxl240argb1500x500.png"
            />
            <ECommerceHomePageCart3
              className="flex flex-col gap-4 items-start justify-start w-auto"
              hearticon="images/img_wishlist.svg"
              quickviewicon="images/img_quickview.svg"
              productimage="images/img_sammoghadamkh_176x140.png"
            />
          </List>
        </div>
        <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1170px] mt-[139px] mx-auto px-11 md:px-5 w-full">
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
                className="common-pointer cursor-pointer font-medium font-poppins min-w-[171px] mt-10 text-base text-center"
                onClick={() => navigate("/checkout")}
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
        <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-center justify-start max-w-[1170px] mt-[71px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-auto md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[672px] items-end justify-between w-auto md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row font-poppins gap-4 items-center justify-start w-auto">
                  <div className="bg-red-600 h-10 rounded w-[15%]"></div>
                  <Text
                    className="text-base text-red-600 w-auto"
                    size="txtPoppinsSemiBold16"
                  >
                    Our Products
                  </Text>
                </div>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
                  size="txtInterSemiBold36"
                >
                  Explore Our Products
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
                    alt="arrowleft_Two"
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
                    alt="arrowright_Three"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <ECommerceHomePageCart4 className="flex flex-col gap-4 items-start justify-start w-auto" />
                <ECommerceHomePageCart5 className="flex flex-col gap-4 items-start justify-start w-auto" />
                <ECommerceHomePageCart6 className="flex flex-col gap-4 items-start justify-start w-auto" />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                      Curology Product Set{" "}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-red-600 w-auto"
                          size="txtPoppinsMedium16Red600"
                        >
                          $500
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
                          (145)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  <ECommerceHomePageCart7 className="flex flex-col gap-4 items-start justify-start w-auto" />
                  <ECommerceHomePageCart8 className="flex flex-col gap-4 items-start justify-start w-auto" />
                  <ECommerceHomePageCart9 className="flex flex-col gap-4 items-start justify-start w-auto" />
                </List>
                <ECommerceHomePageCart10 className="flex flex-col gap-4 items-start justify-start w-auto" />
              </div>
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-medium min-w-[234px] text-base text-center"
            onClick={() => navigate("/productdetailspage")}
            shape="round"
            color="red_600"
            size="lg"
            variant="fill"
          >
            View All Products
          </Button>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[140px] mx-auto md:px-5 w-full">
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
                className="sm:h-[400px] h-[511px] mt-auto mx-auto object-cover w-[511px]"
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
                        className="h-[203px] md:h-auto mb-[7px] mt-1 object-cover sm:opacity-0 w-full"
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
          className="sm:flex-col flex-row font-poppins md:gap-10 gap-[88px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[943px] mt-[140px] mx-auto md:px-5 w-full"
          checkmarkicon="images/img_checkmark.svg"
          moneybacktext="MONEY BACK GUARANTEE"
          moneybacktext1="We reurn money within 30 days"
        />
        <div className="flex flex-col items-end mt-[61px] md:px-5 px-[514px] w-full">
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
              alt="arrowright_Four"
            />
          </Button>
        </div>
        <footer className="bg-black-900 flex font-poppins items-center justify-center mt-8 md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-[23px] mt-[79px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] items-start justify-center w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col font-inter items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px]"
                        size="txtInterBold24Gray50"
                      >
                        Startup IDEA
                      </Text>
                    </div>
                    <Text
                      className="text-gray-50 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Subscribe
                    </Text>
                  </div>
                  <Text
                    className="text-base text-gray-50 w-auto"
                    size="txtPoppinsRegular16Gray50"
                  >
                    Get 10% off your first order
                  </Text>
                </div>
                <Input
                  name="sendmail"
                  placeholder="Enter your email"
                  className="p-0 placeholder:text-gray-50_7e text-base text-left w-full"
                  wrapClassName="flex w-[217px]"
                  type="email"
                  suffix={
                    <Img
                      className="mt-auto mb-px h-6 ml-8"
                      src="images/img_save.svg"
                      alt="save"
                    />
                  }
                  shape="round"
                  color="gray_50"
                  size="xs"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <a href="javascript:" className="text-gray-50 text-xl w-auto">
                  <Text size="txtPoppinsMedium20">Support</Text>
                </a>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="leading-[24.00px] max-w-[175px] md:max-w-full text-base text-gray-50"
                    size="txtPoppinsRegular16Gray50"
                  >
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </Text>
                  <Text
                    className="text-base text-gray-50 w-auto"
                    size="txtPoppinsRegular16Gray50"
                  >
                    exclusive@gmail.com
                  </Text>
                  <Text
                    className="text-base text-gray-50 w-auto"
                    size="txtPoppinsRegular16Gray50"
                  >
                    +88015-88888-9999
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-gray-50 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Account
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">My Account</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">
                        Login / Register
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">Cart</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">Wishlist</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">Shop</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-gray-50 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Quick Link
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">
                        Privacy Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">Terms Of Use</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">FAQ</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-50">
                      <Text size="txtPoppinsRegular16Gray50">Contact</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-50 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Download App
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-50_99 text-xs w-auto"
                      size="txtPoppinsMedium12"
                    >
                      Save $3 with App New User Only
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-black-900 flex flex-col h-20 items-center justify-start p-0.5 w-20">
                        <Img
                          className="h-[76px] md:h-auto object-cover w-[76px]"
                          src="images/img_qrcode1.png"
                          alt="qrcodeOne"
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="bg-black-900_02 h-10 md:h-[30px] p-[3px] relative w-full">
                          <div className="h-[30px] m-auto w-[95%]">
                            <div className="h-[30px] m-auto w-full">
                              <Img
                                className="h-[30px] m-auto object-cover rounded w-full"
                                src="images/img_pngtransparent.png"
                                alt="pngtransparent"
                              />
                              <Img
                                className="absolute bottom-[37%] h-px right-[7%] w-px"
                                src="images/img_vector1.svg"
                                alt="vectorOne"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[30%] h-[3px] right-[7%]"
                              src="images/img_vector2.svg"
                              alt="vectorTwo"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[43%] h-px right-[13%] w-px"
                            src="images/img_vector3.svg"
                            alt="vectorThree"
                          />
                          <Img
                            className="absolute bottom-[38%] h-0.5 right-[9%] w-px"
                            src="images/img_vector4.svg"
                            alt="vectorFour"
                          />
                        </div>
                        <div className="bg-black-900 flex flex-col items-center justify-start p-[3px] w-full">
                          <Img
                            className="h-[34px] md:h-auto object-cover rounded w-full"
                            src="images/img_downloadappstore.png"
                            alt="downloadappstor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconfacebook.svg"
                    alt="iconfacebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icontwitter.svg"
                    alt="icontwitter"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconinstagram.svg"
                    alt="iconinstagram"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                </div>
              </div>
            </div>
            <Text
              className="mt-[7px] text-base text-gray-50"
              size="txtPoppinsRegular16Gray50"
            >
              Become a Seller{" "}
            </Text>
            <div className="flex flex-col gap-4 items-center justify-start mt-7 w-auto md:w-full">
              <Img
                className="h-px w-[1440px]"
                src="images/img_underline_white_a700_1x1440.svg"
                alt="underline_Three"
              />
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconcopyright.svg"
                    alt="iconcopyright"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    Copyright kalyani 2024. All right reserved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ECommerceHomePagePage;

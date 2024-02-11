import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageCart2 from "components/ECommerceHomePageCart2";
import ECommerceHomePageColumn from "components/ECommerceHomePageColumn";
import ECommerceHomePageColumn1 from "components/ECommerceHomePageColumn1";
import ECommerceHomePageColumnOne from "components/ECommerceHomePageColumnOne";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer1 from "components/Footer1";
import SignUpHeader from "components/SignUpHeader";

const ProductDetailspagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
            startupidea="Exclusive"
            servicestext="Contact"
            abouttext="About"
            cartimage="images/img_cart1.svg"
            userimage="images/img_user_black_900.svg"
          />
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
          <CartRoadmap
            className="flex flex-row font-poppins gap-3 items-center justify-start mt-[79px] md:px-5 w-auto"
            myaccount="Gaming"
            checkout="Havic HV G-92 Gamepad"
          />
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start max-w-[1170px] mt-[78px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[15%] md:w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-start p-3 rounded w-full">
                <Img
                  className="h-[114px] md:h-auto object-cover w-[83%]"
                  src="images/img_image57.png"
                  alt="imageFiftySeven"
                />
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start p-5 rounded w-full">
                <Img
                  className="h-[97px] md:h-auto object-cover w-[87%]"
                  src="images/img_image58.png"
                  alt="imageFiftyEight"
                />
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start p-[18px] rounded w-full">
                <Img
                  className="h-[94px] md:h-auto my-1 object-cover w-full"
                  src="images/img_image61.png"
                  alt="imageSixtyOne"
                />
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start p-4 rounded w-full">
                <Img
                  className="h-[106px] md:h-auto object-cover w-[89%]"
                  src="images/img_image59.png"
                  alt="imageFiftyNine"
                />
              </div>
            </div>
            <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[30px] p-[27px] sm:px-5 rounded w-[43%] md:w-full">
              <Img
                className="h-[315px] md:h-auto mb-[104px] mt-[127px] object-cover w-full"
                src="images/img_image63.png"
                alt="imageSixtyThree"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-10 items-center justify-start md:ml-[0] ml-[70px] w-[35%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                  size="txtInterSemiBold24Black900"
                >
                  Havic HV G-92 Gamepad
                </Text>
                <div className="flex flex-row font-poppins gap-4 items-start justify-start mt-[9px] w-auto">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Img
                      className="h-5 w-[100px]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                    <Text
                      className="text-black-900_87 text-sm w-auto"
                      size="txtPoppinsRegular14Black90087"
                    >
                      (150 Reviews)
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Line className="bg-black-900_87 h-4 w-px" />
                    <Text
                      className="text-green-A400_90 text-sm w-auto"
                      size="txtPoppinsRegular14GreenA40090"
                    >
                      In Stock
                    </Text>
                  </div>
                </div>
                <Text
                  className="mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                  size="txtInterRegular24"
                >
                  $192.00
                </Text>
                <Text
                  className="leading-[21.00px] mt-5 text-black-900 text-sm w-[94%] sm:w-full"
                  size="txtPoppinsRegular14Black900"
                >
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </Text>
                <Img
                  className="h-px mt-6"
                  src="images/img_underline.svg"
                  alt="underline"
                />
                <div className="flex flex-row font-inter gap-6 items-start justify-start mt-[21px] w-auto">
                  <Text
                    className="text-black-900 text-xl tracking-[0.60px] w-auto"
                    size="txtInterRegular20"
                  >
                    Colours:
                  </Text>
                  <Img
                    className="h-5 w-12"
                    src="images/img_colourchnage_red_300.svg"
                    alt="colourchnage"
                  />
                </div>
                <div className="flex flex-row font-inter gap-6 items-center justify-start mt-[21px] w-auto">
                  <Text
                    className="text-black-900 text-xl tracking-[0.60px] w-auto"
                    size="txtInterRegular20"
                  >
                    Size:
                  </Text>
                  <div className="flex flex-row font-poppins gap-4 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer font-medium h-8 text-center text-sm w-8"
                      shape="round"
                      color="black_900_7f"
                      size="sm"
                      variant="outline"
                    >
                      XS
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-8 text-center text-sm w-8"
                      shape="round"
                      color="black_900_7f"
                      size="sm"
                      variant="outline"
                    >
                      S
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-8 text-center text-sm w-8"
                      shape="round"
                      color="red_600"
                      size="sm"
                      variant="fill"
                    >
                      M
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-8 text-center text-sm w-8"
                      shape="round"
                      color="black_900_7f"
                      size="sm"
                      variant="outline"
                    >
                      L
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-8 text-center text-sm w-8"
                      shape="round"
                      color="black_900_7f"
                      size="sm"
                      variant="outline"
                    >
                      XL
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row font-poppins items-center justify-between mt-6 w-full">
                  <div className="flex flex-row gap-[-1px] h-11 md:h-auto items-start justify-start w-[159px]">
                    <div className="border border-black-900_7f border-solid flex flex-col items-center justify-start p-2 rounded-bl rounded-tl w-[26%]">
                      <Img
                        className="h-6 my-0.5 w-6"
                        src="images/img_iconminus.svg"
                        alt="iconminus"
                      />
                    </div>
                    <Button
                      className="border-y cursor-pointer font-medium min-w-[80px] text-center text-xl"
                      shape="square"
                      color="black_900_7f"
                      size="sm"
                      variant="outline"
                    >
                      2
                    </Button>
                    <div className="bg-red-600 flex flex-col items-center justify-start p-2 rounded-br rounded-tr w-[26%]">
                      <Img
                        className="h-6 my-0.5 w-6"
                        src="images/img_iconplus.svg"
                        alt="iconplus"
                      />
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[165px] text-base text-center"
                    shape="round"
                    color="red_600"
                    size="md"
                    variant="fill"
                  >
                    Buy Now
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    color="black_900_7f"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-8"
                      src="images/img_wishlist.svg"
                      alt="wishlist_One"
                    />
                  </Button>
                </div>
              </div>
              <div className="border border-black-900_7f border-solid flex flex-col gap-4 items-start justify-start py-6 rounded w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-4 md:ml-[0] w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_icondelivery_black_900.svg"
                    alt="icondelivery"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="text-black-900 text-xs underline w-auto"
                      size="txtPoppinsMedium12Black900"
                    >
                      Enter your postal code for Delivery Availability
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-px"
                  src="images/img_underline_black_900.svg"
                  alt="underline_One"
                />
                <div className="flex flex-row gap-4 items-center justify-start ml-4 md:ml-[0] w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_iconreturn.svg"
                    alt="iconreturn"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Return Delivery
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtPoppinsMedium12Black900"
                    >
                      <span className="text-black-900 font-poppins text-left font-medium">
                        Free 30 Days Delivery Returns.{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-black-900 font-poppins text-left font-medium underline"
                      >
                        Details
                      </a>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-poppins md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[140px] mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <div className="bg-red-600 h-10 rounded w-[15%]"></div>
              <Text
                className="text-base text-red-600 w-auto"
                size="txtPoppinsSemiBold16"
              >
                Related Item
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                orientation="horizontal"
              >
                <ECommerceHomePageColumn className="flex flex-col gap-4 items-start justify-start w-auto" />
                <ECommerceHomePageColumnOne className="flex flex-col gap-4 items-start justify-start w-auto" />
                <ECommerceHomePageColumn1 className="flex flex-col gap-4 items-start justify-start w-auto" />
              </List>
              <ECommerceHomePageCart2
                className="flex flex-col gap-4 items-start justify-start w-auto"
                hearticon="images/img_wishlist.svg"
                quickviewicon="images/img_quickview.svg"
                productimage="images/img_gammaxxl240argb1500x500.png"
              />
            </div>
          </div>
          <Footer1 className="bg-black-900 flex font-poppins items-center justify-center mt-[140px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailspagePage;

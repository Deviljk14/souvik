import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";

const SERVICETwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
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
          <div className="bg-black-900 flex flex-col items-start justify-start md:ml-[0] ml-[124px] mr-[65px] mt-10 p-4 md:px-5 w-[87%] md:w-full">
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
          <div className="font-poppins md:h-56 h-[191px] sm:h-[244px] max-w-[1170px] mt-[59px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[60px] h-max inset-[0] items-start justify-start m-auto max-w-[1170px] w-full">
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
            <Text
              className="absolute bottom-[0] left-[13%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtPoppinsBold24"
            >
              Southern Express Packers And Movers
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-end justify-start md:ml-[0] ml-[201px] mr-[901px] mt-[9px] md:px-5 w-[24%] md:w-full">
            <div className="flex flex-col items-end justify-start w-[53%] md:w-full">
              <div className="flex flex-row gap-7 items-start justify-start w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_placemarker.png"
                  alt="placemarker"
                />
                <Text
                  className="text-black-900 text-xl"
                  size="txtPoppinsMedium20Black900"
                >
                  Nigadi, Pune
                </Text>
              </div>
              <div className="flex flex-row items-start justify-end mt-1 w-[72%] md:w-full">
                <Img
                  className="h-6 mt-[3px] w-6"
                  src="images/img_star.svg"
                  alt="star"
                />
                <Img
                  className="h-6 ml-[13px] mt-[3px] w-6"
                  src="images/img_star.svg"
                  alt="star_One"
                />
                <Img
                  className="h-6 ml-[7px] mt-[3px] w-6"
                  src="images/img_star.svg"
                  alt="star_Two"
                />
                <Img
                  className="h-6 mb-[3px] ml-[11px] w-6"
                  src="images/img_star.svg"
                  alt="star_Three"
                />
              </div>
            </div>
            <Img
              className="h-6 mb-1 md:ml-[0] ml-[13px] md:mt-0 mt-[33px] w-6"
              src="images/img_star.svg"
              alt="star_Four"
            />
            <Text
              className="mb-[9px] md:ml-[0] ml-[21px] md:mt-0 mt-7 text-base text-black-900"
              size="txtPoppinsSemiBold16Black900"
            >
              ( 195 Rating)
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[41px] items-center justify-start md:ml-[0] ml-[235px] mr-[756px] mt-[34px] md:px-5 w-[32%] md:w-full">
            <Input
              name="groupFiftyNine"
              placeholder="Show Number"
              className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
              wrapClassName="border border-orange-A200 border-solid rounded-[5px] w-[46%] md:w-full"
              type="number"
              shape="round"
              color="orange_A200"
              size="xs"
              variant="fill"
            ></Input>
            <Button
              className="common-pointer border border-indigo-A700 border-solid cursor-pointer font-semibold min-w-[204px] rounded-[5px] text-base text-center"
              onClick={() => navigate("/servicefour")}
              shape="round"
              color="blue_A700"
              size="md"
              variant="fill"
            >
              Send Enquiry
            </Button>
          </div>
          <Line className="bg-black-900_7f h-px max-w-[1109px] mt-[19px] mx-auto w-full" />
          <div className="font-poppins h-[1770px] sm:h-[1813px] md:h-[2457px] max-w-[1212px] mt-[43px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-white-A700 border border-black-900_7f border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col md:gap-10 gap-[86px] items-start justify-start mb-[1305px] mt-[37px] w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    className="md:flex-1 h-[211px] sm:h-auto object-cover rounded-sm w-[26%] md:w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
                  />
                  <Img
                    className="h-[225px] md:h-auto md:ml-[0] ml-[39px] object-cover w-[225px]"
                    src="images/img_image74.png"
                    alt="imageSeventyFour"
                  />
                  <div className="h-[238px] md:ml-[0] ml-[26px] relative w-1/4 md:w-full">
                    <div className="absolute h-[238px] inset-y-[0] left-[0] my-auto w-[93%]">
                      <Img
                        className="h-[238px] m-auto object-cover w-full"
                        src="images/img_image75.png"
                        alt="imageSeventyFive"
                      />
                      <div className="absolute flex flex-row gap-[22px] items-center justify-center right-[16%] top-[6%] w-2/5">
                        <Img
                          className="h-[19px]"
                          src="images/img_signal_orange_a200_19x40.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-[19px]"
                          src="images/img_signal_orange_a200_19x40.svg"
                          alt="signal_One"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-[19px] right-[0] top-[6%]"
                      src="images/img_signal_orange_a200_19x40.svg"
                      alt="signal_Two"
                    />
                  </div>
                  <div className="md:h-[194px] h-[196px] ml-1.5 md:ml-[0] md:mt-0 mt-3.5 relative w-[24%] md:w-full">
                    <Img
                      className="absolute h-[194px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image76.png"
                      alt="imageSeventySix"
                    />
                    <Img
                      className="absolute h-[19px] left-[0] top-[0]"
                      src="images/img_signal_orange_a200_19x40.svg"
                      alt="signal_Three"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[5px] w-[42%] md:w-full">
                  <Img
                    className="h-10 md:h-auto object-cover"
                    src="images/img_checkedcheckbox.png"
                    alt="checkedcheckbox"
                  />
                  <Img
                    className="h-10 md:h-auto object-cover"
                    src="images/img_checkedcheckbox.png"
                    alt="checkedcheckbox_One"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 border border-black-900_3f border-solid h-[244px] inset-x-[0] mx-auto top-[18%] w-full"></div>
            <div className="absolute bg-white-A700 border border-black-900_3f border-solid h-[355px] inset-x-[0] mx-auto top-[32%] w-full"></div>
            <div className="absolute bg-white-A700 border border-black-900_3f border-solid bottom-[18%] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start mb-[75px] mt-[13px] w-[32%] md:w-full">
                <div className="flex flex-row gap-[37px] items-center justify-start w-[92%] md:w-full">
                  <Button
                    className="border border-blue_gray-100_01 border-solid cursor-pointer font-bold min-w-[91px] rounded-lg md:text-3xl sm:text-[28px] text-[32px] text-center"
                    color="orange_A200"
                    size="xl"
                    variant="fill"
                  >
                    4.6
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtPoppinsBold32"
                  >
                    195 Ratings
                  </Text>
                </div>
                <div className="flex flex-row gap-[23px] items-end justify-start mt-[107px] w-full">
                  <Button
                    className="border border-blue_gray-100_01 border-solid cursor-pointer font-bold min-w-[75px] rounded-lg text-4xl sm:text-[32px] md:text-[34px] text-center"
                    color="orange_A200"
                    size="md"
                    variant="fill"
                  >
                    VR
                  </Button>
                  <Text
                    className="mb-0.5 mt-[13px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtPoppinsBold36"
                  >
                    Vishal Rajput
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start md:ml-[0] ml-[54px] mt-[26px] w-[48%] md:w-full">
                  <Img
                    className="h-6 mt-1 w-6"
                    src="images/img_star_red_500.svg"
                    alt="star_Five"
                  />
                  <Img
                    className="h-6 ml-[13px] mt-1 w-6"
                    src="images/img_star_red_500.svg"
                    alt="star_Six"
                  />
                  <Img
                    className="h-6 ml-[7px] mt-1 w-6"
                    src="images/img_star_red_500.svg"
                    alt="star_Seven"
                  />
                  <Img
                    className="h-6 ml-[11px] my-0.5 w-6"
                    src="images/img_star_red_500.svg"
                    alt="star_Eight"
                  />
                  <Img
                    className="h-6 mb-1 ml-[13px] w-6"
                    src="images/img_star_red_500.svg"
                    alt="star_Nine"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 border border-black-900_3f border-solid bottom-[1%] h-[306px] inset-x-[0] mx-auto w-full"></div>
          </div>
          <footer className="bg-black-900 flex font-poppins items-center justify-center mt-[30px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center mb-[23px] mt-[79px] w-full">
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
                        <Text size="txtPoppinsRegular16Gray50">
                          Terms Of Use
                        </Text>
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
              <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                <Img
                  className="h-px w-[1440px]"
                  src="images/img_underline_white_a700_1x1440.svg"
                  alt="underline_One"
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
          {/* <Button
            className="flex h-[46px] items-center justify-center md:ml-[0] ml-[1305px] mr-[89px] mt-[2113px] rotate-[90deg] w-[46px]"
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
            className="md:ml-[0] ml-[702px] mr-[609px] mt-[355px] text-base text-gray-50"
            size="txtPoppinsRegular16Gray50"
          >
            Become a Seller{" "}
          </Text> */}
        </div>
      </div>
    </>
  );
};

export default SERVICETwoPage;

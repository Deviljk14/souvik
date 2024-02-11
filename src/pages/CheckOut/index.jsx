import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  Text,
} from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

const CheckOutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
            startupidea="STARTUP IDEA"
            hometext="Home"
            servicestext="Services"
            abouttext="About"
            favoriteimage="images/img_favorite.svg"
            cartimage="images/img_cart1_black_900.svg"
            userimage="images/img_user_black_900.svg"
          />
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
          <CartRoadmap
            className="flex sm:flex-col flex-row font-poppins gap-3 items-center justify-start mt-[79px] md:px-5 w-auto sm:w-full"
            product="Product"
            viewcart="View Cart"
            checkout="CheckOut"
          />
          <div className="flex flex-col font-inter items-start justify-start mt-[74px] md:px-5 w-auto">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.44px] w-auto"
              size="txtInterMedium36"
            >
              Billing Details
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1170px] mt-[37px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      First Name
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame803"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Company Name
                  </Text>
                  <Input
                    name="frame803_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Street Address
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame804"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    Apartment, floor, etc. (optional)
                  </Text>
                  <Input
                    name="frame805"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Town/City
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame806"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Phone Number
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame807"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_7e w-auto"
                    size="txtPoppinsRegular16Black9007e"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Email Address
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="frame808"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[50px] w-full"
                    shape="round"
                    color="gray_100"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <CheckBox
                className="text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Save this information for faster check-out next time"
              ></CheckBox>
            </div>
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-8 w-auto sm:w-full">
              <div className="flex flex-col gap-8 items-end justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col h-[54px] items-center justify-start p-0.5 w-[54px]">
                    <Img
                      className="h-[42px] md:h-auto my-[3px] object-cover w-[96%]"
                      src="images/img_g922500x5001.png"
                      alt="g922500x5001"
                    />
                  </div>
                  <div className="flex flex-row gap-[210px] items-center justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      LCD Monitor
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      $650
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col h-[54px] items-center justify-start p-0.5 w-[54px]">
                    <Img
                      className="h-[39px] md:h-auto my-[5px] object-cover w-full"
                      src="images/img_g27cq4500x5001_39x50.png"
                      alt="g27cq4500x5001"
                    />
                  </div>
                  <div className="flex flex-row gap-[204px] items-center justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      H1 Gamepad
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      $1100
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-[307px] items-start justify-between w-auto sm:w-full">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          Subtotal:
                        </Text>
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          $1750
                        </Text>
                      </div>
                      <Img
                        className="h-px w-[422px]"
                        src="images/img_underline_black_900.svg"
                        alt="underline"
                      />
                    </div>
                    <div className="flex flex-row gap-[314px] items-start justify-between w-auto sm:w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Shipping:
                      </Text>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtPoppinsRegular16"
                      >
                        Free
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-px w-[422px]"
                    src="images/img_underline_black_900.svg"
                    alt="underline_One"
                  />
                </div>
                <div className="flex flex-row gap-[335px] items-start justify-between w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Total:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    $1750
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[155px] items-center justify-between w-auto sm:w-full">
                <Radio
                  value="Bank"
                  className="text-base text-black-900 text-left"
                  inputClassName="border border-black-900 border-solid h-6 mr-[5px] w-6"
                  checked={false}
                  name="bank"
                  label="Bank"
                  id="Bank"
                ></Radio>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start p-0.5 w-[22%]">
                    <Img
                      className="h-4 md:h-auto my-[3px] object-cover w-[98%]"
                      src="images/img_image32.png"
                      alt="imageThirtyTwo"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-0.5 w-[22%]">
                    <Img
                      className="h-[11px] md:h-auto my-1.5 object-cover w-[98%]"
                      src="images/img_image30.png"
                      alt="imageThirty"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[22%]">
                    <Img
                      className="h-[25px] md:h-auto object-cover w-[93%]"
                      src="images/img_image31.png"
                      alt="imageThirtyOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[22%]">
                    <Img
                      className="h-[18px] md:h-auto my-[3px] object-cover w-[93%]"
                      src="images/img_image33.png"
                      alt="imageThirtyThree"
                    />
                  </div>
                </div>
              </div>
              <Radio
                value="Cashondelivery"
                className="text-base text-black-900 text-left"
                inputClassName="border border-black-900 border-solid h-6 mr-[5px] rounded-[12px] w-6"
                checked={true}
                name="cashondelivery"
                label="Cash on delivery"
                id="Cashondelivery"
              ></Radio>
              <div className="flex sm:flex-col flex-row gap-4 items-end justify-start w-auto sm:w-full">
                <Input
                  name="frame798"
                  placeholder="Coupon Code"
                  className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                  wrapClassName="w-[57%] sm:w-full"
                  shape="round"
                  color="black_900"
                  size="md"
                  variant="outline"
                ></Input>
                <Button
                  className="cursor-pointer font-medium min-w-[211px] text-base text-center"
                  shape="round"
                  color="red_600"
                  size="lg"
                  variant="fill"
                >
                  Apply Coupon
                </Button>
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[190px] text-base text-center"
                onClick={() => navigate("/account")}
                shape="round"
                color="red_600"
                size="lg"
                variant="fill"
              >
                Place Order
              </Button>
            </div>
          </div>
          <Footer className="bg-black-900 flex font-poppins items-center justify-center mt-[140px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;

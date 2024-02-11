import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

const AccountPage = () => {
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
            cartimage="images/img_cart1.svg"
            userimage="images/img_user_red_600_32x32.svg"
          />
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
          <div className="flex flex-row font-poppins md:gap-10 items-start justify-between max-w-[1168px] mt-[79px] mx-auto md:px-5 w-full">
            <CartRoadmap
              className="flex flex-row gap-3 items-center justify-start w-auto"
              account="Home"
            />
            <Text
              className="text-black-900 text-sm"
              size="txtPoppinsRegular14Black900"
            >
              <span className="text-black-900 font-poppins text-left font-normal">
                Welcome!{" "}
              </span>
              <span className="text-red-600 font-poppins text-left font-normal">
                Md Rimel
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[100px] items-start justify-start max-w-[1170px] mt-[78px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[18%] md:w-full">
              <Text
                className="text-base text-black-900"
                size="txtPoppinsMedium16Black900"
              >
                Manage My Account
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[35px] mt-[13px] w-auto">
                <Text
                  className="text-base text-red-600 w-auto"
                  size="txtPoppinsRegular16Red600"
                >
                  My Profile
                </Text>
                <Text
                  className="text-base text-black-900_87 w-auto"
                  size="txtPoppinsRegular16Black90087"
                >
                  Address Book
                </Text>
                <Text
                  className="text-base text-black-900_87 w-auto"
                  size="txtPoppinsRegular16Black90087"
                >
                  My Payment Options
                </Text>
              </div>
              <Text
                className="mt-[26px] text-base text-black-900"
                size="txtPoppinsMedium16Black900"
              >
                My Orders
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[35px] mt-[13px] w-auto">
                <Text
                  className="text-base text-black-900_87 w-auto"
                  size="txtPoppinsRegular16Black90087"
                >
                  My Returns
                </Text>
                <Text
                  className="text-base text-black-900_87 w-auto"
                  size="txtPoppinsRegular16Black90087"
                >
                  My Cancellations
                </Text>
              </div>
              <Text
                className="mt-[17px] text-base text-black-900"
                size="txtPoppinsMedium16Black900"
              >
                My WishList
              </Text>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[38px] sm:px-5 rounded shadow-bs1 w-3/4 md:w-full">
              <Text
                className="md:ml-[0] ml-[41px] text-red-600 text-xl"
                size="txtPoppinsMedium20Red600"
              >
                Edit Your Profile
              </Text>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[41px] mt-[15px] w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    First Name
                  </Text>
                  <Input
                    name="placeboxinfo"
                    placeholder="Md"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="placeboxinfo_One"
                    placeholder="Rimel"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[41px] mt-[23px] w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="rimel1111@gmail.com"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="w-full"
                    type="email"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Address
                  </Text>
                  <Input
                    name="placeboxinfo_Two"
                    placeholder="Kingston, 5236, United State"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[41px] mt-6 w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Password Changes
                  </Text>
                  <Input
                    name="placeboxinfo_Three"
                    placeholder="Current Passwod"
                    className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <Input
                  name="placeboxinfo_Four"
                  placeholder="New Passwod"
                  className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="placeboxinfo_Five"
                  placeholder="Confirm New Passwod"
                  className="p-0 placeholder:text-black-900_87 text-base text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-8 items-center justify-start md:ml-[0] ml-[448px] mt-6 w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsRegular16"
                >
                  Cancel
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[214px] text-base text-center"
                  onClick={() => navigate("/ecommercehomepage")}
                  shape="round"
                  color="red_600"
                  size="lg"
                  variant="fill"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-black-900 flex font-poppins items-center justify-center mt-[140px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AccountPage;

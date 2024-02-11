import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer1 from "components/Footer1";
import SignUpHeader from "components/SignUpHeader";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
            className="flex flex-row font-poppins gap-3 items-center justify-start md:ml-[0] ml-[135px] mt-[79px] md:px-5 w-auto"
            account="Home"
            myaccount="Cantact"
          />
          <div className="flex md:flex-col flex-row font-poppins gap-[30px] items-center justify-start max-w-[1170px] mt-20 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[35px] sm:px-5 rounded shadow-bs1 w-[30%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start mb-[15px] mt-[5px] w-auto">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="red_600"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </Button>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Call To Us
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14Black900"
                    >
                      We are available 24/7, 7 days a week.
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14Black900"
                    >
                      Phone: +8801611112222
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-px w-[270px]"
                  src="images/img_underline.svg"
                  alt="underline_One"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="red_600"
                      size="md"
                      variant="fill"
                    >
                      <Img src="images/img_lock.svg" alt="lock" />
                    </Button>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Write To US
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[21.00px] max-w-[250px] md:max-w-full text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      Fill out our form and we will contact you within 24 hours.
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14Black900"
                    >
                      Emails: customer@exclusive.com
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14Black900"
                    >
                      Emails: support@exclusive.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded shadow-bs1 w-[69%] md:w-full">
              <div className="flex flex-col gap-8 items-end justify-start my-[9px] w-auto md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
                  <Text
                    className="bg-gray-100 justify-center pl-4 sm:pr-5 pr-[35px] py-3 rounded text-base text-black-900_87 w-full"
                    size="txtPoppinsRegular16Black90087"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Your Name{" "}
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Text
                    className="bg-gray-100 justify-center pl-4 sm:pr-5 pr-[35px] py-3 rounded text-base text-black-900_87 w-full"
                    size="txtPoppinsRegular16Black90087"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Your Email{" "}
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Text
                    className="bg-gray-100 justify-center pl-4 sm:pr-5 pr-[35px] py-3 rounded text-base text-black-900_87 w-full"
                    size="txtPoppinsRegular16Black90087"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Your Phone{" "}
                    </span>
                    <span className="text-red-600 font-poppins text-left font-normal">
                      *
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-col items-start justify-start p-[15px] rounded w-full">
                  <Text
                    className="mb-[151px] text-base text-black-900_87"
                    size="txtPoppinsRegular16Black90087"
                  >
                    Your Massage
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[215px] text-base text-center"
                  onClick={() => navigate("/error")}
                  shape="round"
                  color="red_600"
                  size="lg"
                  variant="fill"
                >
                  Send Massage
                </Button>
              </div>
            </div>
          </div>
          <Footer1 className="bg-black-900 flex font-poppins items-center justify-center mt-[140px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;

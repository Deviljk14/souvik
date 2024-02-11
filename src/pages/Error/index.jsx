import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer1 from "components/Footer1";
import SignUpHeader from "components/SignUpHeader";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
        <SignUpHeader
          className="flex md:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
          startupidea="Exclusive"
          hometext="Home"
          servicestext="Contact"
          abouttext="About"
          cartimage="images/img_cart1.svg"
          userimage="images/img_user_black_900.svg"
        />
        <Img className="h-px mt-4" src="images/img_line3.svg" alt="lineThree" />
        <div className="flex flex-col font-poppins items-start mt-[79px] md:px-10 sm:px-5 px-[135px] w-full">
          <CartRoadmap
            className="flex flex-row gap-3 items-center justify-start w-auto"
            account="Home"
            myaccount="404 Error"
          />
        </div>
        <div className="flex flex-col gap-10 items-center justify-start mt-[131px] md:px-5 w-auto md:w-full">
          <Text
            className="md:text-5xl text-[110px] text-black-900 tracking-[3.30px] w-auto"
            size="txtInterMedium110"
          >
            404 Not Found
          </Text>
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            Your visited page not found. You may go home page.
          </Text>
        </div>
        <Button
          className="common-pointer cursor-pointer font-medium min-w-[254px] mt-[77px] text-base text-center"
          onClick={() => navigate("/ecommercehomepage")}
          shape="round"
          color="red_600"
          size="lg"
          variant="fill"
        >
          Back to home page
        </Button>
        <Footer1 className="bg-black-900 flex font-poppins items-center justify-center mt-[140px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ErrorPage;

import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import AboutColumnhome from "components/AboutColumnhome";
import AboutColumniconsale from "components/AboutColumniconsale";
import AboutColumniconshoppingbag from "components/AboutColumniconshoppingbag";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageListicondelivery from "components/ECommerceHomePageListicondelivery";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer1 from "components/Footer1";
import SignUpHeader from "components/SignUpHeader";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
            startupidea="Exclusive"
            hometext="Home"
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
            account="Home"
            myaccount="About"
          />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-[75px] items-center justify-end mt-[42px] md:px-5 w-[91%] md:w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 text-justify tracking-[3.24px] w-auto"
                size="txtInterSemiBold54"
              >
                Our Story
              </Text>
              <div className="flex flex-col font-poppins gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[26.00px] max-w-[525px] md:max-w-full text-base text-black-900"
                  size="txtPoppinsRegular16"
                >
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </Text>
                <Text
                  className="leading-[26.00px] max-w-[505px] md:max-w-full text-base text-black-900"
                  size="txtPoppinsRegular16"
                >
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </Text>
              </div>
            </div>
            <div className="bg-pink-A100 flex flex-col items-center justify-start rounded-bl rounded-tl w-[55%] md:w-full">
              <Img
                className="h-[609px] md:h-auto object-cover rounded-bl rounded-tl w-full"
                src="images/img_portraittwoaf.png"
                alt="portraittwoaf"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1170px] mt-[140px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded hover:shadow-bs2 hover:w-full w-full">
              <AboutColumnhome className="flex flex-col gap-6 items-center justify-start w-[169px]" />
            </div>
            <div className="bg-red-600 border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[29px] sm:px-5 rounded hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
              <AboutColumniconsale
                className="flex flex-col gap-6 items-center justify-start mt-0.5 w-auto"
                moneybackguaranteetext="33k"
                monthlyproductsaletext="Mopnthly Produduct Sale"
              />
            </div>
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-1 rounded hover:shadow-bs2 hover:w-full w-full">
              <AboutColumniconshoppingbag className="flex flex-col gap-6 items-center justify-start my-[26px] w-[262px]" />
            </div>
            <div className="border hover:border-0 border-black-900_4c border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[27px] sm:px-5 rounded hover:shadow-bs2 hover:w-full w-full">
              <AboutColumniconsale
                className="flex flex-col gap-6 items-center justify-start mt-0.5 w-auto"
                serviceimage="images/img_iconmoneybag.svg"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1170px] mt-[140px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <div className="bg-gray-100 flex flex-col items-center justify-start pt-[39px] sm:px-5 px-[39px] rounded w-full">
                <Img
                  className="h-[391px] md:h-auto object-cover w-[81%]"
                  src="images/img_image46.png"
                  alt="imageFortySix"
                />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
                    size="txtInterMedium32"
                  >
                    Tom Cruise
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Founder & Chairman
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icontwitter_black_900.svg"
                    alt="icontwitter"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconinstagram_black_900.svg"
                    alt="iconinstagram"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin_black_900.svg"
                    alt="iconlinkedin"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <div className="bg-gray-100 flex flex-col items-center justify-start pt-[33px] sm:px-5 px-[33px] rounded w-full">
                <Img
                  className="h-[397px] md:h-auto object-cover w-[97%]"
                  src="images/img_image51.png"
                  alt="imageFiftyOne"
                />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
                    size="txtInterMedium32"
                  >
                    Emma Watson
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Managing Director
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icontwitter_black_900.svg"
                    alt="icontwitter"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconinstagram_black_900.svg"
                    alt="iconinstagram"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin_black_900.svg"
                    alt="iconlinkedin"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <div className="bg-gray-100 flex flex-col items-center justify-start pt-[22px] sm:px-5 px-[22px] rounded w-full">
                <Img
                  className="h-[392px] md:h-auto mt-4 object-cover w-full"
                  src="images/img_image47.png"
                  alt="imageFortySeven"
                />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
                    size="txtInterMedium32"
                  >
                    Will Smith
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Product Designer
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icontwitter_black_900.svg"
                    alt="icontwitter"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconinstagram_black_900.svg"
                    alt="iconinstagram"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin_black_900.svg"
                    alt="iconlinkedin"
                  />
                </div>
              </div>
            </div>
          </List>
          <Img
            className="h-4 mt-10 w-28"
            src="images/img_frame883_black_900.svg"
            alt="frame883"
          />
          <ECommerceHomePageListicondelivery className="sm:flex-col flex-row font-poppins md:gap-10 gap-[88px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[943px] mt-[140px] mx-auto md:px-5 w-full" />
          <Footer1 className="bg-black-900 flex font-poppins items-center justify-center mt-[139px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;

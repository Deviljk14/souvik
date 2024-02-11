import React from "react";

import { Button, Img, Input, List, Text } from "components";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";
import WishlistCart from "components/WishlistCart";
import WishlistCart1 from "components/WishlistCart1";
import WishlistCart2 from "components/WishlistCart2";
import WishlistCart3 from "components/WishlistCart3";
import WishlistCart4 from "components/WishlistCart4";
import WishlistCart5 from "components/WishlistCart5";
import WishlistCart6 from "components/WishlistCart6";
import WishlistCart7 from "components/WishlistCart7";

const WishlistPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
        <SignUpHeader
          className="flex md:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
          startupidea="STARTUP IDEA"
          servicestext="Services"
          abouttext="About"
          favoriteimage="images/img_favorite.svg"
          cartimage="images/img_cart1.svg"
          userimage="images/img_user_black_900.svg"
        />
        <Img className="h-px mt-4" src="images/img_line3.svg" alt="lineThree" />
        <List
          className="flex flex-col font-poppins gap-20 items-start max-w-[1170px] mt-20 mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 gap-[835px] items-center justify-between w-auto md:w-full">
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsRegular20"
              >
                Wishlist (4)
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[223px] text-base text-center"
                shape="round"
                color="black_900_7f"
                size="lg"
                variant="outline"
              >
                Move All To Bag
              </Button>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">
              <WishlistCart className="flex flex-col gap-4 items-start justify-start w-full" />
              <WishlistCart1 className="flex flex-col gap-4 items-start justify-start w-full" />
              <WishlistCart2 className="flex flex-col gap-4 items-start justify-start w-full" />
              <WishlistCart3 className="flex flex-col gap-4 items-start justify-start w-full" />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 gap-[864px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="bg-red-600 h-10 rounded w-[13%]"></div>
                <Text
                  className="text-black-900 text-center text-xl w-auto"
                  size="txtPoppinsRegular20"
                >
                  Just For You
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[150px] text-base text-center"
                shape="round"
                color="black_900_7f"
                size="lg"
                variant="outline"
              >
                See All
              </Button>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">
              <WishlistCart4 className="flex flex-col gap-4 items-start justify-start w-full" />
              <WishlistCart5 className="flex flex-col gap-4 items-start justify-start w-full" />
              <WishlistCart6 className="flex flex-col gap-4 items-start justify-start w-full" />
              <WishlistCart7 className="flex flex-col gap-4 items-start justify-start w-full" />
            </div>
          </div>
        </List>
        <Footer className="bg-black-900 flex font-poppins items-center justify-center mt-[140px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default WishlistPage;

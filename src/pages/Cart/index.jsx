import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import CartColumncarttotal from "components/CartColumncarttotal";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import Footer from "components/Footer";
import SignUpHeader from "components/SignUpHeader";

const CartPage = () => {
  const tableData = React.useRef([
    {
      product: "LCD Monitor",
      price: "$650",
      quantity: "images/img_dropdownsmall.svg",
      subtotal: "$650",
    },
    {
      product: "H1 Gamepad",
      price: "$550",
      quantity: "images/img_dropdownsmall.svg",
      subtotal: "$1100",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-5 items-center justify-start p-[30px] sm:px-5">
            <div className="h-[58px] md:h-[86px] mb-[17px] mt-[30px] pb-0.5 pr-0.5 relative w-1/5">
              <Img
                className="absolute bottom-[12%] h-[39px] object-cover right-[3%] w-[79%]"
                src="images/img_g27cq4500x5001_39x50.png"
                alt="g27cq4500x5001"
              />
              <Img
                className="absolute h-6 left-[0] top-[0] w-6"
                src="images/img_iconcancel_red_600.svg"
                alt="iconcancel"
              />
            </div>
            <Text
              className="text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[387px] sm:pl-5 pl-[35px] py-[23px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            Product
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="py-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[323px] py-[23px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row gap-[18px] items-start justify-start p-3">
            <Text
              className="mt-[67px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              01
            </Text>
            <div className="flex flex-col items-center justify-start mb-[46px] mt-[63px] w-[5%]">
              <Img
                className="h-4 w-4"
                src="images/img_dropupsmall.svg"
                alt="dropupsmall"
              />
              <Img
                className="h-4 w-4"
                alt="dropdownsmall"
                src={info?.getValue()}
              />
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[353px] pb-[22px] pt-[25px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            Quantity
          </Text>
        ),
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <Text
            className="py-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[107px] py-[23px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[79px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <SignUpHeader
            className="flex md:flex-col flex-row font-inter md:gap-10 gap-[130px] items-center justify-between max-w-[1170px] mt-10 mx-auto md:px-5 w-full"
            startupidea="Startup Idea"
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
        </div>
        <CartRoadmap
          className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[135px] md:px-5 w-auto"
          account="Home"
          myaccount="Cart"
        />
        <div className="flex flex-col md:gap-10 gap-[140px] items-center w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1170px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={""}
                  headerClass="bg-white-A700"
                />
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[757px] items-start justify-between w-auto md:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[218px] text-base text-center"
                  shape="round"
                  color="black_900_7f"
                  size="lg"
                  variant="outline"
                >
                  Return To Shop
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[195px] text-base text-center"
                  shape="round"
                  color="black_900_7f"
                  size="lg"
                  variant="outline"
                >
                  Update Cart
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[173px] items-start justify-between w-auto md:w-full">
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
              <CartColumncarttotal className="border border-black-900 border-solid flex flex-col items-start justify-center p-6 sm:px-5 rounded w-[41%] md:w-full" />
            </div>
          </div>
          <Footer className="bg-black-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CartPage;

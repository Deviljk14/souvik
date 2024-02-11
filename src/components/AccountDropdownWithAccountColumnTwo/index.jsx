import React from "react";

import { Img, Text } from "components";

const AccountDropdownWithAccountColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900_0a flex flex-col items-center justify-end pb-[9px] pl-2.5 pr-[9px] rounded w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start mt-2 pl-2.5 w-auto">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_user_gray_50.svg"
                alt="user_One"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.managemyaccountOne}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_bag.svg" alt="bag" />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.myorder}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_iconcancel.svg"
                alt="iconcancel"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.mycancellationsOne}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 rounded-[1px] w-6"
                src="images/img_signal_gray_50.svg"
                alt="signal"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.myreviews}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_trophy.svg"
                alt="trophy"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.logout}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountDropdownWithAccountColumnTwo.defaultProps = {
  managemyaccountOne: "Manage My Account",
  myorder: "My Order",
  mycancellationsOne: "My Cancellations",
  myreviews: "My Reviews",
  logout: "Logout",
};

export default AccountDropdownWithAccountColumnTwo;

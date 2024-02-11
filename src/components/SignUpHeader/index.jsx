import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const SignUpHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div
          className="common-pointer flex sm:flex-col flex-row sm:gap-10 gap-40 items-start justify-between w-auto md:w-full"
          onClick={() => navigate("/ecommercehomepage")}
        >
          <div className="flex flex-col items-center justify-start">
            {!!props?.startupidea ? (
              <Text
                className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                size="txtInterBold24"
                onClick={() => navigate("/ecommercehomepage")}
              >
                {props?.startupidea}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-12 items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start">
              {!!props?.hometext ? (
                <Text
                  className="common-pointer text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/ecommercehomepage")}
                >
                  {props?.hometext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start">
              {!!props?.servicestext ? (
                <Text
                  className="common-pointer text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/service")}
                >
                  {props?.servicestext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start">
              {!!props?.abouttext ? (
                <Text
                  className="common-pointer text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                  onClick={() => navigate("/about")}
                >
                  {props?.abouttext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start pt-0.5">
              <Text
                className="common-pointer text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
                onClick={() => navigate("/signup")}
              >
                {props?.signuptext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-center pl-5 pr-3 py-[7px] rounded w-auto">
            <div className="flex flex-row gap-[34px] items-center justify-center w-auto">
              <Text
                className="text-black-900_87 text-xs w-auto"
                size="txtPoppinsRegular12"
              >
                {props?.lookingfortext}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center w-auto">
            <List
              className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[63%]"
              orientation="horizontal"
            >
              <div className="h-8 md:h-[18px] pb-1.5 pl-1.5 relative w-full">
                {!!props?.favoriteimage ? (
                  <Img
                    className="absolute h-[18px] inset-[0] justify-center m-auto"
                    alt="favorite"
                    src={props?.favoriteimage}
                  />
                ) : null}
                <div className="absolute h-[17px] md:h-[18px] right-[0] top-[0] w-4">
                  {!!props?.ellipseone ? (
                    <div className="absolute bg-red-600 h-4 inset-[0] justify-center m-auto rounded-[50%] w-4"></div>
                  ) : null}
                  {!!props?.favoritecount ? (
                    <Text
                      className="absolute h-max inset-y-[0] left-1/4 my-auto text-center text-gray-50 text-xs"
                      size="txtPoppinsRegular12Gray50"
                    >
                      {props?.favoritecount}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="md:h-6 h-8 relative w-full">
                {!!props?.cartimage ? (
                  <Img
                    className="absolute bottom-[0] h-[0] left-[0] w-[100px]"
                    alt="cartOne"
                    src={props?.cartimage}
                  />
                ) : null}
                <div className="absolute h-[18px] right-[0] top-[0] w-1/2">
                  {!!props?.ellipseone1 ? (
                    <div className="absolute bg-red-600 bottom-[0] h-4 inset-x-[0] mx-auto rounded-[50%] w-4"></div>
                  ) : null}
                  {!!props?.cartcount ? (
                    <Text
                      className="absolute h-full inset-y-[0] my-auto right-1/4 text-center text-gray-50 text-xs"
                      size="txtPoppinsRegular12Gray50"
                    >
                      {props?.cartcount}
                    </Text>
                  ) : null}
                </div>
              </div>
            </List>
            {!!props?.userimage ? (
              <Img
                className="common-pointer h-8 w-8"
                alt="user"
                src={props?.userimage}
                onClick={() => navigate("/accountdropdownwithaccount")}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

SignUpHeader.defaultProps = {
  signuptext: "Sign Up",
  lookingfortext: "What are you looking for?",
};

export default SignUpHeader;

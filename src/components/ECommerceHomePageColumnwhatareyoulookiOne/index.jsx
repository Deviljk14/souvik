import React from "react";

import { Img, Text } from "components";

const ECommerceHomePageColumnwhatareyoulookiOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[34px] items-center justify-center w-auto">
          <Text
            className="text-black-900_87 text-xs w-auto"
            size="txtPoppinsRegular12"
          >
            {props?.whatareyoulookiOne}
          </Text>
          <Img className="h-6 w-6" src="images/img_search.svg" alt="search" />
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumnwhatareyoulookiOne.defaultProps = {
  whatareyoulookiOne: "What are you looking for?",
};

export default ECommerceHomePageColumnwhatareyoulookiOne;

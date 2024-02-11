import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[-4px] items-center justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsSemiBold16Black900"
          >
            {props?.dynamictext1}
          </Text>
          <Text
            className="text-[11px] text-black-900 w-auto"
            size="txtPoppinsRegular11"
          >
            {props?.dynamictext2}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer1.defaultProps = {
  dynamictext1: "05",
  dynamictext2: "Days",
};

export default ECommerceHomePageFlashselltimer1;

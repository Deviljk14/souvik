import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-9 h-[35px] mb-[7px] mt-1 relative w-12">
          <Text
            className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
            size="txtPoppinsSemiBold16Black900"
          >
            {props?.textvalue}
          </Text>
          <Text
            className="absolute bottom-[-3%] inset-x-[0] mx-auto text-[11px] text-black-900 w-max"
            size="txtPoppinsRegular11"
          >
            {props?.textlabel}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer3.defaultProps = {
  textvalue: "35",
  textlabel: "Seconds",
};

export default ECommerceHomePageFlashselltimer3;

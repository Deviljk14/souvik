import React from "react";

import { Img, Text } from "components";

const AboutColumniconshoppingbag = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
          style={{ backgroundImage: "url('images/img_services.svg')" }}
        >
          <Img
            className="h-10 w-10"
            src="images/img_iconshoppingbag.svg"
            alt="iconshoppingbag"
          />
        </div>
        <div className="flex flex-col gap-3 items-center justify-start w-auto">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
            size="txtInterBold32"
          >
            {props?.customercounttext}
          </Text>
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.customeractivetext}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutColumniconshoppingbag.defaultProps = {
  customercounttext: "45.5k",
  customeractivetext: "Customer active in our site",
};

export default AboutColumniconshoppingbag;

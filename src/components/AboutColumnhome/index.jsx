import React from "react";

import { Img, Text } from "components";

const AboutColumnhome = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
          style={{ backgroundImage: "url('images/img_services.svg')" }}
        >
          <Img className="h-10 w-10" src="images/img_home.svg" alt="home" />
        </div>
        <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
            size="txtInterBold32"
          >
            {props?.languagetext}
          </Text>
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.deliverytext}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutColumnhome.defaultProps = {
  languagetext: "10.5k ",
  deliverytext: "Sallers active our site",
};

export default AboutColumnhome;

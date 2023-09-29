import React from "react";
import chossingcar from "../../assets/images/webp/choosingcar.webp";
import { WhyChoosingData } from "../common/Helper";
import WhyChoosingContent from "./WhyChoosingContent";
const WhyChoosingUnisun = () => {
  return (
    <div className="bg-white py-lg-5 ">
      <div className="container custom_container py-5 my-xl-5 ">
        <div className="row align-items-center pe-xl-4 pb-lg-3 ">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="pe-1 col-xl-6 col-lg-7 col-md-9 col-sm-10"
          >
            <img
              width="550"
              height="650"
              className="w-100 h-100 pe-xl-4 choosing_img_spacing"
              src={chossingcar}
              alt="chossingcar"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" col-xl-6 choosing_text_spacing "
          >
            <h2 className="ff-gilroy-bold heading color_blue mb-0 mt-3">
              Why Choosing <span className=" color_red">UNISUN</span>
            </h2>
            <div className="pt-xxl-3 pt-sm-3 pt-2 pt-xl-0 pe-lg-5  me-lg-5 me-xl-0 pe-xl-0">
              {WhyChoosingData.map((obj, i) => (
                <WhyChoosingContent obj={obj} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosingUnisun;

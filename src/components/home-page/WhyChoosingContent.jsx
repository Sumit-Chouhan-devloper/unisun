import React from "react";

const WhyChoosingContent = ({ obj, i }) => {
  return (
    <>
      <div className=" d-flex mt-2 pt-1 chossing_hover ">
        <div className="pe-2 me-1">{obj.img}</div>
        <div>
          <h3 className="ff-gilroy-bold font_lg color_blue fw-bold lh_140 mb-0 ">
            {obj.heading}
          </h3>
          <p className="ff-gilroy-medium mb-0 para  fw-medium text-black opacity_07 chossing_para_font_size">
            {obj.para}
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChoosingContent;

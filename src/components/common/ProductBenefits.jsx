import React from "react";
const ProductBenefits = (props) => {
  return (
    <>
      <div className={`  ${props.manageSpacing} pt-5`}>
        <div className="container custom_container pt-5 ">
          <div
            className={`row justify-content-lg-between pt-xl-5 align-items-lg-center pb-2 mb-1 ${props.rowmanage}`}
          >
            <div className={`col-lg-6 col-md-10 ${props.image_spacing}`}>
              <img
                width="576"
                height="412"
                className="w-100 h-100"
                src={props.imgUrl}
                alt="dual-window-film"
              />
            </div>
            <div
              className={`col-lg-6 pt-lg-0 pt-sm-4 pt-3 ${props.textSpacing} `}
            >
              <h3 className={`ff-gilroy-bold fw-bold  font_3xl mb-2`}>
                {props.heading1}
                <span className={`${props.textcolor1}`}>{props.heading}</span>
                <span className={`${props.textcolor2}`}> {props.heading2}</span>
              </h3>
              <p
                className={`fw-normal font_md text-black opacity_07 mb-0 lh_174_percent ${props.subheadingPadding}`}
              >
                {props.subheading}
              </p>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBenefits;

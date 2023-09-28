import React from "react";

const AllPagesCards = ({ obj, index, spacing_top }) => {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className={`col-lg-4 mx-auto col-sm-6 mt-4`}
        key={index}
      >
        <div className="ps-xl-0 h-100">
          <div
            className={`common_cards_classes position-relative transition_02 mx-auto  d-flex flex-column justify-content-between px-3 py-3 h-100`}
          >
            <div>
              <div className="overflow-hidden mb-3 rounded-4">
                <img
                  width="332"
                  height="222"
                  src={obj.protectioncardimg}
                  alt="pro_class_img"
                  className="w-100 h-100 slider_main_img_scale transition_02"
                />
              </div>
              <p className=" ff-gilroy-bold fw-bold font_xl sub_heading color_blue mb-0 blogs_slider_heading_fs pe-lg-3 pe-lg-0">
                {obj.heading}
              </p>
              <p className="para ff-gilroy-light fw-light font_sm opacity_07 color-black mb-0">
                {obj.para}
              </p>
            </div>
            <div className={`pt-3 pb-2 ${spacing_top}`}>
              <a
                href="#"
                className="fw-normal font_sm read_btn latest_blog_btn text-decoration-none d-inline-block"
              >
                {obj.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPagesCards;

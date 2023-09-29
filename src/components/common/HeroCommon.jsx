import React from "react";

const HeroCommon = (props) => {
  return (
    <>
      <div id="header" className={`py-md-5 py-4 ${props.herocommonbg}`}>
        <div className="container custom_container py-4 position-relative">
          <div className="py-lg-5 py-4 my-5">
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="ff-gilroy-bold common_herospacing text-center text-white font_5xl fw-bold mb-0"
            >
              {props.heading}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className={`ff-gilroy-medium fw-medium font_lg text-white opacity_08 m-0 mt-2 text-center mx-auto col-xl-8 d-none ${props.classheropara}`}
            >
              {props.heropara1}
              <span className="color_red fw-bold ff-gilroy-bold mx-2">
                {props.heropara2}
              </span>
              {props.heropara3}
            </p>
          </div>

          {/* <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="d-flex align-items-center gap-2 position-absolute bottom-0 start-0 page_indicator ps-2 flex-wrap"
          >
            <Link
              to="/"
              className="d-flex align-items-center gap-1 text-decoration-none"
            >
              <h3
                className={`text-white font_sm fw-normal mb-0 transition_02 home_text_hover hero_tabs ${props.hidden}`}
              >
                <span className="me-2">
                  <HomeIcon />
                </span>
                Home
              </h3>
            </Link>
            <span className="d-flex align-items-center gap-2 ps-1">
              <GreaterArrow />
              <Link
                to="/"
                className="text-white font_sm fw-normal mb-0 ps-1 text-decoration-none transition_02"
              >
                Product
              </Link>
            </span>
            <span className="d-flex align-items-center gap-2 ps-1">
              <GreaterArrow />
              <Link
                to={props.linkpath}
                className="text-white ff-gilroy-bold font_sm fw-bold mb-0 ps-1 text-decoration-none transition_02"
              >
                {props.pagename}
              </Link>
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroCommon;

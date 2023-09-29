import React from "react";
import solarEnergy from "../../assets/images/webp/solar-energy-image.webp";
import blog_first from "../../assets/images/png/related-blog-first-img.png";
import blog_secound from "../../assets/images/png/related-blog-second-img.png";
import blog_third from "../../assets/images/png/related-blog-third-img.png";
import blog_four from "../../assets/images/png/related-blog-fourth-img.png";
import blog_five from "../../assets/images/png/related-blog-fifth-img.png";
import blog_six from "../../assets/images/png/related-blog-last-img.png";
import { Col } from "react-bootstrap";
const BlogWindow = () => {
  return (
    <>
      <section className="py-5">
        <div className="container custom_container pb-md-5 mb-xl-5 position-relative">
          <h2 className="ff-gilroy-bold fw-bold clr_black font_4xl pt-lg-2 mb-0">
            How is solar control window film used to
            <span className="d-lg-block"> save energy.</span>
          </h2>
          <p className="fw-normal font_sm clr_black opacity_07 pt-3 mb-4 pb-3">
            Published: 11 December, 2023
          </p>
          <div className="row justify-content-between">
            <Col lg={8}>
              <img className="w-100" src={solarEnergy} alt="solar-energy" />
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1 pt-4 mt-3">
                Solar control window film is a type of film that can be used to
                improve the energy efficiency of both homes and cars. By
                reducing the amount of solar heat that enters a building or a
                vehicle, this film can help to reduce the load on HVAC systems
                or car air conditioning systems, leading to significant energy
                savings
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1">
                Solar radiation is composed of different types of
                electromagnetic radiation, including ultraviolet (UV) light,
                visible light, and infrared radiation. UV light makes up about
                5% of the total solar radiation, while visible light makes up
                about 43% and infrared radiation makes up about 52%
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1">
                UNISUN solar control window film saves energy by blocking or
                reflecting different portions of the solar radiation spectrum in
                the following ways:
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1 lh_174_percent">
                <span className="ff-gilroy-bold fw-bold clr_black font_xl opacity-1">
                  1.
                </span>
                All the window films from UNISUN are designed to block UV light,
                which can also help to protect the interior of a building or
                vehicle from fading and deterioration.
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1 lh_174_percent">
                <span className="ff-gilroy-bold fw-bold clr_black font_xl opacity-1">
                  2.
                </span>
                Any window film from UNISUN is designed to either reflect or
                absorb infrared radiation, which can help to reduce the amount
                of heat gain in a building or vehicle. UNISUN doesn’t provide
                old fashioned dyed film which cannot substantially reflect or
                absorb infrared radiation, thus is not helpful to improve the
                energy effiency.
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1 lh_174_percent">
                <span className="ff-gilroy-bold fw-bold clr_black font_xl opacity-1">
                  3.
                </span>
                Similar as those from other vendors, the window film from UNISUN
                is designed to block part of the visible light to provide the
                desired level of darkness for the customer.
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1">
                There are several different types of solar control window film
                that are available, each with its own unique properties.
                Reflective film is one type of film that is designed to reflect
                the sun's rays, which can help to keep the interior of a
                building or vehicle cooler. Some types of metallized film is
                another type of film that is designed to reduce the amount of
                heat loss in a building or vehicle, which can help to reduce the
                need for heating or cooling. Infrared blocking film is designed
                to block the sun's infrared rays, which are responsible for much
                of the heat gain in a building or vehicle.
              </p>
              <p className="fw-normal font_sm clr_black opacity_07 pb-sm-1">
                Installing solar control window film is a relatively simple
                process that can be done for both homes and cars. The first step
                is to prepare the windows or car windows by cleaning them
                thoroughly to ensure that the film will adhere properly. Once
                the windows are clean, the film can be applied by cutting it to
                the proper size, peeling off the backing, and applying the film
                to the window. It is important to smooth out any bubbles that
                may form during the installation process. The film should be
                maintained and cleaned as needed to keep it looking good and to
                ensure that it continues to perform at its best.
              </p>
              <div className="p-4 bottom_para_bg rounded-2 fw-normal mt-4 font_sm clr_black opacity_07">
                In conclusion, solar control window film is an effective way to
                improve the energy efficiency of both homes and cars. By
                reducing the amount of heat gain and reducing the load on HVAC
                systems or car air conditioning systems, solar control window
                film can lead to significant energy savings. There are several
                different types of film available, each with its own unique
                properties, so it is important to choose the right film for your
                specific needs. Installing solar control window film is a simple
                process that can be done for both homes and cars, and with
                proper care and maintenance, the film can last for many years
              </div>
            </Col>
            <Col className="ps-xl-5 px-lg-3" lg={4}>
              <div className="position-sticky top_30">
                <h4 className="ff-gilroy-semibold fw-semibold font_lg color_blue pb-1 mb-sm-3 mb-0 pt-4 mt-sm-4 mt-lg-0 pt-lg-0">
                  Related Blogs
                </h4>
                <div className="d-flex align-items-center py-sm-4 py-3 blog_bottom_border">
                  <div>
                    <img
                      className="related_blog_img"
                      src={blog_first}
                      alt="girl"
                    />
                  </div>
                  <div className="ps-3">
                    <p className="font_xsm fw-normal color_blue mb-0 opacity_08">
                      PRODUCTS
                    </p>
                    <p className="ff-gilroy-medium fw-medium clr_black font_sm mb-0">
                      Why is Window Tinting Necessary to Protect Your Skin
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-sm-4 py-3 blog_bottom_border">
                  <div>
                    <img
                      className="related_blog_img"
                      src={blog_secound}
                      alt="girl"
                    />
                  </div>
                  <div className="ps-3">
                    <p className="font_xsm fw-normal color_blue mb-0 opacity_08">
                      PRODUCTS
                    </p>
                    <p className="ff-gilroy-medium fw-medium clr_black font_sm mb-0">
                      Why is Window Tinting Necessary to Protect Your Skin
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-sm-4 py-3 blog_bottom_border">
                  <div>
                    <img
                      className="related_blog_img"
                      src={blog_third}
                      alt="girl"
                    />
                  </div>
                  <div className="ps-3">
                    <p className="font_xsm fw-normal color_blue mb-0 opacity_08">
                      PRODUCTS
                    </p>
                    <p className="ff-gilroy-medium fw-medium clr_black font_sm mb-0">
                      Why is Window Tinting Necessary to Protect Your Skin
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-sm-4 py-3 blog_bottom_border">
                  <div>
                    <img
                      className="related_blog_img"
                      src={blog_four}
                      alt="girl"
                    />
                  </div>
                  <div className="ps-3">
                    <p className="font_xsm fw-normal color_blue mb-0 opacity_08">
                      PRODUCTS
                    </p>
                    <p className="ff-gilroy-medium fw-medium clr_black font_sm mb-0">
                      Why is Window Tinting Necessary to Protect Your Skin
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-sm-4 py-3 blog_bottom_border">
                  <div>
                    <img
                      className="related_blog_img"
                      src={blog_five}
                      alt="girl"
                    />
                  </div>
                  <div className="ps-3">
                    <p className="font_xsm fw-normal color_blue mb-0 opacity_08">
                      PRODUCTS
                    </p>
                    <p className="ff-gilroy-medium fw-medium clr_black font_sm mb-0">
                      Why is Window Tinting Necessary to Protect Your Skin
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-sm-4 py-3 blog_bottom_border">
                  <div>
                    <img
                      className="related_blog_img"
                      src={blog_six}
                      alt="girl"/>
                  </div>
                  <div className="ps-3">
                    <p className="font_xsm fw-normal color_blue mb-0 opacity_08">
                      PRODUCTS
                    </p>
                    <p className="ff-gilroy-medium fw-medium clr_black font_sm mb-0">
                      Why is Window Tinting Necessary to Protect Your Skin
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogWindow;

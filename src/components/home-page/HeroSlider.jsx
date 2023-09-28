import React, { useRef } from "react";
import Header from "../../components/common/Header";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const heroSlider = useRef();
  return (
    <div id="Hero_slider">
      <Header btnText="Shop" removeBtn="d-none" />
      <div className="position-relative">
        <button
          onClick={() => heroSlider.current.slickPrev()}
          className="hero_prev_slide d-none d-sm-flex align-items-center justify-content-center border-0 position-absolute top-50 translate-middle-y z-1 rounded-pill"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9326 18.4395C15.141 18.2311 15.2451 17.9845 15.2451 17.6995C15.2451 17.415 15.141 17.1686 14.9326 16.9603L8.82845 10.8561L14.9535 4.73112C15.1479 4.53668 15.2451 4.29362 15.2451 4.00195C15.2451 3.71029 15.141 3.46029 14.9326 3.25195C14.7243 3.04362 14.4776 2.93945 14.1926 2.93945C13.9082 2.93945 13.6618 3.04362 13.4535 3.25195L6.45345 10.2728C6.37012 10.3561 6.31095 10.4464 6.27595 10.5436C6.24151 10.6408 6.22428 10.745 6.22428 10.8561C6.22428 10.9672 6.24151 11.0714 6.27595 11.1686C6.31095 11.2658 6.37012 11.3561 6.45345 11.4395L13.4743 18.4603C13.6687 18.6547 13.9082 18.752 14.1926 18.752C14.4776 18.752 14.7243 18.6478 14.9326 18.4395Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => heroSlider.current.slickNext()}
          className="hero_prev_slide d-none d-sm-flex align-items-center justify-content-center border-0 position-absolute top-50 translate-middle-y z-1 rounded-pill"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9326 18.4395C15.141 18.2311 15.2451 17.9845 15.2451 17.6995C15.2451 17.415 15.141 17.1686 14.9326 16.9603L8.82845 10.8561L14.9535 4.73112C15.1479 4.53668 15.2451 4.29362 15.2451 4.00195C15.2451 3.71029 15.141 3.46029 14.9326 3.25195C14.7243 3.04362 14.4776 2.93945 14.1926 2.93945C13.9082 2.93945 13.6618 3.04362 13.4535 3.25195L6.45345 10.2728C6.37012 10.3561 6.31095 10.4464 6.27595 10.5436C6.24151 10.6408 6.22428 10.745 6.22428 10.8561C6.22428 10.9672 6.24151 11.0714 6.27595 11.1686C6.31095 11.2658 6.37012 11.3561 6.45345 11.4395L13.4743 18.4603C13.6687 18.6547 13.9082 18.752 14.1926 18.752C14.4776 18.752 14.7243 18.6478 14.9326 18.4395Z"
              fill="white"
            />
          </svg>
        </button>
        <Slider ref={heroSlider} {...settings}>
          <div className="hero_section">
            <div className="container custom_container">
              <div className="row flex-column justify-content-end align-items-center hero_content py-4 py-sm-5">
                <div className="col-12 color_white d-flex align-items-lg-end justify-content-between flex-column flex-lg-row">
                  <div className="z-3 position-relative">
                    <h2 className="fw-bold">Unisun Window Films</h2>
                    <p className="fw-normal mb-0">
                      The right choice to protect your skin and save energy for
                      your home, business and vehicles
                    </p>
                  </div>
                  <div className="learn_more_link mt-3 mt-lg-0">
                    <button className="common_btn fw-semibold font_xs h-100 d-flex align-items-center justify-content-center color-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_section_bg_img2 hero_slider">
            <div className="container custom_container">
              <div className="row flex-column justify-content-end align-items-center hero_content py-4 py-sm-5">
                <div className="col-12 color_white d-flex align-items-lg-end justify-content-between flex-column flex-lg-row">
                  <div className="z-3 position-relative">
                    <h2 className="fw-bold">
                      Unisun Safety & Security Window Films
                    </h2>
                    <p className="fw-normal mb-0">
                      Add protection for the windows in your home, business and
                      vehicles
                    </p>
                  </div>

                  <div className="learn_more_link mt-3 mt-lg-0 ">
                    <button className="common_btn fw-semibold font_xs h-100 d-flex align-items-center justify-content-center color-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_section_bg_img3 hero_slider">
            <div className="container custom_container">
              <div className="row flex-column justify-content-end align-items-center hero_content py-4 py-sm-5">
                <div className="col-12 color_white d-flex align-items-lg-end justify-content-between flex-column flex-lg-row">
                  <div className="z-3 position-relative">
                    <h2 className="fw-bold">Unisun Paint Protection Films</h2>
                    <p className="fw-normal mb-0">
                      Protect the paintings of your vehicle and make your car
                      stylish
                    </p>
                  </div>

                  <div className="learn_more_link mt-3 mt-lg-0">
                    <button className="common_btn fw-semibold font_xs h-100 d-flex align-items-center justify-content-center color-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_section_bg_img4 hero_slider">
            <div className="container custom_container">
              <div className="row flex-column justify-content-end align-items-center hero_content py-4 py-sm-5">
                <div className="col-12 color_white d-flex align-items-lg-end justify-content-between flex-column flex-lg-row">
                  <div className="z-3 position-relative">
                    <h2 className="fw-bold">Unisun Antibacterial Films</h2>
                    <p className="fw-normal mb-0">
                      Provide constant protection for the surfaces of your
                      devices, appliance and countertop
                    </p>
                  </div>
                  <div className="learn_more_link mt-3 mt-lg-0">
                    <button className="common_btn fw-semibold font_xs h-100 d-flex align-items-center justify-content-center color-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;

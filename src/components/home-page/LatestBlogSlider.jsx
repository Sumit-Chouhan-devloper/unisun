import React, { useRef } from "react";
import Slider from "react-slick";
import { BlogsCardData } from "../common/Helper";
import { LatestBlogLeftArrow, LatestBlogRightArrow } from "../common/Icons";
import BlogContent from "./BlogContent";

function LatestBlogSlider(props) {
  const sliderBtn = useRef();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    // autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
          // autoplay: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          // autoplay: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="blog_slider"
      data-aos="zoom-out"
      data-aos-delay="500"
      data-aos-duration="1000"
      className={`py-lg-5 pt-4 pb-md-5 mt-4 mt-sm-0 position-relative latest_news_section ${props.spacing}`}
    >
      <div
        className={`container custom_container position-relative ${props.spacing} pb-5 mb-5 px-lg-0`}
      >
        <span
          onClick={() => sliderBtn.current.slickPrev()}
          className="position-absolute blog_slider_left_arrow cursor_pointer blogs_arrow_hover blogs_arrows_border d-none d-xl-flex"
        >
          <LatestBlogLeftArrow />
        </span>

        <span
          onClick={() => sliderBtn.current.slickNext()}
          className="position-absolute blog_slider_right_arrow cursor_pointer blogs_arrow_hover blogs_arrows_border d-none d-xl-flex"
        >
          <LatestBlogRightArrow />
        </span>
        <h2
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          className={`ff-gilroy-bold heading color_blue text-center pb-sm-2 ${props.bottom_space}`}
        >
          {props.heading} <span className="color_red">{props.heading2}</span>
        </h2>

        <Slider ref={sliderBtn} {...settings} className="blogs_slider">
          {BlogsCardData.map((obj, i) => (
            <BlogContent obj={obj} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LatestBlogSlider;
LatestBlogSlider.defaultProps = {
  heading: "Our Latest",
  heading2: "Blogs",
};

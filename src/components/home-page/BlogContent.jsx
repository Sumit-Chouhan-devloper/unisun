import React from "react";

const BlogContent = ({ obj, i, topSpacing }) => {
  return (
    <>
      <div className={`ps-xl-0 py-md-4 py-3 h-100 mx-2 ${topSpacing}`} key={i}>
        <div className="blogs_card position-relative h-100 transition_02 mx-auto slider_box_height d-flex flex-column justify-content-between px-3 py-3">
          <div>
            <div className="overflow-hidden mb-3 rounded-4">
              <img
                width="332"
                height="222"
                src={obj.blogsImage}
                alt="news"
                className="w-100 h-100 slider_main_img_scale transition_02 "
              />
            </div>
            <p className=" ff-gilroy-semibold  fw-semibold font_xl sub_heading color_blue mb-0 blogs_slider_heading_fs ">
              {obj.blogsheading}
            </p>
            <p className="para pe-xl-5 ff-gilroy-light pe-md-2 pe-sm-5 blog_cards_text fw-light font_14 font_sm opacity_07 color-black mb-0">
              {obj.blogsPara}
            </p>
          </div>
          <div className="pt-3 pb-2">
            <a
              aria-label="Read More"
              href="#ReadMore"
              className="fw-normal font_sm read_btn d-inline-block latest_blog_btn text-decoration-none"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;

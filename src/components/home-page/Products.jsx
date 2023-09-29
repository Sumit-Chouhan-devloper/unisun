import React from "react";
import { LatestProductsData } from "../common/Helper";

const Products = () => {
  return (
    <div id="products" className="pb-md-5 pb-3">
      <div className="container mb-xxl-5 pb-sm-4 pb-sm-5 custom_container">
        <h2
          data-aos="fade-down"
          data-delay="300"
          data-aos-duration="1000"
          className="ff-gilroy-bold heading color_blue text-center mb-0"
        >
          Our Latest <span className="color_red">Products</span>
        </h2>
        <div className="row mt-4 mt-lg-5 pt-2 pb-xl-5 ">
          {LatestProductsData.map((obj, i) => (
            <div
              className={`${
                i % 2 === 1 ? " productcard_spacing " : ""
              } col-sm-6 col-11 mx-auto`}
            >
              <div
                data-aos="fade-down"
                data-delay="800"
                data-aos-duration="1000"
                className="position-relative products_card"
              >
                <img
                  width="558"
                  height="474"
                  className="w-100 h-100 mb-3 mb-sm-4 pb-1 border_radius_10"
                  src={obj.img}
                  alt="latestproducts"
                />
                <p className="text-capitalize text-center position-absolute products_para_position w-100 color_white font_2xl fw-medium ">
                  {obj.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

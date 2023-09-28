import React from "react";

const CardsDataRight = ({ item, index }) => {
  return (
    <>
      <div className=" ps-lg-4" key={index}>
        <div className="d-flex align-items-start  pb-1 mb-3 feature_detail">
          <div className="rounded-pill d-flex justify-content-center align-items-center transition_02">
            {item.svgIcon}
          </div>
          <div className="ps-sm-3 ps-2">
            <h4 className="ff-gilroy-medium font_lg text-black fw-medium mb-1">
              {item.heading}
            </h4>
            <p className="fw-normal font_sm text_black opacity_07 mb-0">
              {item.Para}
              <span className=" ff-gilroy-semibold">{item.pera1} </span>
              <em> {item.pera2}</em>
              <span className=" ff-gilroy-semibold">{item.pera3} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsDataRight;

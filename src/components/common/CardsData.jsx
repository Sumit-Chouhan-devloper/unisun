import React from "react";

const CardsData = ({ obj, index, w_full, BetweenGap, text }) => {
  return (
    <>
      <div className={`col-lg-6 ${w_full}`} key={index}>
        <div
          className={`d-flex  align-items-start pb-1 mb-3 feature_detail ${BetweenGap}`}
        >
          <div className="rounded-pill d-flex justify-content-center align-items-center transition_02">
            {obj.svgIcon}
          </div>
          <div className="ps-sm-3 ps-2">
            <h4 className="ff-gilroy-medium font_lg text-black fw-medium mb-1">
              {obj.heading}
            </h4>
            <p className="fw-normal font_sm text_black opacity_07 mb-0">
              {obj.Para}
              <span className=" ff-gilroy-semibold">{obj.pera1} </span>
              <em> {obj.pera2}</em>
              <span className=" ff-gilroy-semibold">{obj.pera3} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsData;

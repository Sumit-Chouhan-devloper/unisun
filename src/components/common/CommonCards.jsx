import React from "react";
import CardsData from "./CardsData";
import CardsDataRight from "./CardsDataRight";
const CommonCards = (props) => {
  return (
    <>
      <div className="container custom_container">
        <div className="row pt-lg-5 pt-3">
          <div className="col-lg-6">
            {props.mapDataLeft.map((obj, index) => {
              return <CardsData w_full="w-100" obj={obj} index={index} />;
            })}
          </div>
          <div className="col-lg-6">
            {props.mapDataRight.map((item, index) => {
              return <CardsDataRight item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default CommonCards;

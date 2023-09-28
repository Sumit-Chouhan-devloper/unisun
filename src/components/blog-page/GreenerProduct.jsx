import React from "react";
import { Col, Row } from "react-bootstrap";
import product_img from "../../assets/images/webp/greener-product-img.webp";
const GreenerProduct = () => {
  return (
    <>
      <section>
        <div className="container custom_container py-5 my-lg-5">
          <h3 className="ff-gilroy-bold fw-bold font_3xl color_blue pb-xl-5 mb-md-4  mb-2 text-lg-start text-center">
            For a more sustainable future,
            <span className="color_red"> Use UNISUN Solutions !</span>
          </h3>
          <Row className="justify-content-lg-between justify-content-center align-items-center pt-2">
            <Col lg={6}>
              <div className="pe-xl-4">
                <h3 className="ff-gilroy-bold fw-bold font_3xl color_blue">
                  Greener <span className="color_red">Products</span>
                </h3>
                <p className="fw-normal font_md clr_black mb-0">
                  Unisun window films are designed to reduce the amount of solar
                  heat gain and glare that enters a building through its
                  windows.
                </p>
                <ul className="py-xl-4 py-md-2">
                  <li className="fw-normal font_md clr_black opacity_07 pt-xl-4 pt-2">
                    By reducing solar heat gain, Unisun window films can
                    decrease the need for air conditioning during hot weather,
                    thus lowering energy consumption and utility bills. Lower
                    energy consumption means.
                  </li>
                  <li className="fw-normal font_md clr_black opacity_07 pt-xl-4 pt-2">
                    Installing window films is often more cost-effective than
                    replacing windows with more energy-efficient options, making
                    it an attractive option for existing buildings, thus making
                    better use of existing windows instead of dump them. Given
                    the amount of existing windows in the world, this saves huge
                    for a better sustainable future.
                  </li>
                  <li className="fw-normal font_md clr_black opacity_07 pt-xl-4 pt-2">
                    For instance, Unisun architectural window film become carbon
                    neural in around one months after the installation, and then
                    is able to provide continued greenhouse gas reductions for
                    10 years or longer.
                  </li>
                </ul>
                <p className="fw-normal font_md clr_black mb-0">
                  l Unisun paint protection film protects the auto paint nicely.
                  Without PPF, the scratched auto paint has to be repainted,
                  which causes significant amount of VOC emission. Thus using
                  Unisun PPF contributes to a more sustainable environment.
                </p>
              </div>
            </Col>
            <Col lg={6} md={11}>
              <img
                className="w-100 greener_product_img mt-sm-4 mt-lg-0 mt-3"
                src={product_img}
                alt="product-img"
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default GreenerProduct;

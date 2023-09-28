import React from "react";
import { Col, Row } from "react-bootstrap";
import red_checkmark from "../../assets/images/svg/red-checkmark-circle.svg";
import logos from "../../assets/images/png/choose-logo-img.png"
const KeyAdvantege = () => {
  return (
    <>
      <section>
        <div className="container custom_container py-5 my-md-5">
            <Row className="align-items-center justify-content-md-between justify-content-center">
                <Col md={7}>
                    <h4 className="color_dark ff-gilroy-bold fw-bold font_xl mb-0">Key Advantages:</h4>
                    <div className="d-flex align-items-center pt-sm-4 pt-3">
                        <img height={24} width={24} src={red_checkmark} alt="red-checkmark-circle" />
                        <p className="ff-gilroy-semibold font_sm fw-semibold clr_black mb-0 ps-2">Talented engineering team with rich experience in the coating & laminating industry</p>
                    </div>
                    <div className="d-flex align-items-center pt-2 mt-1">
                        <img height={24} width={24} src={red_checkmark} alt="red-checkmark-circle" />
                        <p className="ff-gilroy-semibold font_sm fw-semibold clr_black mb-0 ps-2">Customized solution with high performance and lower cost</p>
                    </div>
                    <div className="d-flex align-items-center pt-2 mt-1">
                        <img height={24} width={24} src={red_checkmark} alt="red-checkmark-circle" />
                        <p className="ff-gilroy-semibold font_sm fw-semibold clr_black mb-0 ps-2">Premium manufacturing quality with all products produced at ISO9001 and IATF16949 certified facility.</p>
                    </div>
                </Col>
                <Col md={5} xs={8} sm={7} lg={4} className="pt-sm-4 pt-lg-0 pt-3">
                    <img className="w-100" src={logos} alt="logos" />
                </Col>
            </Row>
        </div>
      </section>
    </>
  );
};

export default KeyAdvantege;

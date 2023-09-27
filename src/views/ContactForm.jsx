import { Col, Row, Form } from "react-bootstrap";
import {
  FormCalling,
  FormLocation,
  FormMassage,
  WorkingHours,
} from "../components/common/Icons";
const ContactForm = () => {
  return (
    <>
      <section className="py-5">
        <div className="container py-lg-5 my-xl-5">
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="pb-3 pb-sm-0">
              <h2 className="font_5xl color_dark_black fw-bold ff-gilroy-bold mb-2">
                Contact us
              </h2>
              <p className="color_dark_black fw-normal fs_md opacity_07 mb-0 pb-4 mb-sm-3">
                We’re here to help. Whether you’re current or prospective
                dealer, or looking for information on Unisun products or
                services, please contact us by using the form on the right.
              </p>
              <div className="d-flex">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <FormLocation />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className="ff-gilroy-semibold fw-semibold color_dark_black fs_md mb-0">
                    Our Location
                  </h4>
                  <p className="color_dark_black fw-normal fs_md opacity_07 mb-0">
                    7847 Dunbrook Rd Unit C San Diego,{" "}
                    <span className=" d-lg-block">CA92126 USA</span>
                  </p>
                  <p className="color_dark_black fw-normal fs_md opacity_07 mb-0">
                    49 Merus Ct., Fenton, MO 63026
                  </p>
                </div>
              </div>
              <div className="d-flex py-sm-4 py-3">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <FormMassage />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className=" ff-gilroy-semibold fw-semibold color_dark_black fs_md mb-0">
                    Email Address
                  </h4>
                  <a href="mailto:info@unisunfilms.com" className="color_dark_black fw-normal fs_md opacity_07 mb-0">
                    info@unisunfilms.com
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <FormCalling />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className=" ff-gilroy-semibold fw-semibold color_dark_black fs_md mb-0">
                    Phone Number
                  </h4>
                  <a href="callto:1-858-588-1260" className="color_dark_black fw-normal fs_md opacity_07 mb-0">
                    1-858-588-1260
                  </a>
                </div>
              </div>
              <div className="d-flex py-sm-4 py-3">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <WorkingHours />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className=" ff-gilroy-semibold fw-semibold color_dark_black fs_md mb-0">
                    Business Hours
                  </h4>
                  <p className="color_dark_black fw-normal fs_md opacity_07 mb-0">
                    8:00am ~ 5:00pm PST
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={6}>
              <form className="contact_form bg_light_blue">
                <p className="fw-normal color_dark_black text_md">
                Are you a
                </p>
                <div className="d-flex">
                  <button className=" ff-gilroy-medium dealer_btn transition_03 bg_blue me-2 fs_lg fw-medium color_white">
                    Dealer
                  </button>
                  <button className=" ff-gilroy-medium consumer_btn transition_03 ms-1 fs_lg fw-medium">
                    Consumer
                  </button>
                </div>
                <p className="fw-normal color_red text_sm my-3 py-1">
                  Required Fields*
                </p>
                <div className="d-flex justify-content-between gap-sm-4 gap-1 pt-sm-3 mt-1 flex-column flex-sm-row">
                  <div className="w-100">
                    <p className="fw-normal color_dark_black text_md mb-2">
                      First Name*
                    </p>
                    <input className="w-100" type="text" />
                  </div>
                  <div className="w-100">
                    <p className="fw-normal color_dark_black text_md mb-2">
                      Last Name*
                    </p>
                    <input className="w-100" type="text" />
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-sm-4 gap-1 pt-sm-3 mt-1 flex-column flex-sm-row pt-sm-3 mt-1">
                  <div className="w-100">
                    <p className="fw-normal color_dark_black text_md mb-2">
                      Email Id*
                    </p>
                    <input className="w-100" type="text" />
                  </div>
                  <div className="w-100">
                    <p className="fw-normal color_dark_black text_md mb-2">
                      Phone Number
                    </p>
                    <input className="w-100" type="text" />
                  </div>
                </div>
                <div className="w-100 pt-sm-3 mt-1">
                  <p className="fw-normal color_dark_black text_md mb-2">
                    Street Address*
                  </p>
                  <input className="w-100" type="text" />
                </div>
                <div className="d-flex justify-content-between gap-sm-4 gap-1 flex-column flex-sm-row pt-sm-3 mt-1">
                  <div className="w-100">
                    <p className="fw-normal color_dark_black text_md mb-2">
                      City*
                    </p>
                    <input className="w-100" type="text" />
                  </div>
                  <div className="w-100">
                    <p className="fw-normal color_dark_black text_md mb-2">
                      State*
                    </p>
                    <input className="w-100" type="text" />
                  </div>
                </div>
                <div className="w-100 pt-sm-3 mt-1">
                  <p className="fw-normal color_dark_black text_md mb-2">
                    Country*
                  </p>
                  <input className="w-100" type="text" />
                </div>
                <div>
                  <p className="fw-normal color_dark_black text_md mb-2 pt-sm-3 mt-1">
                    I'm interested in
                  </p>
                  <Form.Select
                    aria-label="Default select example"
                    className="py-2 rounded-0"
                  >
                    <option>Automotive window tint</option>
                    <option className="hoverpink" value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <p className="fw-normal color_dark_black text_md mb-2 pt-sm-3 mt-1">
                  Message*
                </p>
                <textarea className="w-100 fw-normal color_dark_black text_md px-3"></textarea>
                <div className="d-flex align-items-center py-sm-4 my-2">
                  <input type="checkbox"/>
                  <p className="fw-normal color_dark_black text_md mb-0 ps-2">
                    I agree to the terms and conditions
                  </p>
                </div>
                <button className="common_btn ff-gilroy-bold fw-bold fs_md">Send Message</button>
              </form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

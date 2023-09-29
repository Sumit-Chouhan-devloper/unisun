import { Col, Row,Form } from "react-bootstrap";
import { useState } from "react";
import {
  FormCalling,
  FormLocation,
  FormMassage,
  WorkingHours,
} from "../common/Icons";
const ContactForm = () => {
  const [inputData, setInputData] = useState({
    FirstName: "",
    LastName: "",
    Number: "",
    Email: "",
    City: "",
    State: "",
    Countary: "",
    Address: "",
    IntrestedIn: "",
    Message: "",
  });
  const inputcontrol = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const FSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData({
      FirstName: "",
      LastName: "",
      Number: "",
      Email: "",
      City: "",
      State: "",
      Countary: "",
      Address: "",
      IntrestedIn: "",
      Message: "",
    });
  };
  return (
    <>
      <section className="py-5 contact_form">
        <div className="container custom_container py-md-5 mt-xl-3 mb-xl-5">
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="pb-3 pb-sm-0">
              <h2 className="font_5xl clr_black fw-bold ff-gilroy-bold mb-2">
                Contact us
              </h2>
              <p className="clr_black fw-normal font_sm opacity_07 mb-0 pb-4 mb-sm-3">
                We’re here to help. Whether you’re current or prospective
                dealer, or looking for information on Unisun products or
                services, please contact us by using the form on the right.
              </p>
              <div className="d-flex">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <FormLocation />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className="ff-gilroy-semibold fw-semibold clr_black font_sm mb-0">
                    Our Location
                  </h4>

                  <a
                    className="clr_black fw-normal font_sm opacity_07 mb-0 transition_02"
                    href="https://maps.google.com/maps"
                  >
                    7847 Dunbrook Rd Unit C San Diego,
                    <span className="d-lg-block">CA92126 USA</span>
                    49 Merus Ct., Fenton, MO 63026
                  </a>
                </div>
              </div>
              <div className="d-flex py-sm-4 py-3">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <FormMassage />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className="ff-gilroy-semibold fw-semibold clr_black font_sm mb-0">
                    Email Address
                  </h4>
                  <a
                    href="mailto:info@unisunfilms.com"
                    className="clr_black fw-normal font_sm opacity_07 mb-0 transition_02"
                  >
                    info@unisunfilms.com
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <FormCalling />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className=" ff-gilroy-semibold fw-semibold clr_black font_sm mb-0">
                    Phone Number
                  </h4>
                  <a
                    href="callto:1-858-588-1260"
                    className="clr_black fw-normal font_sm opacity_07 mb-0 transition_02"
                  >
                    1-858-588-1260
                  </a>
                </div>
              </div>
              <div className="d-flex py-sm-4 py-3">
                <div className="forms_icon d-flex justify-content-center align-items-center">
                  <WorkingHours />
                </div>
                <div className="ps-3 ms-1">
                  <h4 className=" ff-gilroy-semibold fw-semibold clr_black font_sm mb-0">
                    Business Hours
                  </h4>
                  <p className="clr_black fw-normal font_sm opacity_07 mb-0">
                    8:00am ~ 5:00pm PST
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={6}>
              <form className="contact_form bg_light_blue"  onSubmit={FSubmit}>
                <p className="fw-normal clr_black font_sm">Are you a</p>
                <div className="d-flex align-items-center">
                  <button className="ff-gilroy-medium dealer_btn transition_03 bg_blue me-2 font_md fw-medium color_white">
                    Dealer
                  </button>
                  <button className="ff-gilroy-medium consumer_btn transition_03 ms-1 font_md fw-medium">
                    Consumer
                  </button>
                </div>
                <p className="fw-normal color_red font_xs my-3 py-1">
                  Required Fields*
                </p>
                <div
                  className="d-flex justify-content-between gap-sm-4 gap-1 flex-column flex-sm-row"
                
                >
                  <div className="w-100">
                    <p className="fw-normal clr_black font_sm mb-2">
                      First Name*
                    </p>
                    <input
                      className="w-100"
                      name="FirstName"
                      onChange={inputcontrol}
                      value={inputData.FirstName}
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-100">
                    <p className="fw-normal clr_black font_sm mb-2">
                      Last Name*
                    </p>
                    <input
                      name="LastName"
                      className="w-100"
                      onChange={inputcontrol}
                      value={inputData.LastName}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-sm-4 gap-1 pt-sm-3 mt-1 flex-column flex-sm-row pt-sm-3 mt-1">
                  <div className="w-100">
                    <p className="fw-normal clr_black font_sm mb-2">
                      Email Id*
                    </p>
                    <input
                      name="Email"
                      className="w-100"
                      onChange={inputcontrol}
                      value={inputData.Email}
                      type="Email"
                      required
                    />
                  </div>
                  <div className="w-100">
                    <p className="fw-normal clr_black font_sm mb-2">
                      Phone Number
                    </p>
                    <input
                      name="Number"
                      className="w-100"
                      onChange={inputcontrol}
                      value={inputData.Number}
                      type="number"
                    />
                  </div>
                </div>
                <div className="w-100 pt-sm-3 mt-1">
                  <p className="fw-normal clr_black font_sm mb-2">
                    Street Address*
                  </p>
                  <input
                    name="Address"
                    className="w-100"
                    onChange={inputcontrol}
                    value={inputData.Address}
                    type="text"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between gap-sm-4 gap-1 flex-column flex-sm-row pt-sm-3 mt-1">
                  <div className="w-100">
                    <p className="fw-normal clr_black font_sm mb-2">City*</p>
                    <input
                      name="City"
                      className="w-100"
                      onChange={inputcontrol}
                      value={inputData.City}
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-100">
                    <p className="fw-normal clr_black font_sm mb-2">State*</p>
                    <input
                      name="State"
                      className="w-100"
                      onChange={inputcontrol}
                      value={inputData.State}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="w-100 pt-sm-3 mt-1">
                  <p className="fw-normal clr_black font_sm mb-2">Country*</p>
                  <input
                    name="Countary"
                    className="w-100"
                    onChange={inputcontrol}
                    value={inputData.Countary}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <p className="fw-normal clr_black font_sm mb-2 pt-sm-3 mt-1">
                    I'm interested in
                  </p>
                  <Form.Select
                    aria-label="Default select example"
                    className="py-2 rounded-0"
                    name="IntrestedIn"
                    onChange={inputcontrol}
                    value={inputData.IntrestedIn}
                  >
                    <option className="fw-normal clr_black font_sm">
                      Automotive window tint
                    </option>
                    <option className="fw-normal clr_black font_sm" value="1">
                      One
                    </option>
                    <option className="fw-normal clr_black font_sm" value="2">
                      Two
                    </option>
                    <option className="fw-normal clr_black font_sm" value="3">
                      Three
                    </option>
                  </Form.Select>
                </div>
                <p className="fw-normal clr_black font_sm mb-2 pt-sm-3 mt-1">
                  Message*
                </p>
                <textarea
                  className="w-100 fw-normal clr_black font_sm px-3 pt-2"
                  onChange={inputcontrol}
                  value={inputData.Message}
                  name="Message"
                  required
                ></textarea>
                <div className="d-flex align-items-center py-sm-4 my-2">
                  <input type="checkbox" />
                  <p className="fw-normal clr_black font_sm mb-0 ps-2">
                    I agree to the terms and conditions
                  </p>
                </div>
                <button className="common_btn" type="submit">
                  Send Message
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
export default ContactForm;

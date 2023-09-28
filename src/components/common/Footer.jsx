import React from "react";
import footerlogo from "../../assets/images/svg/footer-logo.svg";
import { DiscordIcon, EmailIcon, FacebookIcon, LinkdinIcon, LocationIcon, TwiterIcon } from "./Icons";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg_blue">
      <div className="container custom_container pt-4 pt-sm-5 pb-2 pb-sm-4">
        <div className="row px-sm-2 mt-1 mb-3 ">
          <div className="col-xl-4 px-xl-0 px-3 ps-lg-0 ps-xl-1 text-lg-start ">
            <div>
              <Link to="/">
                <img
                  width="146"
                  height="74"
                  className="cursor_pointer footer_logo_width"
                  src={footerlogo}
                  alt="footerlogo"
                />
              </Link>
              <p className="para fs_13 footer_pera_max_width opacity_07 lh_160 color_white mt-2 mt-xl-3 mb-0 pt-1">
              Driven by Innovation
              </p>
              <div>
                <p className="fs_13 mt-xl-4 mt-3 pt-sm-0 pt-2 para mb-0 color_white fw-normal opacity_07">
                  Follow Us:
                </p>
                <div className="d-flex mt-2 ">
                  <a
                    aria-label="discord"
                    className="me-2 me-sm-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.com/"
                  >
                    <DiscordIcon />
                  </a>
                  <a
                    aria-label="twitter"
                    className="me-2 me-sm-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                  >
                    <TwiterIcon />
                  </a>
                  <a
                    aria-label="twitter"
                    className="me-2 me-sm-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                  >
                    <FacebookIcon/>
                  </a>
                  <a
                    aria-label="twitter"
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                  >
                    <LinkdinIcon/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 mt-md-3 mt-xl-0 px-3 px-lg-0">
            <div className="row justify-content-between">
              <ul className="mb-0 list-unstyled px-xl-0 col-sm-6 col-lg-3 col-xl-2  text-sm-start pt-3 mt-2 mt-sm-0 pt-xl-0 ">
                <li className="fw-semibold font_sm fs_13 color_white pb-sm-2 pb-0 ">
                  {props.tab1}
                </li>
                <li className="link_margin_top">
                  <Link
                    to="/about"
                    className="text-decoration-none lh_150 footer_link_hover fw-normal font_sm fs_13  transition_03 color_white opacity_07"
                  >
                    {props.page1}
                  </Link>
                </li>
                <li className="link_margin_top">
                  <span className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07">
                    {props.page2}
                  </span>
                </li>
              </ul>
              <ul className="mb-0 pe-0 list-unstyled ps-sm-2 col-sm-6 col-lg-3  text-sm-start ps-md-1 pe-xl-0 pt-3 mt-2 mt-sm-0 pt-xl-0 ">
                <li className="fw-semibold font_sm fs_13 color_white pb-sm-2 pb-0 ">
                  {props.tab2}
                </li>
                <li className="link_margin_top">
                  <span className="text-decoration-none cursor_pointer text-nowrap lh_150 footer_link_hover fw-normal font_sm fs_13  transition_03 color_white opacity_07">
                    {props.aboutpage1}
                  </span>
                </li>
                <li className="link_margin_top">
                  <span className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07">
                    {props.aboutpage2}
                  </span>
                </li>
                <li className="link_margin_top">
                  <span className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07">
                    {props.aboutpage3}
                  </span>
                </li>
              </ul>
              <ul className="mb-0 pe-0 pe-sm-0 list-unstyled col-sm-6 col-lg-3 ps-xl-0  text-sm-start ps-md-2 pt-3 mt-2 mt-sm-0 pt-xl-0 ">
                <li className="fw-semibold font_sm fs_13 color_white pb-sm-2 pb-0 ">
                  {props.tab3}
                </li>
                <li className="link_margin_top">
                  <a
                    className="text-decoration-none text-nowrap cursor_pointer lh_150 footer_link_hover fw-normal font_sm fs_13  transition_03 color_white opacity_07"
                    href="#products"
                  >
                    {props.commercialpage1}
                  </a>
                </li>
                <li className="link_margin_top">
                  <span className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07">
                    {props.commercialpage2}
                  </span>
                </li>
                <li className="link_margin_top">
                  <span className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07">
                    {props.commercialpage3}
                  </span>
                </li>
                <li className="link_margin_top">
                  <a
                    href="/antimicrobial-film"
                    className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07"
                  >
                    {props.commercialpage4}
                  </a>
                </li>
                <li className="link_margin_top">
                  <a
                    href="/paint-protection-film"
                    className="text-decoration-none cursor_pointer footer_link_hover lh_150 fw-normal font_sm fs_13  transition_03 color_white opacity_07"
                  >
                    {props.commercialpage5}
                  </a>
                </li>
              </ul>
              <ul className="mb-0 list-unstyled col-sm-6 col-lg-3 pe-xl-0 text-sm-start ps-md-1 pt-3 mt-2 mt-sm-0 pt-xl-0  ">
                <li className="fw-semibold font_sm fs_13 color_white pb-sm-2 pb-0 ">
                  Contact Us
                </li>
                <li className="link_margin_top d-flex cursor_pointer align-items-center">
                  <span className="me-1">
                    <EmailIcon />
                  </span>
                  <a
                    className="text-decoration-none lh_150 footer_link_hover fw-normal font_sm fs_13  transition_03 color_white opacity_07"
                    href="mailto:info@unisunfilms.com"
                  >
                    info@unisunfilms.com
                  </a>
                </li>
                <li className="link_margin_top d-flex">
                  <span className="me_minus me-1">
                    <LocationIcon />
                  </span>
                  <span className="text-decoration-none lh_150 fw-normal font_sm fs_13 color_white opacity_07">
                    10531 4S Commons Dr.San Diego, CA92127 USA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_line">
        <div className="container custom_container px-2 ">
          <div className="d-lg-flex py-2 py-lg-0 justify-content-between">
            <div className="d-flex flex-wrap py-1 justify-content-center justify-content-lg-start">
              <p className="opacity_07 font_sm fs_13 cursor_pointer footer_link_hover fw-normal text-capitalize color_white mb-0 py-1 py-lg-3">
                Terms & Conditions <span className="ms-2">|</span>
              </p>
              <p className="opacity_07 ms-2 font_sm fs_13 cursor_pointer footer_link_hover fw-normal text-capitalize color_white py-1 mb-0 py-lg-3">
                Privacy Policy <span className="ms-2 opacity_0">|</span>
              </p>
              <p className="opacity_07 ms-2 font_sm fs_13 cursor_pointer footer_link_hover fw-normal text-capitalize color_white pt-1 mb-0  py-lg-3">
                Website Disclaimer
              </p>
            </div>
            <p className="opacity_07 font_sm fs_13 pt-2 fw-normal text-capitalize color_white mb-0 pb-2 py-lg-3 text-center text-lg-start">
              ©{year} ARKSCI Technologies LLC All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Logo } from "./Icons";
import { Link, NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import { useStateProvider } from "./StateProvider";
import dropsownArrow from "../../assets/images/svg/vector-white-arrow.svg";

const Header = (props) => {
  const { handldeOverlayActive } = useStateProvider();

  return (
    <>
      <nav
        className={`nav_bg position-relative z_index_custom w-100 ${props.bgColor}`}
      >
        <div className="d-block d-lg-none py-sm-2" id="navDropDownArrow">
          <div className="container custom_container">
            <div className="py-2 d-flex justify-content-between align-items-center position-relative ${props.navLogo}">
              <NavLink className="logo-img" exact to="/">
                <span className={`${props.d_none}`}>
                  <Logo />
                </span>
                <span className={`${props.hideTab2}`}> {props.navLogo}</span>
              </NavLink>
              <Link
                className={`text-decoration-none ${props.removeBtn}`}
                to="/portal-home-page"
              >
                <button className={`common_btn fw-bold font_sm `}>
                  {props.btnText}
                </button>
              </Link>
              <div
                id="nav-icon1"
                className={`hamburger-menu z_index_one ${props.removeToggle}`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={`navbar-overlay`}>
            <ul className="h-100 list-unstyled d-flex flex-column justify-content-center gap-lg-4 align-items-center m-0">
              <li className={` ${props.d_none}`}>
                <Dropdown>
                  <Dropdown.Toggle
                    className=" border-0 cursor_pointer py-0 my-0 px-0 bg-transparent d-flex align-items-center "
                    variant="success"
                  >
                    <NavLink
                      className=" border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal text-decoration-none font_sm opacity_07 text-white px-0 bg-transparent nav_custom_dropdown"
                      to
                    >
                      Automotive
                      <img
                        className=" ms-2"
                        src={dropsownArrow}
                        alt="dropsownArrow image"
                      />
                    </NavLink>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ zIndex: "99", position: "relative" }}
                    className="bg-white"
                  >
                    <NavLink
                      onClick={() => handldeOverlayActive()}
                      to="#windowtint"
                    >
                      <Dropdown.Item
                        onClick={() => handldeOverlayActive()}
                        className="bg-white"
                      >
                        <NavLink
                          style={{ zIndex: "99", position: "relative" }}
                          className="border-0 tab_custom_font cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to="/windowtint"
                        >
                          Window Tint
                        </NavLink>
                      </Dropdown.Item>
                    </NavLink>

                    <Dropdown.Item
                      onClick={() => handldeOverlayActive()}
                      className="bg-white"
                      href="/windowtint"
                    >
                      <NavLink
                        className="border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                        to="/paint-protection-film"
                      >
                        Paint Protection Film
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className={` z-index_1 ${props.d_none}`}>
                <Dropdown>
                  <Dropdown.Toggle
                    className=" border-0 cursor_pointer py-0 my-0 fw-normal font_sm text-white px-0 bg-transparent d-flex align-items-center"
                    variant="success"
                  >
                    <span className=" opacity_07 fw-normal tab_custom_font font_sm text-white">
                      Residential & Commercial
                    </span>
                    <img
                      className=" ms-2"
                      src={dropsownArrow}
                      alt="dropsownArrow image"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white">
                    <Dropdown.Item
                      onClick={() => handldeOverlayActive()}
                      className="bg-white"
                      href=""
                    >
                      <NavLink
                        className="border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                        to="/solar-control"
                      >
                        Solar Control Window Films
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handldeOverlayActive()}
                      className="bg-white"
                      href=""
                    >
                      <NavLink
                        className="border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                        to=""
                      >
                        Safety & security films
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handldeOverlayActive()}
                      className="bg-white"
                      href=""
                    >
                      <NavLink
                        className="border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                        to=""
                      >
                        Decorative window film
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handldeOverlayActive()}
                      className="bg-white"
                    >
                      <NavLink
                        className="border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                        to="/antimicrobial-film"
                      >
                        Antimicrobial Film
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={() => handldeOverlayActive()}
                      className="bg-white"
                    >
                      <NavLink
                        className="border-0 cursor_pointer tab_custom_font py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                        to=""
                      >
                        Surface protection film
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li
                className={`${props.hideTab}`}
                onClick={() => handldeOverlayActive()}
              >
                <NavLink
                  exact
                  to="/blog-details"
                  className={`fw-normal text-white tab_custom_font opacity_07 nav_hover position-relative transition_03 text-decoration-none `}
                >
                  Blog
                </NavLink>
              </li>
              <li
                className={` ${props.d_none}`}
                onClick={() => handldeOverlayActive()}
              >
                <NavLink
                  to="/about"
                  className="fw-normal text-white tab_custom_font opacity_07 nav_hover position-relative transition_03 text-decoration-none"
                >
                  About us
                </NavLink>
              </li>
              <li
                className={` ${props.d_none}`}
                onClick={() => handldeOverlayActive()}
              >
                <NavLink
                  to="/contact-us"
                  className="fw-normal text-white tab_custom_font opacity_07 nav_hover position-relative transition_03 text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
              <li
                onClick={() => handldeOverlayActive()}
                className="mt-2 mt-sm-3"
              >
                <Link className="text-decoration-none" to="/portal-home-page">
                  <button className="common_btn fw-bold font_sm">
                    {props.btnText}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <div className="container custom_container py-3 position-relative">
            <div className=" d-flex justify-content-between align-items-center">
              <NavLink className={`${props.d_none}`} exact to="/">
                <Logo className={`w-100`} />
              </NavLink>

              <NavLink exact to="/">
                <span className={`${props.hideTab2}`}> {props.navLogo}</span>
              </NavLink>
              <ul
                className={`d-flex align-items-center mb-0 d-none d-lg-flex ps-0 mb-0 gap-3 gap-xl-4 list-unstyled `}
              >
                <li className={`nav_custom_dropdown ${props.d_none}`}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-decoration-none text-black px-0 bg-transparent"
                      variant="success"
                    >
                      Automotive
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to="/windowtint"
                        >
                          Window Tint
                        </NavLink>
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to="/paint-protection-film"
                        >
                          Paint Protection Film
                        </NavLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className={`nav_custom_dropdown ${props.d_none}`}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent"
                      variant="success"
                    >
                      Residential & Commercial
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to="/solar-control"
                        >
                          Solar Control Window Films
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to=""
                        >
                          Safety & security films
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to=""
                        >
                          Decorative window film
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to="/antimicrobial-film"
                        >
                          Antimicrobial Film
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          className="border-0 cursor_pointer py-0 my-0 fw-normal font_sm opacity_07 text-black px-0 bg-transparent text-decoration-none"
                          to=""
                        >
                          Surface protection film
                        </NavLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className={`${props.hideTab}`}>
                  <NavLink
                    to="/blog-details"
                    activeclassName="active"
                    className={`ms-2 py-0 my-0 fw-normal font_sm opacity_07 text-black nav_hover position-relative transition_03 text-decoration-none`}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className={` ${props.d_none}`}>
                  <NavLink
                    to="/about"
                    activeclassName="active"
                    className="ms-2 py-0 my-0 fw-normal font_sm opacity_07 text-black nav_hover position-relative transition_03 text-decoration-none"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className={` ${props.d_none}`}>
                  <NavLink
                    to="/contact-us"
                    activeclassName="active"
                    className="ms-2 py-0 my-0 fw-normal font_sm opacity_07 text-black nav_hover position-relative transition_03 text-decoration-none"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="d-none d-lg-block ms-lg-4">
                  <Link className="text-decoration-none" to="/portal-home-page">
                    <button className="common_btn fw-bold font_sm">
                      {props.btnText}
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

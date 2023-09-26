import React, { useEffect, useState } from "react";
import mailIcon from "../../assets/images/svg/email-icon.svg";
import swal from "sweetalert";

const Subscription = () => {
  const [Subscription, setSubscription] = useState({
    email: "",
  });
  const submitSubscriptions = (e) => {
    e.preventDefault();
    console.log("email= " + Subscription.email);
    setSubscription({
      email: "",
    });
    swal({
      title: "Submitted Successfully",
      icon: "success",
      button: {
        text: "Success",
        className: "swal_button_formatting",
      },
    });
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [Subscription]);

  return (
    <>
      <div id="subscribe" className="py-5 position-relative">
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="container custom_container pb-md-5"
        >
          <div className="pt-md-4 pb-md-2 text-center">
            <h2 className="pt-md-1 ff-gilroy-bold font_6xl color_blue mb-0">
              Subscribe to <span className=" color_red">Our Newsletter</span>
            </h2>
            <p className="font_md fw-normal opacity_07 text-black mt-2 mb-0 pb-sm-2">
              Subscribe to Our Newsletter and stay updated
            </p>
            <form onSubmit={submitSubscriptions} action="">
              <div className="email_box d-flex justify-content-between mx-auto align-items-center mt-lg-5 mt-4">
                <span className="w-100 d-flex">
                  <img
                    width="24"
                    height="24"
                    className="me-1 cursor_pointer"
                    src={mailIcon}
                    alt="email-box-img"
                  />
                  <input
                    required
                    className="border-0 w-100"
                    type="email"
                    id="E-mail"
                    value={Subscription.email}
                    onChange={(e) =>
                      setSubscription({
                        ...Subscription,
                        email: e.target.value,
                      })
                    }
                    placeholder="Email Address"
                  />
                </span>
                <button className="font_md ff-gilroy-medium text-white subscribe_btn transition_02">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;

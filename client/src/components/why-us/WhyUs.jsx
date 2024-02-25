import React from "react";
import "./WhyUs.css";

function WhyUs() {
  return (
    <div className="whyUsSection">
      <div className="chooseUs">
        <img
          src="/assets/icons8-shipping-50.png"
          alt="Shipping Icon"
          className="chooseUsIcon"
        />
        <div className="chooseUsDetails">
          <h5 className="chooseUs1">Free Shipping</h5>
          <p className="chooseUs2">Free shipping on all orders</p>
        </div>
      </div>
      <div className="chooseUs">
        <img
          src="/assets/icons8-last-24-hours-50.png"
          alt="Support Icon"
          className="chooseUsIcon"
        />
        <div className="chooseUsDetails">
          <h5 className="chooseUs1">Support 24/7</h5>
          <p className="chooseUs2">Support 24 hours a day</p>
        </div>
      </div>
      <div className="chooseUs">
        <img
          src="assets/icons8-refund-50.png"
          alt="Refund Icon"
          className="chooseUsIcon"
        />
        <div className="chooseUsDetails">
          <h5 className="chooseUs1">Money Return</h5>
          <p className="chooseUs2">Money back guarantee </p>
        </div>
      </div>
      <div className="chooseUs">
        <img
          src="assets/icons8-discount-50.png"
          alt="Discount Icon"
          className="chooseUsIcon"
        />
        <div className="chooseUsDetails">
          <h5 className="chooseUs1">Order Discount</h5>
          <p className="chooseUs2">On every order over $150</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

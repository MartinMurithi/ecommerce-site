import React from "react";
import { MdOutlineEmail, MdArrowRightAlt } from "react-icons/md";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="subscriptionParent">
      <div className="subscriptionSection">
        <div className="leftSide">
          <MdOutlineEmail className="emailIcon" />
          <div className="emailText">
            <h5 className="subTitle">SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p className="subInfo">
              Get all the latest information on Events, Sales and Offers
            </p>
          </div>
        </div>

        <div className="rightSide">
          <input
            type="email"
            name="subEmail"
            id="subEmail"
            className="subEmail"
            placeholder="Your E-mail Address"
            required
          />
          <button type="submit" className="sub-button">
            SUBSCRIBE <MdArrowRightAlt className="bannerArrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

import React from "react";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
  },
];

const AboutDigitalMarketing = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <img src={image} alt="About Digital Marketing" />
              </div>
            ))}
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  <strong>Digital Marketing</strong>
                </h3>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">
                        A good traveler has no fixed plans
                      </h4>
                      <p className="text">
                        Lorem ipsum dolor consectetur adipiscing do eiusmod
                        tempor incididunt labore.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">
                        A good traveler has no fixed plans
                      </h4>
                      <p className="text">
                        Lorem ipsum dolor consectetur adipiscing do eiusmod
                        tempor incididunt labore.
                      </p>
                    </div>
                  </li>
                </ul>
                {/* <div className="about-btn mt--30">
                  <a className="btn-default" href="#">
                    About Our Doob
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDigitalMarketing;

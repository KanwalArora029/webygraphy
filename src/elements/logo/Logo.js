import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image, image2 }) => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img
          className="logo-light"
          src={process.env.PUBLIC_URL + image}
          alt="Weby Graphy Logo"
        />
        <img
          className="logo-dark"
          src={process.env.PUBLIC_URL + image2}
          alt="Weby Graphy Logo"
        />
      </Link>
    </div>
  );
};
Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;

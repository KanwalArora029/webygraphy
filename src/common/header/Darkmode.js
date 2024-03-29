import React from "react";

const Darkmode = () => {
  const switchTheme = (e) => {
    document.querySelector("body").classList.toggle("light");
  };
  return (
    <button id="darkmode" onClick={(e) => switchTheme(e)}>
      <img
        className="light-icon"
        //src={"/assets/images/icons/sun-01.svg"}
        src={process.env.PUBLIC_URL + "/assets/images/icons/sun-01.svg"}
        alt="Sun images"
      />
      <img
        className="dark-icon"
        //src={"/assets/images/icons/vector.svg"}
        src={process.env.PUBLIC_URL + "/assets/images/icons/vector.svg"}
        alt="Moon images"
      />
    </button>
  );
};
export default Darkmode;

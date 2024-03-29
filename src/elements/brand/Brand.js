import React from "react";

const BrandList = [
  {
    image: "./assets/images/brand/brand-04.png",
  },
  {
    image: "./assets/images/brand/brand-05.png",
  },
  {
    image: "./assets/images/brand/brand-06.png",
  },
  {
    image: "./assets/images/brand/brand-07.png",
  },
  {
    image: "./assets/images/brand/brand-08.png",
  },
];

const Brand = ({ brandStyle }) => {
  return (
    <ul className={`brand-list ${brandStyle}`}>
      {BrandList.map((data, index) => (
        <li key={index}>
          <a href="#">
            <img src={`${data.image}`} alt="Brand Image" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Brand;

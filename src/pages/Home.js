import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { BannerActivation } from "../utils/script";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/seperator/Seprator";
import Service from "../elements/service/Service";
import Brand from "../elements/brand/Brand";
import Slider from "react-slick";
import SEO from "../common/SEO";

const Home = () => {
  const BannerData = [
    {
      image: "./assets/images/banner/digital.jpg",
      title: "Digital Agency.",
      description:
        "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
    },
    {
      image: "./assets/images/banner/creative.jpg",
      title: "Creative Agency.",
      description:
        "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
    },
    {
      image: "./assets/images/banner/Start-up.jpg",
      title: "Startup Agency.",
      description:
        "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
    },
  ];
  return (
    <>
      <main className="page-wrapper">
        <SEO title="Home || Weby Graphy" />
        <Header />
        {/* Start Slider Area  */}
        <Slider
          className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
          {...BannerActivation}
        >
          {BannerData.map((data, index) => (
            <div key={index} className="single-slide">
              <div
                className="height-950 bg-overlay bg_image"
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
              >
                <div className="container">
                  <div className="row row--30 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-7">
                      <div className="inner text-start">
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: data.title }}
                        ></h1>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        ></p>
                        <div className="button-group mt--30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="About Weby Graphy."
                  title="Services provide for you."
                  description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                />
              </div>
            </div>
            <Service
              serviceStyle="service__style--1 icon-circle-style"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}
        <Separator />
        {/* Start Brand Area  */}
        <div className="rwt-brand-area pb--60 pt--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                <Brand brandStyle="brand-style-2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        <Footer />
      </main>
    </>
  );
};

export default Home;

import React from "react";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/Breadcrumbs";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Service from "../elements/service/Service";

// About Components
import AboutWebDevelopment from "../elements/about/AboutWebDevelopment";
import AI from "../elements/about/AboutAI";
import AboutDigitalMarketing from "../elements/about/AboutDigitalMarketing";
import Seprator from "../elements/seperator/Seprator";
import AboutAI from "../elements/about/AboutAI";

const Services = () => {
  return (
    <>
      <Layout>
        <SEO title="Services || Weby Graphy" />
        <BreadcrumbOne
          title="Our Services"
          description="Are designed around your brand, your messaging, and your needs."
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Services"
        />

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

        <Seprator />

        {/* Start About Area  */}
        <AboutWebDevelopment image="./assets/images/about/icon-01.png" />

        <AboutAI image="./assets/images/about/icon-02.png" />

        <AboutDigitalMarketing image="./assets/images/about/icon-03.png" />
        {/* End About Area  */}
      </Layout>
    </>
  );
};

export default Services;

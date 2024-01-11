import React from "react";
import Layout from "../common/Layout";
import Breadcrumb from "../elements/breadcrumb/Breadcrumbs";
import Brand from "../elements/brand/Brand";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/seperator/Seprator";
import Timeline from "../elements/timeline/Timeline";
import SEO from "../common/SEO";

const About = () => {
  return (
    <>
      <Layout>
        <SEO title="About || Weby Graphy" />
        <Breadcrumb
          title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
          rootUrl="/"
          parentUrl="Home"
          currentUrl="About"
        />
        {/* Start Service Area  */}
        <div className="service-area rn-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h3 className="title">
                    We are creative digital agency working for our company
                    brands.
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="mb--10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  quis. Ullam accusantium dignissimos repellendus nemo fugiat
                  numquam, nisi odio adipisci. Veniam neque itaque expedita
                  officiis rem ipsa! Ratione, rem reiciendis?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}
        <Separator />
        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Process of our work."
                  description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                />
                <Timeline classVar="no-gradient" />
              </div>
            </div>
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
      </Layout>
    </>
  );
};

export default About;

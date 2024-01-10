import React from "react";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/Breadcrumbs";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactForm from "./ContactForm";
import SEO from "../../common/SEO";
const Contact = () => {
  return (
    <>
      <SEO title="Contact Us || Weby Graphy" />
      <Layout>
        <BreadcrumbOne
          title="Get in touch with us"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Contact"
        />
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Contact Form"
                    title="Our Contact Address Here."
                    description=""
                  />
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
          {/* End Contact Area  */}
        </div>
      </Layout>
    </>
  );
};

export default Contact;

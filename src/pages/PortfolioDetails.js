import React from "react";
import PortfolioDetailsContent from "../elements/portfolio/PortfolioDetailsContent";
import PortfolioData from "../data/portfolio/PortfolioData.json";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import { useParams } from "react-router-dom";

const PortfolioDetails = (props) => {
  const { id } = useParams();
  const portfolioId = parseInt(id, 10);
  const data = PortfolioData.filter(
    (portfolio) => portfolio.id === portfolioId
  );
  return (
    <>
      <SEO title="Portfolio Details || Weby Graphy" />
      <Layout>
        <PortfolioDetailsContent data={data[0]} />
      </Layout>
    </>
  );
};

export default PortfolioDetails;

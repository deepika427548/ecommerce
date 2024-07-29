import React from "react";
import HomeBanner from "../components/HomeBanner";
import { Container } from "react-bootstrap";
import LatestProducts from "../components/LatestProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Container>
        <LatestProducts />
      </Container>
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../components/common/Header";
import Subscription from "../components/common/Subscription";
import Footer from "../components/common/Footer";
import HeroSlider from "../components/home-page/HeroSlider";
import LatestBlogSlider from "../components/home-page/LatestBlogSlider";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <LatestBlogSlider heading="Featured" />
      <Subscription />
      <Footer
        tab1="Company"
        tab2="Faqs"
        tab3="Help"
        page1="About Us"
        page2="Sustainability"
        aboutpage1="How to become a dealer"
        aboutpage2="Warranty"
        aboutpage3="Claims"
        commercialpage1="Product Specifications"
        commercialpage2="Product Care"
      />
    </div>
  );
};

export default Home;

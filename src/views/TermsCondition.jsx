import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroCommon from "../components/common/HeroCommon";
import Subscription from "../components/common/Subscription";
import TermsDisclaimer from "../components/common/Termscondition/TermsDisclaimer";

const TermsCondition = () => {
  return (
    <div>
      <Header btnText="Shop" removeBtn="d-none" />
      <HeroCommon
        heading="TERMS & CONDITIONS"
        herocommonbg="TermsHero-bg-img"
      />
      <TermsDisclaimer />
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

export default TermsCondition;

import React from 'react'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroCommon from "../components/common/HeroCommon";
import Subscription from '../components/common/Subscription';
import SecurityCards from '../components/security-page/SecurityCards';
import {ProtectionProCardsData} from "../components/common/Helper";
import ProductBenefits from '../components/common/ProductBenefits';
import nanoComicImg from "../assets/images/png/securityfilmimg.png";
import CommonCards from '../components/common/CommonCards';
import {
  LastNanoCarbon,
  LastNanoCarbonLeft,
  LastNanoCarbonRight,
  MetaLizedWindowARight,
  MetaLizedWindowLeft,
  NanoCeramic,
  NanoCeramicLeft,
  NanoCeramicRight,
  windowTintCardsData,
} from "../components/common/Helper";

const SecurityFilm = () => {
  return (
    <div>
      <Header btnText="Shop" removeBtn="d-none" />

      <HeroCommon heading="Safety & Security Film" herocommonbg="WindowTint-bg-img" />
      <SecurityCards window_tint_cards_height="common_cards_height"
        mapData={ProtectionProCardsData} />
         <ProductBenefits
        imgUrl={nanoComicImg}
        rowmanage="flex_row_reverse bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_blue"
        textcolor2="color_red"
        heading="Clear Safety and "
        heading2="Security Film"
        subheading="With high tensile heavy-duty polyester film, plus aggressive adhesive that bonds tightly to glass, the clear safety and security filmis able to handle more extreme direct force, thus provide extra protection against intrusions, flying debris, accidents, or disasters."
      />

<CommonCards    mapDataLeft={NanoCeramicLeft}
        mapDataRight={NanoCeramicRight}/>

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
  )
}

export default SecurityFilm
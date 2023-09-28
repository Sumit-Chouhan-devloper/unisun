import React from 'react'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroCommon from "../components/common/HeroCommon";
import Subscription from '../components/common/Subscription';
import SecurityCards from '../components/security-page/SecurityCards';
import { SecurityFilmCardData } from "../components/common/Helper";
import ProductBenefits from '../components/common/ProductBenefits';
import nanoComicImg from "../assets/images/png/securityfilmimg.png";
import safetyreflective from "../assets/images/png/safetyReflective.png";
import safetyreneutral from "../assets/images/png/safetyNeutral.png";
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
import LatestBlogSlider from '../components/home-page/LatestBlogSlider';

const SecurityFilm = () => {
  return (
    <div>
      <Header btnText="Shop" removeBtn="d-none" />

      <HeroCommon heading="Safety & Security Film" herocommonbg="SecurityFilebg" />
      <div className="container custom_container pt-5 ">
        <h3 className={`ff-gilroy-bold fw-bold  font_3xl mb-2 pt-lg-5`}>

          <span className='color_blue'>Protect Occupants </span>
          <span className='color_red'> and your Home & Office space</span>
        </h3>
        <p
          className={`fw-normal font_md text-black opacity_07 mb-0 lh_174_percent w-75 pb-lg-5`}
        >
          Safety & Security films are constructed using heavy-duty polyester compound to make your class less vulnerable, thus provides extra protection to the facility in case of intrusions, vandalism, accidents, or disasters.              </p>
      </div>
      <SecurityCards window_tint_cards_height="common_cards_height"
        mapData={SecurityFilmCardData} />
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


      <CommonCards mapDataLeft={NanoCeramicLeft}
        mapDataRight={NanoCeramicRight} />

      <ProductBenefits
        imgUrl={safetyreflective}
        rowmanage=" bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Solar Control "
        heading2="Safety Reflective Film"
        subheading="Solar control safety reflective film is a multifunctional solution designed to enhance your living or working space. It offers a combination of benefits."
      />

      <CommonCards mapDataLeft={NanoCeramicLeft}
        mapDataRight={NanoCeramicRight} />

      <ProductBenefits
        imgUrl={safetyreneutral}
        rowmanage="flex_row_reverse bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading=" Solar Control "
        heading2="Safety Neutral Film "
        subheading="Solar Control Safety Neutral Film is a sophisticated solution that strikes the perfect balance between comfort and security. These films are designed to enhance the ambiance of your space while offering a range of practical benefits. They efficiently manage solar heat, ensuring your interior remains cool and comfortable."
      />


      <CommonCards mapDataLeft={NanoCeramicLeft}
        mapDataRight={NanoCeramicRight} />

      <LatestBlogSlider />


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
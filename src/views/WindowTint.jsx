import React from "react";
import Header from "../components/common/Header";
import Subscription from "../components/common/Subscription";
import Footer from "../components/common/Footer";
import HeroCommon from "../components/common/HeroCommon";
import ProductBenefits from "../components/common/ProductBenefits";
import CommonCards from "../components/common/CommonCards";
import nanoComicImg from "../assets/images/webp/men-wrapping-mirror.webp";
import blackcaropendoor from "../assets/images/webp/black-car-open-door.webp";
import ligthgreenlamborghini from "../assets/images/webp/lightgreen-lamborghini.webp";
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
  AutomotiveWindowTintLeft,
  AutomotiveWindowTintRight,
  PremiumDyedWindowTintLeft,
  PremiumDyedWindowTintRight,
} from "../components/common/Helper";
const WindowTint = () => {
  return (
    <div>
      <Header btnText="Shop" />
      <HeroCommon
        heading="Automotive Window Tint"
        herocommonbg="Window-bg-img"
      />
      <ProductBenefits
        imgUrl={nanoComicImg}
        rowmanage="flex_row_reverse bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Nano Carbon "
        heading2="Window Tint"
        subheading="Of the light that reaches Earth's surface, infrared radiation makes up more than 40% of solar energy. Unisun ceramic window tint is coated with nano scale particles of Titanium or Tungsten compounds, which is the key to block the heat-generating infrared rays. It is also powerful to block harmful UV rays. With our cutting-edge nano-X coating technology, Unisun ceramic tint provides super clear view through car windows as it has extremely low level of haze."
      />
      <CommonCards
        mapDataLeft={AutomotiveWindowTintLeft}
        mapDataRight={AutomotiveWindowTintRight}
      />

      <ProductBenefits
        imgUrl={blackcaropendoor}
        rowmanage="flex_row bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Nano-Ceramic "
        heading2="Window Tint"
        subheading="With the advances of nano technology, the tiny carbon particles are coated to the film. Compared with legacy dyed film which would discolor in a couple of years, nano carbon film would never fade during the lifetime. The carbon particle could block heat-generating infrared significantly while the legacy dyed film cannot. In the mean time, it could block of UV rays"
      />

      <CommonCards
        mapDataLeft={LastNanoCarbonLeft}
        mapDataRight={LastNanoCarbonRight}
      />
      <ProductBenefits
        imgUrl={ligthgreenlamborghini}
        rowmanage="flex_row_reverse bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Premium Dyed"
        heading2="Window Tint"
        subheading="The premium dyed window tint provides your car a cool new look, and makes you feel comfortable with less glare and better UV protection. The color of the tint lasts for lifetime without any fading."
      />
      <CommonCards
        mapDataLeft={PremiumDyedWindowTintLeft}
        mapDataRight={PremiumDyedWindowTintRight}
      />
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
export default WindowTint;

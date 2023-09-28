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
import blueBMW from "../assets/images/webp/blueBMW.webp";
import redFarrari from "../assets/images/webp/red-farrari.webp";
import whiteBugatti from "../assets/images/webp/white-bugatti.webp";
import LatestBlogSlider from "../components/home-page/LatestBlogSlider";
import SecurityCards from "../components/security-page/SecurityCards";
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
  AirBlueWindowTintLeft,
  AirBlueWindowTintRight,
  MetallizedWindowTintLeft,
  MetallizedWindowTintRight,
  CeramicSafetyWindowTintLeft,
  CeramicSafetyWindowTintRight,
  SecurityFilmCardData,
  AutomotiveWindowTint,
} from "../components/common/Helper";
import HeroDiscription from "../components/common/HeroDiscription";
const WindowTint = () => {
  return (
    <div>
      <Header btnText="Shop" />
      <HeroCommon
        heading="Automotive Window Tint"
        herocommonbg="Window-bg-img"
      />
      <HeroDiscription />
      <SecurityCards
        window_tint_cards_height="common_cards_height"
        mapData={AutomotiveWindowTint}
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
        subheading="Of the light that reaches Earth’s surface, infrared radiation makes up more than 40% of solar energy.Unisun ceramic window tint is coated with nano scale particles of Titanium or Tungsten compounds, which is the key to block the heat-generating infrared rays. It is also powerful to block harmful UV rays."
      >
        <p className="fw-normal font_md text-black opacity_07 mb-0 lh_174_percent mt-4">
          With ourcutting-edge nano-X coating technology, Unisun ceramic
          tintprovidessuper clear view through car windows as it has extremely
          low level of haze.
        </p>
      </ProductBenefits>
      <CommonCards
        mapDataLeft={AutomotiveWindowTintLeft}
        mapDataRight={AutomotiveWindowTintRight}
      />

      <ProductBenefits
        imgUrl={blackcaropendoor}
        rowmanage="flex_row bottom_spacing"
        textSpacing=" ps_xl_70"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Nano-Ceramic "
        heading2="Window Tint"
        subheading="With the advances of nano technology, the tiny carbon particles are coated to the film. Compared with legacy dyed film which would discolor in a couple of years, nano carbon film would never fade during the lifetime. The carbon particle could block heat-generating infrared significantly while the legacy dyed film cannot. In the mean time, it could block harmful UV rays."
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
      <ProductBenefits
        imgUrl={blueBMW}
        rowmanage="flex_row bottom_spacing"
        textSpacing="ps_xl_70"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Air Blue"
        heading2="Window Tint"
        subheading="Air blue window tint is our supreme quality ceramic window tint with very low VLTs. With ourcutting-edge nano-X coating technology, itblocks the heat-generating infrared rays while providingsuper clear view through car windows as it has extremely low level of haze.It is also powerful to block harmful UV rays."
      >
        <p className="fw-normal font_md text-black opacity_07 mb-0 lh_174_percent mt-4">
          Air blue window tint is usually used for window shield.
        </p>
      </ProductBenefits>

      <CommonCards
        mapDataLeft={AirBlueWindowTintLeft}
        mapDataRight={AirBlueWindowTintRight}
      />
      <ProductBenefits
        imgUrl={redFarrari}
        rowmanage="flex_row_reverse bottom_spacing"
        textSpacing="nanocomic_text_nanocramic"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Metallized"
        heading2="Window Tint"
        subheading="With tiny metallic particles attached to the film evenly and firmly, UNISUN metallized tint are reliable reflecting the solar heat, and can also give the car a little shiny look. It is also powerful to block harmful UV rays."
      />
      <CommonCards
        mapDataLeft={MetallizedWindowTintLeft}
        mapDataRight={MetallizedWindowTintRight}
      />
      <ProductBenefits
        imgUrl={whiteBugatti}
        rowmanage="flex_row bottom_spacing"
        textSpacing="ps_xl_70"
        manageSpacing="manageSpacing"
        textcolor1="color_red"
        textcolor2="color_blue"
        heading="Ceramic Safety "
        heading2="Window Tint"
        subheading="Unisun ceramicsafety window tint can provide extra protection that reinforces auto windows and holds the shattered glass together against accidents and all kinds of road hazards. It’s also ceramic film that blocks the heat-generating infrared rays and blocks harmful UV rays as the legacy ceramic tint does."
      >
        <p className="fw-normal font_md text-black opacity_07 mb-0 lh_174_percent mt-4">
          Multiple VLTs and multiple thickness (4mil, 6mil and 8mil) are
          available.
        </p>
      </ProductBenefits>

      <CommonCards
        mapDataLeft={CeramicSafetyWindowTintLeft}
        mapDataRight={CeramicSafetyWindowTintRight}
      />
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
  );
};
export default WindowTint;

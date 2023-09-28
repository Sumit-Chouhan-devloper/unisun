import React from 'react'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroCommon from "../components/common/HeroCommon";
import Subscription from '../components/common/Subscription';
import link_file from "../assets/images/svg/link_file.svg"
import discussion from "../assets/images/png/Discuses_img.png"
import { Col, Row } from 'react-bootstrap';

const ProductSpecification = () => {
  return (
    <div>
         <Header btnText="Shop" removeBtn="d-none" />
        <HeroCommon heading="Product Specifications" herocommonbg="WindowTint-bg-img" />

       <div className='container py-5 mt-lg-4 my-lg-5'>
          <Row className='align-items-center'>
             <Col lg={6}>
             <h2 className='fw-bold ff-gilroy-bold font_3xl color_blue'>Please download the product specifications from <span className='color_red'> the following links.</span></h2>
             <p className='font_md ff-gilroy-light fw-normal opacity_07'>For OEM/ODM customers, the following specifications <span className='d-block'>are good reference for your needs.</span> </p>
             <div>
             <div className='d-flex align-items-center line_bottom '>
                 <span><img src={link_file} alt="#" /></span>
                  <p className='mb-0 fw-semibold ff-gilroy-semibold font_lg color_blue'>Automotive Window Tint </p>
              </div>
              <div className='d-flex align-items-center  line_bottom'>
                 <span><img src={link_file} alt="#" /></span>
                  <p className='mb-0 fw-semibold ff-gilroy-semibold font_lg color_blue'>Architectural Window Film </p>
              </div>
              <div className='d-flex align-items-center line_bottom '>
                 <span><img src={link_file} alt="#" /></span>
                  <p className='mb-0 fw-semibold ff-gilroy-semibold font_lg color_blue'>Paint Protection Film  </p>
              </div>
             
             </div>
             </Col>
             
             <Col lg={6} >
                <div className='mt-5 mt-lg-0 d-flex justify-content-center'>
                  <img className='w-100 width-80 width-70' src={discussion} alt="#" />
                </div>
             </Col>
          </Row>
       </div>

        <Subscription/>
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

export default ProductSpecification
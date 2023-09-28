import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import AboutPage from './views/AboutPage';
import WindowTint from './views/WindowTint';
import SolorControlPage from './views/SolorControlPage';
import PaintProtection from './views/PaintProtection';
import ContactPage from './views/ContactPage';
import BlogPage from './views/BlogPage';
import Antimicrobial from './views/Antimicrobial';
import SecurityFilm from './views/SecurityFilm';
import CustomizedSolutions from './views/CustomizedSolutions';
import Sustainability from './views/Sustainability';
import CareInstruction from './views/CareInstruction';
import ProductSpecification from './views/ProductSpecification';
import ProductWarranties from './views/ProductWarranties';
import Privacy from './views/Privacy';
import TermsCondition from './views/TermsCondition';
import BackToTop from './components/common/BackToTop';

const AppRoutes = () => {
    return (
        <div>
            <BackToTop/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />   
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/WindowTint' element={<WindowTint />} />
                    <Route path='/solar-control' element={<SolorControlPage />} />
                    <Route path='/paint-protection-film' element={<PaintProtection />} />
                    <Route path='/contact-us' element={<ContactPage />} />
                    <Route path='/blog-details' element={<BlogPage />} />
                    <Route path='/antimicrobial-film' element={<Antimicrobial />} />
                    <Route path="/SecurityFilm" element={<SecurityFilm />} />
                    <Route path="/CustomizedSolutions" element={<CustomizedSolutions />} />
                    <Route path="/Sustainability" element={<Sustainability />} />
                    <Route path="/CareInstruction" element={<CareInstruction />} />
                    <Route path="/ProductSpecification" element={<ProductSpecification />} />
                    <Route path="/ProductWarranties" element={<ProductWarranties />} />
                    <Route path="/Privacy" element={<Privacy />} />
                    <Route path="/TermsCondition" element={<TermsCondition />} />  
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes
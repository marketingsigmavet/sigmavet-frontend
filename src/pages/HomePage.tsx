import React from 'react';
import NavBar from '../components/common/Navbar/NavBar';
import Footer from '../components/common/Footer/Footer';
import HeroSection from '../components/sections/home/HeroSection';
import BrandTrustSection from '../components/sections/home/BrandTrustSection';
import ScientificCareSection from '../components/sections/home/ScientificCareSection';
import NetworkCoverageSection from '../components/sections/home/NetworkCoverageSection';
import RecruitmentCTASection from '../components/sections/home/RecruitmentCTASection';
import ArticlesPreviewSection from '../components/sections/home/ArticlesPreviewSection';
import ExtraSections from '../components/sections/home/ExtraSections';
import LayoutDecorations from '../components/common/LayoutDecorations';

export default function HomePage() {
  return (
    <>
      <LayoutDecorations />
      <NavBar />
      <main>
        <HeroSection />
        <BrandTrustSection />
        <ScientificCareSection />
        <NetworkCoverageSection />
        <RecruitmentCTASection />
        <ArticlesPreviewSection />
        <ExtraSections />
      </main>
      <Footer />
    </>
  );
}

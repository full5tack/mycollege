"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import SubNavbar from "@/components/SubNavbar/SubNavbar";
import Feature1 from "@/components/Features/Feature1";
import Feature2 from "@/components/Features/Feature2";
import Feature3 from "@/components/Features/Feature3";
import EnquiryForm from "@/components/EnquiryForm/EnquiryForm";
import FeeStructure from "@/components/FeeStructure/FeeStructure";
import Curriculum from "@/components/Curriculum/Curriculum";
import CampusInsights from "@/components/CampusInsights/CampusInsights";
import Placements from "@/components/Placements/Placements";
import ExpertGuidance from "@/components/ExpertsAndSimilar/ExpertGuidance";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import ScholarshipBanner from "@/components/ScholarshipBanner/ScholarshipBanner";
import ClarityBanner from "@/components/ClarityBanner/ClarityBanner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SubNavbar />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <EnquiryForm />
        <FeeStructure />
        <Curriculum />
        <CampusInsights />
        <Placements />
        <ExpertGuidance />
        <FAQ />
        <Testimonials />
        <ScholarshipBanner />
        <ClarityBanner />
      </main>
      <Footer />
    </>
  );
}

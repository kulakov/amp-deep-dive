import { lazy, Suspense } from "react";
import Hero from "@/components/sections/Hero";
import StickyNav from "@/components/StickyNav";

// Lazy load below-the-fold components to reduce initial JS bundle
const WhatHappens = lazy(() => import("@/components/sections/WhatHappens"));
const SafetyRules = lazy(() => import("@/components/sections/SafetyRules"));
const Participants = lazy(() => import("@/components/sections/Participants"));
const HowToJoin = lazy(() => import("@/components/sections/HowToJoin"));
const WorthIt = lazy(() => import("@/components/sections/WorthIt"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StickyNav />
      <Suspense fallback={null}>
        <div id="what-happens"><WhatHappens /></div>
        <div id="safety"><SafetyRules /></div>
        <div id="participants"><Participants /></div>
        <div id="how-to-join"><HowToJoin /></div>
        <div id="worth-it"><WorthIt /></div>
        <div id="faq"><FAQ /></div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

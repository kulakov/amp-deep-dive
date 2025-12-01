import Hero from "@/components/sections/Hero";
import StickyNav from "@/components/StickyNav";
import WhatHappens from "@/components/sections/WhatHappens";
import SafetyRules from "@/components/sections/SafetyRules";
import Participants from "@/components/sections/Participants";
import HowToJoin from "@/components/sections/HowToJoin";
import WorthIt from "@/components/sections/WorthIt";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StickyNav />
      <div id="what-happens"><WhatHappens /></div>
      <div id="safety"><SafetyRules /></div>
      <div id="participants"><Participants /></div>
      <div id="how-to-join"><HowToJoin /></div>
      <div id="worth-it"><WorthIt /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </div>
  );
};

export default Index;

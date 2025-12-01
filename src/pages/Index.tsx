import Hero from "@/components/sections/Hero";
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
      <WhatHappens />
      <SafetyRules />
      <Participants />
      <HowToJoin />
      <WorthIt />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

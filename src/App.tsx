/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InteractiveResourcePreview from "./components/InteractiveResourcePreview";
import ForWhom from "./components/ForWhom";
import WhatChanges from "./components/WhatChanges";
import MiddleUrgencypnl from "./components/MiddleUrgencypnl";
import WhatYouGet from "./components/WhatYouGet";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import UpsellModal from "./components/UpsellModal";
import Footer from "./components/Footer";

export default function App() {
  // Checkout/upsell modal state
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handleOpenCheckout = (kitType: "basic" | "complete") => {
    if (kitType === "basic") {
      setIsUpsellOpen(true);
    }
  };

  const handleScrollToOffer = () => {
    const section = document.getElementById("pricing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="app-root-container" className="font-sans antialiased text-gray-800 bg-[#fbfbfb] selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* 1. Urgency Countdown Header Banner */}
      <Header />

      {/* 2. Hero Section (Headline, Description, Overlapping CSS Mockups, Primary CTA) */}
      <Hero scrollToOffer={handleScrollToOffer} />

      {/* 3. "Veja o kit por dentro" Interactive Live Showcase Playground */}
      <InteractiveResourcePreview scrollToOffer={handleScrollToOffer} />

      {/* 4. "Se você já ficou sem saber como aprofundar... esse kit é para você" Pain Point Section */}
      <ForWhom scrollToOffer={handleScrollToOffer} />

      {/* 5. "O que muda quando você tem as ferramentas certas" Benefits Section */}
      <WhatChanges scrollToOffer={handleScrollToOffer} />

      {/* 6. "Cada sessão sem direcionamento pode aumentar a sensação de estagnação" Highlight Teal Section */}
      <MiddleUrgencypnl scrollToOffer={handleScrollToOffer} />

      {/* 7. "Tudo o que você vai receber" + 5 Exclusive Golden Bonuses Grid */}
      <WhatYouGet scrollToOffer={handleScrollToOffer} />

      {/* 8. WhatsApp Mock Chats Slider (Real-time social proof feedback) */}
      <Testimonials scrollToOffer={handleScrollToOffer} />

      {/* 9. "Escolha seu kit" High-converting Pricing Grid */}
      <Pricing onOpenCheckout={handleOpenCheckout} />

      {/* 10. "Compra sem risco" 15-Days Guarantee badge stamp */}
      <Guarantee />

      {/* 11. FAQ Interactive Accordion Accordion */}
      <FAQ scrollToOffer={handleScrollToOffer} />

      {/* 12. Elegant Footer block */}
      <Footer />

      {/* Interactive High-Converting Upsell Modal */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAccept={() => {
          setIsUpsellOpen(false);
        }}
        onDecline={() => {
          setIsUpsellOpen(false);
        }}
      />

    </div>
  );
}


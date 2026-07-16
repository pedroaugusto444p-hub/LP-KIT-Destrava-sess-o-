import { ReactNode } from "react";
import { motion } from "motion/react";
import { BENEFIT_ITEMS } from "../data";
import { Target, Users, MessageSquare, ShieldCheck, Coins } from "lucide-react";

interface WhatChangesProps {
  scrollToOffer: () => void;
}

const ICON_MAP: Record<string, ReactNode> = {
  "directed": <Target className="w-6 h-6 text-[#1ca296]" />,
  "participative": <Users className="w-6 h-6 text-[#1ca296]" />,
  "depth": <MessageSquare className="w-6 h-6 text-[#1ca296]" />,
  "confident": <ShieldCheck className="w-6 h-6 text-[#1ca296]" />,
  "alternative": <Coins className="w-6 h-6 text-[#1ca296]" />,
};

export default function WhatChanges({ scrollToOffer }: WhatChangesProps) {
  return (
    <section id="what-changes-section" className="py-20 px-4 bg-neutral-50/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 id="what-changes-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            O que muda quando você tem <span className="text-[#1ca296]">as ferramentas certas</span>
          </h2>
          <p id="what-changes-subtitle" className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Cada recurso foi pensado para ajudar você a conduzir sessões mais estruturadas, participativas e produtivas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div id="benefits-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BENEFIT_ITEMS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="p-6 md:p-8 bg-white border border-neutral-200/60 rounded-3xl shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-50 mb-4 border border-teal-100/30">
                  {ICON_MAP[benefit.id] || <Target className="w-6 h-6 text-[#1ca296]" />}
                </span>
                <h3 className="font-sans font-bold text-lg md:text-xl text-gray-950 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToOffer}
            className="px-10 py-4.5 rounded-full bg-[#1ca296] hover:bg-[#128a7f] text-white font-bold text-base md:text-lg shadow-lg shadow-teal-700/10 cursor-pointer transition duration-300"
          >
            Destravar minhas sessões
          </motion.button>
        </div>

      </div>
    </section>
  );
}

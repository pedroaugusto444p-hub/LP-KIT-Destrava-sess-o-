import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQProps {
  scrollToOffer: () => void;
}

export default function FAQ({ scrollToOffer }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-20 px-4 bg-[#fbfbfb]">
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 id="faq-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
            Ainda tem alguma dúvida?
          </h2>
          <p id="faq-subtitle" className="text-gray-500 mt-3 text-sm md:text-base font-medium">
            Respondemos abaixo às perguntas mais comuns.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-neutral-300"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm md:text-base text-gray-800 hover:text-gray-900 cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className="shrink-0 p-1 rounded-full bg-neutral-50 border border-neutral-100 text-gray-400">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#1ca296]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Animated accordion panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-neutral-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
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

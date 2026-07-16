import { motion } from "motion/react";
import { Check, Gift } from "lucide-react";
import { BONUS_ITEMS } from "../data";

interface WhatYouGetProps {
  scrollToOffer: () => void;
}

export default function WhatYouGet({ scrollToOffer }: WhatYouGetProps) {
  const mainFeatures = [
    "Cartas para identificação de emoções",
    "Perguntas para aprofundamento terapêutico",
    "Exercícios para ansiedade e pensamentos repetitivos",
    "Atividades de autoestima e autocompaixão",
    "Recursos para trabalhar limites pessoais",
    "Exercícios para relacionamentos e dependência emocional",
    "Atividades de autoconhecimento",
    "Exercícios sobre valores e propósito de vida",
    "Recursos para tomada de decisão",
    "Atividades para procrastinação e autossabotagem",
    "Exercícios para luto, perdas e mudanças de ciclo",
    "Fichas para trabalhar crenças e pensamentos automáticos",
    "Recursos para pacientes silenciosos ou resistentes",
    "Atividades de regulação emocional",
    "Materiais de psicoeducação visual"
  ];

  return (
    <section id="what-you-get-section" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 id="what-you-get-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            Tudo o que você <span className="text-[#1ca296]">vai receber</span>
          </h2>
        </div>

        {/* Deliverables Grid Block (Kit Cover & Bullet List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left Column: Elegant Vector Mockup representing materials */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center select-none">
              <img
                src="https://i.ibb.co/HDyPgrjG/Chat-GPT-Image-12-de-jul-de-2026-08-05-02.png"
                alt="Kit Destrava Sessão Completo"
                referrerPolicy="no-referrer"
                className="w-full max-h-[340px] object-contain rounded-2xl shadow-xl border border-neutral-100"
              />
            </div>
          </div>

          {/* Right Column: Detailed bullet lists */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[#1ca296] text-sm font-extrabold uppercase tracking-widest">Material Completo</span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-gray-950">Kit Destrava Sessão</h3>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-wide">+160 recursos terapêuticos para atendimento de adultos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {mainFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-teal-50 border border-teal-100 rounded-full p-1 text-[#1ca296] shrink-0 mt-0.5 animate-pulse">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bonus Divider Block */}
        <hr className="border-neutral-100 my-12" />

        {/* 5 Exclusive Bonuses Container */}
        <div id="bonuses-block" className="space-y-10">
          <div className="text-center space-y-4">
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-medium">
              E não para por aí. No Kit Completo, você ainda recebe 5 bônus que complementam os recursos e ajudam a organizar diferentes etapas do atendimento clínico.
            </p>
            <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#f15a24] text-white text-xs md:text-sm font-black tracking-widest uppercase shadow">
              <Gift className="w-4 h-4 animate-bounce" />
              5 BÔNUS EXCLUSIVOS
            </div>
          </div>

          {/* Grid of 5 Bonuses */}
          <div id="bonuses-grid" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BONUS_ITEMS.map((bonus, idx) => (
              <div
                key={bonus.id}
                className={`p-6 md:p-8 rounded-3xl border transition duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : ""
                } bg-amber-50/20 border-amber-200/50 shadow-sm hover:shadow-md`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="w-10 h-10 rounded-full bg-[#1ca296] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                      {bonus.id}
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                      Bônus {bonus.id}
                    </span>
                  </div>
                  
                  {idx === 0 && (
                    <div className="overflow-hidden bg-transparent my-3">
                      <img 
                        src="https://i.ibb.co/4nrC70D2/Chat-GPT-Image-12-de-jul-de-2026-09-39-35.png" 
                        alt="Fichas de Anamnese para Atendimento de Adultos" 
                        className="w-full h-auto object-cover hover:scale-102 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="overflow-hidden bg-transparent my-3">
                      <img 
                        src="https://i.ibb.co/Z61SPXHw/Chat-GPT-Image-12-de-jul-de-2026-09-41-34-1.png" 
                        alt="Guia de Práticas Terapêuticas" 
                        className="w-full h-auto object-cover hover:scale-102 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="overflow-hidden bg-transparent my-3">
                      <img 
                        src="https://i.ibb.co/VcZb95d3/Chat-GPT-Image-12-de-jul-de-2026-09-46-06-removebg-preview.png" 
                        alt="Guia ou Ferramenta de Suporte" 
                        className="w-full h-auto object-cover hover:scale-102 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="overflow-hidden bg-transparent my-3">
                      <img 
                        src="https://i.ibb.co/tMfcMSs5/bonus-04-2.png" 
                        alt="Bônus 04" 
                        className="w-full h-auto object-cover hover:scale-102 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {idx === 4 && (
                    <div className="overflow-hidden bg-transparent my-3">
                      <img 
                        src="https://i.ibb.co/JRNw1V5Y/bonus-05.png" 
                        alt="Bônus 05" 
                        className="w-full h-auto object-cover hover:scale-102 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  
                  <h4 className="font-sans font-extrabold text-base md:text-lg text-gray-950">
                    {bonus.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-dashed border-amber-200/40 mt-6 flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-medium">
                    De <span className="line-through decoration-red-600 decoration-2 font-mono font-extrabold text-neutral-900">R$ {bonus.originalPrice.toFixed(2).replace(".", ",")}</span>
                  </span>
                  <span className="text-emerald-600 font-extrabold tracking-wide uppercase">
                    <span className="bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 text-sm font-black text-emerald-600">GRÁTIS</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bonus CTA Button */}
          <div className="text-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToOffer}
              className="px-10 py-4.5 rounded-full bg-[#1ca296] hover:bg-[#128a7f] text-white font-bold text-base md:text-lg shadow-lg shadow-teal-700/10 cursor-pointer transition duration-300"
            >
              Acessar o kit completo
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}

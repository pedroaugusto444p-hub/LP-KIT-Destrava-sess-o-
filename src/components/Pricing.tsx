import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, ShieldCheck, CreditCard, Award, ArrowUpRight } from "lucide-react";

interface PricingProps {
  onOpenCheckout: (kitType: "basic" | "complete") => void;
}

export default function Pricing({ onOpenCheckout }: PricingProps) {
  // Synchronized countdown timer for pricing section urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 38,
    seconds: 27,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 18, minutes: 38, seconds: 27 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const basicFeatures = [
    "+80 recursos terapêuticos para adultos",
    "Organizados por demanda clínica",
    "Cartas, fichas e exercícios prontos para usar",
    "Materiais em formato PDF",
    "Acesso imediato após a compra",
    "Funciona em atendimentos presenciais e online",
    "Suporte por e-mail",
    "Garantia incondicional de 15 dias"
  ];

  const completeFeatures = [
    { text: "+160 recursos terapêuticos para adultos", highlight: false },
    { text: "Organizados por demanda clínica", highlight: false },
    { text: "Cartas, fichas, exercícios e atividades", highlight: false },
    { text: "Materiais prontos para imprimir", highlight: false },
    { text: "Funciona em atendimentos online e presenciais", highlight: false },
    { text: "Acesso imediato em PDF", highlight: false },
    { text: "Fichas de Anamnese para Adultos", value: "R$27,00", highlight: true },
    { text: "Roteiro de Devolutiva Terapêutica", value: "R$19,00", highlight: true },
    { text: "Checklist de Planejamento de Sessão", value: "R$17,00", highlight: true },
    { text: "Guia para Pacientes Resistentes ou Silenciosos", value: "R$17,00", highlight: true },
    { text: "Kit de Psicoeducação Visual para Adultos", value: "R$17,00", highlight: true }
  ];

  return (
    <section id="pricing-section" className="py-20 px-4 bg-gradient-to-b from-neutral-50/20 via-amber-50/10 to-transparent border-t border-neutral-200/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Urgency countdown indicator */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] md:text-xs font-extrabold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
            OFERTA VÁLIDA ATÉ: {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
          </div>
        </div>

        {/* Section title */}
        <div className="text-center mb-14 space-y-4">
          <h2 id="pricing-title" className="font-sans font-black text-3xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Escolha seu kit
          </h2>
          <p id="pricing-subtitle" className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Os dois kits oferecem acesso imediato. A diferença está na quantidade de recursos e no quanto você deseja resolver de uma só vez.
          </p>
        </div>

        {/* Pricing Cards Grid (Basic vs Complete) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* 1. KIT BÁSICO CARD */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300 relative">
            <div className="space-y-6">
              <div>
                <span className="text-gray-400 text-xs font-extrabold uppercase tracking-widest">Opção Essencial</span>
                <h3 className="font-sans font-extrabold text-2xl text-gray-950 mt-1">Kit Básico</h3>
                <p className="text-[#1ca296] text-xs font-bold mt-1">Kit Destrava Sessão — Básico</p>
              </div>

              {/* Kit Preview Image for Basic */}
              <div className="overflow-hidden rounded-2xl bg-transparent">
                <img 
                  src="https://i.ibb.co/vvCjcnN5/Chat-GPT-Image-12-de-jul-de-2026-09-30-44-1.png" 
                  alt="Kit Básico" 
                  className="w-full h-auto object-cover hover:scale-102 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Price Details */}
              <div className="space-y-1">
                <p className="text-xs text-gray-400 font-medium">
                  De <span className="line-through decoration-red-600 decoration-2 font-mono font-extrabold text-black">R$ 47,00</span>
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-extrabold text-gray-950">R$</span>
                  <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">19,90</span>
                </div>
                <p className="text-[11px] text-gray-500 font-bold">Pagamento único</p>
              </div>

              {/* Bullet Features list */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                {basicFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1ca296] shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-gray-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-8 space-y-4">
              <button
                onClick={() => onOpenCheckout("basic")}
                className="w-full py-4 rounded-xl bg-[#1ca296] hover:bg-[#128a7f] text-white font-bold tracking-wide transition shadow-md cursor-pointer text-center text-sm uppercase"
              >
                QUERO O KIT BÁSICO AGORA
              </button>

              {/* Recommendation banner below Basic */}
              <div className="bg-teal-50 border border-teal-100/50 p-3 rounded-xl text-center text-[10px] text-teal-800 font-bold flex flex-col items-center justify-center gap-1">
                <span>92% escolhem o Kit Completo, com +160 recursos e 5 bônus exclusivos.</span>
              </div>
            </div>
          </div>

          {/* 2. KIT COMPLETO CARD (The hero most popular one!) */}
          <div className="bg-[#289688] text-white border-2 border-white/25 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative transform scale-100 md:scale-[1.03]">
            
            {/* "MAIS VENDIDO" orange pill badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f15a24] to-[#f25c05] text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-md flex items-center gap-1">
              <Award className="w-3.5 h-3.5 animate-bounce" />
              MAIS VENDIDO
            </div>

            {/* Title & Header highlighted at the top, above the image */}
            <div className="pt-2 pb-1 space-y-2">
              <div>
                <span className="text-amber-300 text-[10px] font-extrabold uppercase tracking-widest block mb-1">
                  ★ RECOMENDADO POR PSICÓLOGOS ★
                </span>
                <h3 className="font-sans font-extrabold text-3xl text-white tracking-tight leading-none">Kit Completo</h3>
                <span className="inline-block bg-[#ffdf00] text-[#0d4f4a] text-[10px] md:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mt-2 shadow-lg border border-yellow-200">
                  +160 RECURSOS + 5 BÔNUS EXCLUSIVOS
                </span>
              </div>
              <p className="text-white/95 text-xs font-semibold leading-relaxed">
                O kit definitivo para aprofundar suas sessões e psicoeducação com pacientes adultos.
              </p>
            </div>

            {/* Top Kit Preview Image (transparent background, removed background of the image container) */}
            <div className="my-4 overflow-hidden rounded-2xl bg-transparent">
              <img 
                src="https://i.ibb.co/HDyPgrjG/Chat-GPT-Image-12-de-jul-de-2026-08-05-02.png" 
                alt="Kit Completo Premium" 
                className="w-full h-auto object-cover hover:scale-102 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              {/* Price Details */}
              <div className="space-y-1">
                <p className="text-xs text-white/90 flex items-center gap-1.5">
                  De <span className="line-through decoration-red-600 decoration-2 font-mono font-extrabold text-black bg-white/95 px-1.5 py-0.5 rounded">R$ 114,00</span>
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-extrabold text-teal-100">R$</span>
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">37,90</span>
                </div>
                <p className="text-xs font-bold text-amber-300">
                  Ou 6x de R$ 7,45
                </p>
                <p className="text-[11px] text-teal-100 font-semibold">Pagamento único • Acesso imediato</p>
                <p className="text-xs text-amber-300 font-extrabold">Você economiza R$ 76,10</p>
              </div>

              {/* Bullet Features list complete */}
              <div className="space-y-2.5 pt-4 border-t border-white/20">
                {completeFeatures.map((feat, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <div 
                      className={`flex items-start gap-2.5 justify-between transition-all duration-300 ${
                        feat.highlight 
                          ? "border border-[#FDCB6E]/30 rounded-xl p-2.5 -mx-2 shadow-sm" 
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${feat.highlight ? "text-[#FDCB6E]" : "text-amber-300"}`} />
                        <div className="flex flex-col gap-0.5">
                          {feat.highlight && (
                            <span className="inline-block bg-[#FDCB6E] text-neutral-950 text-[8px] font-black tracking-widest px-1.5 py-0.5 rounded-full w-max uppercase mb-1">
                              BÔNUS EXCLUSIVO
                            </span>
                          )}
                          <span className={`text-xs md:text-sm text-white font-medium ${feat.highlight ? "text-[#FDCB6E] font-black" : ""}`}>
                            {feat.text}
                          </span>
                        </div>
                      </div>
                      {feat.value && (
                        <span className="text-[10px] text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded shrink-0 font-black line-through decoration-red-600 decoration-2 mt-0.5">
                          {feat.value}
                        </span>
                      )}
                    </div>

                    {feat.text === "Acesso imediato em PDF" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/15 my-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4.5 h-4.5 text-amber-300 shrink-0" />
                          <span className="text-[11px] md:text-xs font-black leading-snug text-white">Garantia incondicional de 15 dias</span>
                        </div>
                        <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-2.5">
                          <Check className="w-4.5 h-4.5 text-amber-300 shrink-0" />
                          <span className="text-[11px] md:text-xs font-black leading-snug text-white">Suporte prioritário por e-mail</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action complete */}
            <div className="pt-8 space-y-3">
              <motion.a
                href="https://pay.wiapy.com/AjODV-E845wz"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(253, 203, 110, 0.4)",
                    "0 0 0 12px rgba(253, 203, 110, 0)",
                    "0 0 0 0 rgba(253, 203, 110, 0)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4.5 rounded-xl bg-[#FDCB6E] hover:bg-[#eab34c] text-neutral-950 font-black tracking-wider uppercase transition cursor-pointer text-center text-sm flex items-center justify-center block"
              >
                <span>QUERO KIT COMPLETO</span>
              </motion.a>
              
              <p className="text-[9px] text-center text-teal-200/70 uppercase tracking-widest font-bold">
                Acesso Vitalício • PDFs Prontos
              </p>
            </div>
          </div>

        </div>

        {/* Below pricing row text and payment safe badge */}
        <div className="mt-14 text-center space-y-6">
          <p className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            A maioria das profissionais escolhe o Kit Completo porque os bônus complementam os recursos e ajudam na preparação, condução e organização das sessões.
          </p>

          <div id="payment-safe-badge" className="inline-flex flex-col md:flex-row items-center gap-4 bg-white/70 border border-neutral-200/80 p-4 rounded-2xl shadow-sm justify-center">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#1ca296]" />
              <span>Compra 100% segura</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-neutral-300" />
            
            {/* Payment Logos */}
            <div className="flex flex-wrap gap-3 items-center justify-center text-[10px] text-gray-500 font-semibold">
              <span className="flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5 text-blue-600" /> Cartão de crédito
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                💵 Pix
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

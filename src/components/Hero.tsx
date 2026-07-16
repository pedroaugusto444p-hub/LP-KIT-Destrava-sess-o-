import { motion } from "motion/react";
import { Sparkles, Printer, FolderOpen, Layers, Globe, Shield, Lock, Zap } from "lucide-react";

interface HeroProps {
  scrollToOffer: () => void;
}

export default function Hero({ scrollToOffer }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-12 pb-20 px-4 bg-gradient-to-b from-teal-50/30 via-white to-transparent overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Small badge/pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="hero-badge"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
          KIT DESTRAVA SESSÃO
        </motion.div>

        {/* Gray subtitle / Question */}
        <p id="hero-pre-title" className="text-gray-600 text-lg md:text-xl lg:text-2xl font-extrabold text-neutral-800 leading-tight mb-4 max-w-3xl mx-auto">
          Seu paciente responde “não sei”, muda de assunto ou não consegue falar sobre o que sente?
        </p>

        {/* Big Bold Headline */}
        <h1 id="hero-main-title" className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.15] mb-6">
          <span className="text-[#1ca296]">+160 RECURSOS</span> TERAPÊUTICOS PARA <br />
          AJUDAR VOCÊ A <span className="text-[#1ca296]">APROFUNDAR SESSÕES</span> COM PACIENTES ADULTOS
        </h1>

        {/* Supporting description */}
        <p id="hero-description" className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
          Cartas, exercícios e atividades organizadas por demanda clínica para facilitar a expressão emocional, estimular reflexões e tornar suas sessões mais direcionadas.
        </p>

        {/* Badges/Highlights of categories */}
        <div id="hero-demands-pills" className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {["Ansiedade", "Autoestima", "Relacionamentos", "Luto", "Procrastinação", "Regulação emocional"].map((demand, idx) => (
            <span key={idx} className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs md:text-sm px-3 py-1.5 rounded-full font-bold transition">
              {demand}
            </span>
          ))}
        </div>

        {/* 3D Overlapping Card Mockup Fan (Pure CSS / Responsive) */}
        <div id="hero-mockup-container" className="relative w-full max-w-xl mx-auto my-12 flex justify-center items-center select-none">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://i.ibb.co/HDyPgrjG/Chat-GPT-Image-12-de-jul-de-2026-08-05-02.png"
            alt="Kit Destrava Sessão Mockup"
            referrerPolicy="no-referrer"
            className="w-full max-h-[380px] object-contain"
          />
        </div>

        {/* Feature badges below mockup */}
        <div id="hero-features-grid" className="grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center items-center gap-3 md:gap-4 max-w-3xl mx-auto mb-8 text-xs text-gray-700 font-semibold">
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/80 px-3.5 py-2 rounded-xl shadow-sm justify-center md:justify-start">
            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Acesso imediato após a compra</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/80 px-3.5 py-2 rounded-xl shadow-sm justify-center md:justify-start">
            <Printer className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Imprime e usa na mesma sessão</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/80 px-3.5 py-2 rounded-xl shadow-sm justify-center md:justify-start">
            <FolderOpen className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Organizado por demanda clínica</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/80 px-3.5 py-2 rounded-xl shadow-sm justify-center md:justify-start">
            <Layers className="w-4 h-4 text-teal-500 shrink-0" />
            <span>+160 recursos prontos para usar</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/80 px-3.5 py-2 rounded-xl shadow-sm justify-center md:justify-start col-span-2 md:col-auto">
            <Globe className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Funciona online e presencial</span>
          </div>
        </div>

        {/* Under mockup supporting taglines */}
        <div id="hero-quote-box" className="text-gray-600 text-sm md:text-base mb-10 leading-relaxed font-medium">
          <p className="text-xl md:text-2xl font-black text-neutral-800 tracking-tight leading-tight mb-2">
            Chega de depender apenas de perguntas improvisadas.
          </p>
          <span className="text-gray-900 font-bold">
            Tenha recursos práticos para conduzir sessões com mais estrutura, profundidade e participação do paciente.
          </span>
        </div>

        {/* Main call to action button */}
        <motion.button
          animate={{
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 20px 25px -5px rgba(28, 162, 150, 0.25), 0 8px 10px -6px rgba(28, 162, 150, 0.25)",
              "0 20px 25px -5px rgba(28, 162, 150, 0.5), 0 8px 10px -6px rgba(28, 162, 150, 0.5)",
              "0 20px 25px -5px rgba(28, 162, 150, 0.25), 0 8px 10px -6px rgba(28, 162, 150, 0.25)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToOffer}
          id="hero-cta-button"
          className="relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#1ca296] to-[#128a7f] text-white text-lg md:text-xl font-bold tracking-wide cursor-pointer overflow-hidden mb-5 group"
        >
          {/* Shimmer pulse effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: '1.5s' }} />
          Destravar minhas sessões
        </motion.button>

        {/* Badges of trust below button */}
        <div id="hero-trust-badges" className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] md:text-xs text-gray-500 font-semibold mt-4">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            Garantia de 15 dias
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            Pagamento seguro
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            Acesso imediato
          </span>
        </div>
      </div>
    </section>
  );
}

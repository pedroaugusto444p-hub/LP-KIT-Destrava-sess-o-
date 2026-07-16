import { ReactNode } from "react";
import { motion } from "motion/react";
import { CHALLENGE_ITEMS } from "../data";
import { 
  MessageSquareOff, 
  Smile, 
  Shuffle, 
  Brain, 
  CloudLightning, 
  HeartOff, 
  Ban, 
  Hourglass, 
  VolumeX, 
  RefreshCw 
} from "lucide-react";

interface ForWhomProps {
  scrollToOffer: () => void;
}

const ICON_MAP: Record<string, ReactNode> = {
  "not-knowing": <MessageSquareOff className="w-6 h-6 text-[#1ca296]" />,
  "all-good": <Smile className="w-6 h-6 text-[#1ca296]" />,
  "changing-topic": <Shuffle className="w-6 h-6 text-[#1ca296]" />,
  "rationalization": <Brain className="w-6 h-6 text-[#1ca296]" />,
  "anxious-thoughts": <CloudLightning className="w-6 h-6 text-[#1ca296]" />,
  "self-blame": <HeartOff className="w-6 h-6 text-[#1ca296]" />,
  "boundary-issue": <Ban className="w-6 h-6 text-[#1ca296]" />,
  "procrastination": <Hourglass className="w-6 h-6 text-[#1ca296]" />,
  "silent-patient": <VolumeX className="w-6 h-6 text-[#1ca296]" />,
  "knowing-no-change": <RefreshCw className="w-6 h-6 text-[#1ca296]" />,
};

export default function ForWhom({ scrollToOffer }: ForWhomProps) {
  return (
    <section id="for-whom-section" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 id="for-whom-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            Se você já ficou sem saber como aprofundar uma sessão, <span className="text-[#1ca296]">esse kit é para você</span>
          </h2>
          <p id="for-whom-subtitle" className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-semibold">
            Cada recurso foi pensado para uma situação comum no consultório.
          </p>
          <div className="mt-4 p-4 bg-teal-50/40 rounded-2xl border border-teal-100/60 max-w-2xl mx-auto text-left text-xs md:text-sm text-gray-600 space-y-2 leading-relaxed">
            <p>Sabe aquele momento em que você faz uma pergunta importante e o paciente responde apenas “não sei”?</p>
            <p>Ou quando ele fala durante toda a sessão, mas você sente que não consegue chegar ao ponto principal?</p>
          </div>
        </div>

        {/* 10 Grid Cards */}
        <div id="challenges-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {CHALLENGE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="flex items-center gap-4 p-5 bg-[#fbfbfb] hover:bg-teal-50/20 border border-neutral-100 rounded-2xl shadow-sm transition duration-300"
            >
              <div className="shrink-0 p-2 bg-white rounded-xl shadow-sm border border-neutral-100/50 flex items-center justify-center">
                {ICON_MAP[item.id] || <Smile className="w-6 h-6 text-[#1ca296]" />}
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Call */}
        <div className="text-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToOffer}
            className="px-10 py-4.5 rounded-full bg-[#1ca296] hover:bg-[#128a7f] text-white font-bold text-base md:text-lg shadow-lg shadow-teal-700/10 cursor-pointer transition duration-300"
          >
            Acessar o kit completo
          </motion.button>

          <p className="text-xs md:text-sm text-gray-500 italic max-w-xl mx-auto leading-relaxed">
            Essas são apenas algumas das situações abordadas. O Kit Destrava Sessão acompanha você nas demandas mais frequentes do atendimento psicológico de adultos, ajudando a criar novos caminhos para reflexão, expressão emocional e aprofundamento terapêutico.
          </p>
        </div>

      </div>
    </section>
  );
}

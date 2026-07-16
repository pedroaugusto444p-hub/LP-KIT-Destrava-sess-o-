import { motion } from "motion/react";
import { Shield, Lock, Zap } from "lucide-react";

interface MiddleUrgencypnlProps {
  scrollToOffer: () => void;
}

export default function MiddleUrgencypnl({ scrollToOffer }: MiddleUrgencypnlProps) {
  return (
    <section id="middle-urgency-section" className="py-20 px-4 bg-gradient-to-br from-[#12665e] via-[#10564f] to-[#0d4640] text-white text-center relative overflow-hidden">
      {/* Absolute visual subtle light flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-3xl -z-1" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        
        {/* Heavy headline */}
        <h2 id="middle-urgency-title" className="font-sans font-black text-3xl md:text-5xl tracking-tight leading-tight">
          Uma sessão travada <br className="hidden md:block" />
          <span className="text-[#a5f3fc]">pode aumentar a sensação de que nada está avançando</span>
        </h2>

        {/* Paragraph copy */}
        <p id="middle-urgency-p" className="text-teal-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          O paciente que não percebe progresso pode começar a questionar o processo. A pessoa que não consegue expressar o que sente pode continuar presa aos mesmos padrões. E você não precisa entrar em cada atendimento esperando que a pergunta certa apareça no momento certo. Você merece ter recursos que ajudem a organizar a sessão, estimular reflexões e abrir novos caminhos para a conversa.
        </p>

        {/* Styled button */}
        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToOffer}
            className="px-10 py-4.5 rounded-full bg-white text-[#10564f] hover:bg-neutral-50 font-extrabold text-sm md:text-base tracking-wider uppercase shadow-xl cursor-pointer transition duration-300"
          >
            Garantir mais estrutura nas sessões
          </motion.button>
        </div>

        {/* Small trust badges */}
        <div id="middle-trust-row" className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] text-teal-200/80 font-medium pt-4">
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            Acesso imediato
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-teal-300" />
            Garantia de 15 dias
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-teal-300" />
            Pagamento seguro
          </span>
        </div>

      </div>
    </section>
  );
}

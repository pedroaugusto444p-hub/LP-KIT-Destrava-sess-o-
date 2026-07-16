import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellModal({ isOpen, onClose, onAccept, onDecline }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="upsell-modal-backdrop" 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          id="upsell-modal-card"
          className="bg-white rounded-3xl shadow-2xl max-w-[440px] w-full p-6 md:p-8 border border-neutral-100 relative text-center overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Close X Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1.5 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Golden Badge */}
          <div className="bg-[#FEF5E7] border border-[#FDEBCA] px-4 py-1 rounded-full mb-4.5 mt-1">
            <span className="text-[#C28A1C] text-[10px] md:text-xs font-black uppercase tracking-wider">
              OFERTA ESPECIAL
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-extrabold text-xl md:text-2xl text-[#1e293b] leading-tight tracking-tight mb-3.5 max-w-sm">
            Espera! Temos uma oferta exclusiva pra você
          </h2>

          {/* Description */}
          <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed mb-5 max-w-[360px]">
            Aproveite e leve o <strong className="text-neutral-800 font-bold">Kit Completo</strong> com os 5 bônus exclusivos por um preço especial. São mais de R$97 em materiais extras por muito menos do que você imagina.
          </p>

          {/* Pricing area */}
          <div className="flex flex-col items-center justify-center gap-1 mb-5">
            <div className="flex items-center gap-3">
              {/* Old crossed out price */}
              <span className="text-[#f43f5e] font-bold line-through decoration-[#f43f5e] decoration-2 text-xs md:text-sm opacity-90">
                R$37,90
              </span>

              {/* New Teal price */}
              <div className="flex items-baseline text-[#1ca296]">
                <span className="text-lg font-extrabold mr-0.5">R$</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">27</span>
                <span className="text-lg font-extrabold">,90</span>
              </div>
            </div>

            {/* Sub-label */}
            <p className="text-[11px] text-neutral-400 font-medium tracking-wide">
              Pagamento único. Acesso imediato.
            </p>
          </div>

          {/* CTA main button */}
          <motion.a
            href="https://pay.wiapy.com/mxph2nX2Ud4v"
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 4px 10px -1px rgba(28, 162, 150, 0.2), 0 2px 4px -1px rgba(28, 162, 150, 0.1)",
                "0 10px 25px -1px rgba(28, 162, 150, 0.45), 0 4px 10px -1px rgba(28, 162, 150, 0.3)",
                "0 4px 10px -1px rgba(28, 162, 150, 0.2), 0 2px 4px -1px rgba(28, 162, 150, 0.1)"
              ]
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAccept}
            className="w-full max-w-[320px] py-3.5 px-5 rounded-full bg-[#1ca296] hover:bg-[#128a7f] text-white font-extrabold tracking-wider uppercase cursor-pointer transition text-center text-xs md:text-sm leading-none shadow-xl flex items-center justify-center block"
          >
            QUERO O KIT COMPLETO COM DESCONTO
          </motion.a>

          {/* Decline/dismiss text-link */}
          <a
            href="https://pay.wiapy.com/cABMu-EYJpF_"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDecline}
            className="mt-5 text-[10px] md:text-xs text-neutral-400 hover:text-neutral-600 underline font-extrabold uppercase tracking-wider transition cursor-pointer block text-center"
          >
            NÃO, QUERO APENAS O KIT BÁSICO
          </a>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

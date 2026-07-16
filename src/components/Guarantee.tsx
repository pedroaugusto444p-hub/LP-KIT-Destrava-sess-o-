import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section id="guarantee-section" className="py-16 px-4 bg-white border-t border-b border-neutral-100">
      <div className="max-w-3xl mx-auto bg-[#fafafa] border border-neutral-200/50 rounded-3xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center">
        
        {/* Left column: Circular Seal Stamp (Highly Visual) */}
        <div className="shrink-0 relative flex items-center justify-center">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-[#1ca296] bg-teal-50/40 flex flex-col items-center justify-center text-center p-3 relative shadow-inner">
            {/* Stamp edge styling */}
            <div className="absolute inset-1 rounded-full border border-[#1ca296]/30 border-dashed" />
            
            <span className="text-2xl md:text-3xl font-black text-[#1ca296] leading-none">15</span>
            <span className="text-[10px] md:text-xs font-black text-[#1ca296] uppercase tracking-widest mt-1">Dias de</span>
            <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase mt-0.5">Garantia</span>
          </div>
          
          {/* Sparkly corner seal icon */}
          <div className="absolute -bottom-1 -right-1 bg-[#1ca296] text-white p-2 rounded-full shadow-md border border-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>

        {/* Right column: Guarantee copy text */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1ca296] block">
            15 dias de garantia
          </span>
          <h3 className="font-sans font-black text-2xl text-gray-900 tracking-tight">
            Compra sem risco
          </h3>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Você tem 15 dias para acessar o kit, explorar os materiais e avaliar como os recursos podem complementar suas sessões. Caso não fique satisfeita, poderá solicitar o reembolso dentro do período de garantia, de acordo com as condições da plataforma de pagamento. Sem burocracia.
          </p>
          
          <p className="text-sm md:text-base text-gray-900 font-extrabold italic bg-teal-50/50 inline-block px-3 py-1 rounded">
            O risco é nosso. A decisão é sua.
          </p>
        </div>

      </div>
    </section>
  );
}

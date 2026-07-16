import { HelpCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#111] text-neutral-400 py-16 px-4 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto space-y-8 text-xs text-center md:text-left">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: Copy */}
          <div className="space-y-1.5">
            <p className="font-bold text-neutral-200">Kit Destrava Sessão © {currentYear}</p>
            <p className="text-[11px] text-neutral-500">Todos os direitos reservados. Recursos de apoio terapêutico profissional para adultos.</p>
          </div>

          {/* Right Side: Links and security lock */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-neutral-400">
              <HelpCircle className="w-3.5 h-3.5 text-teal-400" /> Suporte: suportelogisticadigital@gmail.com
            </span>
          </div>
        </div>

        {/* Detailed professional disclaimer text */}
        <div className="border-t border-neutral-800 pt-6 text-[10px] text-neutral-500 max-w-4xl leading-relaxed text-justify space-y-2">
          <p>
            <strong>Disclaimer:</strong> Este produto é um material digital educativo destinado a profissionais e estudantes da área de saúde mental. Os recursos não substituem formação profissional, avaliação individualizada, supervisão clínica, diagnóstico, protocolos específicos ou acompanhamento especializado. A seleção e a aplicação de cada material são de responsabilidade do profissional, considerando sua abordagem, qualificação, contexto clínico e as necessidades individuais de cada paciente. Os resultados podem variar de acordo com cada caso, contexto e forma de utilização.
          </p>
        </div>

      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Layers, Sparkles, Zap } from "lucide-react";

interface InteractiveResourcePreviewProps {
  scrollToOffer: () => void;
}

const CAROUSEL_SLIDES = [
  {
    id: "slide-3",
    title: "Diário de Pensamentos",
    tag: "COGNITIVO-COMPORTAMENTAL 🧠",
    subtitle: "Registro e Reestruturação de Pensamentos",
    description: "Um material prático e intuitivo para ajudar seus pacientes a identificarem distorções cognitivas, facilitando o processo de reestruturação de crenças limitantes nas sessões e como tarefa terapêutica para casa.",
    type: "image",
    imageUrl: "https://i.ibb.co/RGR48K2M/Captura-de-Tela-3.png",
    bullets: [
      "Layout clean e super didático para uso diário do paciente",
      "Perguntas norteadoras para guiar a reflexão e identificar gatilhos",
      "Espaço dedicado para registrar emoções, reações físicas e pensamentos alternativos"
    ]
  },
  {
    id: "slide-4",
    title: "Regulação Emocional",
    tag: "HABILIDADES CLÍNICAS 🧘‍♀️",
    subtitle: "Manejo Prático de Ansiedade e Crises",
    description: "Recursos visuais essenciais para psicoeducação sobre regulação emocional. Auxilia o paciente adulto a identificar sua zona de tolerância e a aplicar técnicas eficazes de autorregulação e ancoragem.",
    type: "image",
    imageUrl: "https://i.ibb.co/S7Vphxbr/Captura-de-Tela-4.png",
    bullets: [
      "Gráficos interativos para mapeamento de intensidade emocional",
      "Estratégias passo a passo de grounding e técnicas de respiração guiada",
      "Ideal para pacientes em momentos de crise, ansiedade ou desregulação intensa"
    ]
  },
  {
    id: "slide-5",
    title: "Baralho das Emoções",
    tag: "PSICOEDUCAÇÃO 🃏",
    subtitle: "Identificação e Nomeação de Sentimentos",
    description: "Cartas terapêuticas dinâmicas para ajudar o paciente a decodificar estados internos complexos. Excelente para contornar a racionalização excessiva ou romper o silêncio inicial em sessões de acolhimento.",
    type: "image",
    imageUrl: "https://i.ibb.co/8LrGxFLj/Captura-de-Tela-5.png",
    bullets: [
      "Definições objetivas de sentimentos primários, secundários e mistos",
      "Perguntas reflexivas e instigantes para estimular a autorreflexão profunda",
      "Manejo clínico simplificado e aplicável a diversas demandas psicológicas"
    ]
  },
  {
    id: "slide-6",
    title: "Termômetro do Estresse",
    tag: "AUTOCONTROLE 🌡️",
    subtitle: "Rastreamento de Níveis de Estresse e Sobrecarga",
    description: "Uma escala visual didática para mapear e graduar os estados de ativação fisiológica e psicológica do estresse, promovendo o desenvolvimento de estratégias preventivas personalizadas.",
    type: "image",
    imageUrl: "https://i.ibb.co/r2JphYV9/Captura-de-Tela-6.png",
    bullets: [
      "Metáfora visual de fácil compreensão para qualquer paciente adulto",
      "Facilita o rastreamento semanal ou diário dos níveis de estresse e estressores",
      "Acompanha plano de contingência para as fases de alerta, resistência e exaustão"
    ]
  },
  {
    id: "slide-7",
    title: "Ficha de Anamnese",
    tag: "PRODUTIVIDADE CLÍNICA 📋",
    subtitle: "Roteiro Estruturado de Primeira Sessão",
    description: "Roteiros refinados de anamnese para conduzir o primeiro atendimento com extrema segurança, garantindo a coleta organizada das informações de forma natural, acolhedora e ética.",
    type: "image",
    imageUrl: "https://i.ibb.co/D2zwMBj/Captura-de-Tela-7.png",
    bullets: [
      "Estrutura fluida que respeita o tempo e as defesas iniciais do paciente",
      "Perguntas cirúrgicas para investigar a queixa principal e o histórico familiar",
      "Facilita o estabelecimento do vínculo terapêutico inicial (rapport)"
    ]
  },
  {
    id: "slide-8",
    title: "Metas Terapêuticas",
    tag: "PLANEJAMENTO ESTRATÉGICO 🎯",
    subtitle: "Definição de Objetivos de Vida e Sessões",
    description: "Ferramenta estruturada para co-criar metas realistas, tangíveis e mensuráveis junto ao paciente, acompanhando o progresso e a evolução clínica ao longo do processo terapêutico.",
    type: "image",
    imageUrl: "https://i.ibb.co/8DNfqGP5/Captura-de-Tela-8.png",
    bullets: [
      "Metodologia clara para quebrar grandes problemas em pequenos passos viáveis",
      "Promove o engajamento e a percepção ativa de melhora do próprio paciente",
      "Reduz a sensação de estagnação ou de sessões sem rumo definido"
    ]
  },
  {
    id: "slide-9",
    title: "Guia de Diálogos Práticos",
    tag: "MANEJO DE RESISTÊNCIA 📕",
    subtitle: "Como Lidar com Silêncios e Bloqueios",
    description: "Roteiros e estratégias de comunicação validadas para contornar silêncios difíceis, respostas monossilábicas e defesas rígidas de pacientes resistentes sem gerar atrito ou desconforto.",
    type: "image",
    imageUrl: "https://i.ibb.co/gZ9GHTCP/Captura-de-Tela-9.png",
    bullets: [
      "Intervenções textuais prontas para desbloquear a fala e aprofundar sentimentos",
      "Reduz de imediato a ansiedade do próprio terapeuta em sessões silenciosas",
      "Estratégias de validação segura que fortalecem a aliança terapêutica"
    ]
  },
  {
    id: "slide-10",
    title: "Rastreador de Hábitos",
    tag: "FUTURO E ROTINA 📅",
    subtitle: "Monitoramento Diário de Hábitos Saudáveis",
    description: "Material dinâmico voltado para a construção de novas rotinas, auxiliando o paciente a mapear suas atividades diárias e a manter-se comprometido com o plano de ação terapêutico.",
    type: "image",
    imageUrl: "https://i.ibb.co/39nxTSbB/Captura-de-Tela-10.png",
    bullets: [
      "Feedback visual instantâneo que gera motivação e sensação de conquista",
      "Fácil de preencher e de revisar em conjunto durante as sessões de retorno",
      "Permite identificar padrões de comportamento prejudiciais e correlações de humor"
    ]
  },
  {
    id: "slide-11",
    title: "Plano de Enfrentamento",
    tag: "AUTOCUIDADO 🛡️",
    subtitle: "Prevenção de Recaídas e Autonomia",
    description: "Guia estruturado para consolidar os aprendizados da terapia, auxiliando o paciente a elaborar seu próprio plano preventivo de recaídas e a fortalecer sua autoconfiança de forma duradoura.",
    type: "image",
    imageUrl: "https://i.ibb.co/35wpkC8S/Captura-de-Tela-11.png",
    bullets: [
      "Ferramenta de alta relevância para a fase de alta ou encerramento de ciclos",
      "Ajuda a mapear sinais de alerta precoces e pessoas de apoio confiáveis",
      "Estabelece lembretes práticos das técnicas que mais funcionaram na terapia"
    ]
  }
];

export default function InteractiveResourcePreview({ scrollToOffer }: InteractiveResourcePreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3500); // Faster autoplay (3.5 seconds)
    return () => clearInterval(timer);
  }, []);

  const currentSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <section id="interactive-preview-section" className="bg-neutral-50/55 py-20 px-4 border-t border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="preview-section-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            Veja o kit por dentro
          </h2>
          <p id="preview-section-subtitle" className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto font-medium">
            Explore abaixo o carrossel de materiais do Kit Destrava Sessão. Veja exemplos reais de como os arquivos são estruturados para enriquecer sua prática clínica.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div id="preview-interactive-box" className="bg-white rounded-3xl border border-neutral-200/75 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[480px] max-w-5xl mx-auto">
          
          {/* Visual Sandbox/Image Display Panel (Left 7 Columns) */}
          <div className="lg:col-span-7 bg-neutral-50 text-gray-800 p-6 md:p-8 flex flex-col justify-between relative min-h-[400px] border-b lg:border-b-0 lg:border-r border-neutral-200/60">
            
            {/* Top Indicator */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#1ca296] bg-[#1ca296]/10 px-2.5 py-1 rounded-full border border-[#1ca296]/20">
                {currentSlide.tag}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono font-semibold">
                Slide {activeIndex + 1} de {CAROUSEL_SLIDES.length}
              </span>
            </div>

            {/* Slider Content Area */}
            <div className="my-auto flex flex-col items-center justify-center py-6 w-full h-full min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center items-center h-full"
                >
                  {currentSlide.imageUrl && (
                    <div className="relative max-w-full lg:max-w-md w-full flex justify-center items-center">
                      <img
                        src={currentSlide.imageUrl}
                        alt={currentSlide.title}
                        referrerPolicy="no-referrer"
                        className="w-full max-h-[380px] md:max-h-[460px] object-contain rounded-xl shadow-2xl border border-neutral-200"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Copy description panel (Right 5 Columns) */}
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white text-left">
            
            <div className="space-y-4">
              <span className="text-amber-600 text-xs font-extrabold uppercase tracking-widest block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {currentSlide.tag}
              </span>
              <h3 className="font-sans font-black text-2xl text-gray-950 leading-tight">
                {currentSlide.title}
              </h3>
              <p className="text-[#1ca296] text-xs font-bold uppercase tracking-wider">
                {currentSlide.subtitle}
              </p>
              
              <hr className="border-neutral-100 my-4" />

              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {currentSlide.description}
              </p>

              <div className="space-y-2.5 pt-4">
                {currentSlide.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-semibold leading-snug">
                    <CheckCircle className="w-4 h-4 text-[#1ca296] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA panel */}
            <div className="pt-8 space-y-3">
              <button
                onClick={scrollToOffer}
                className="w-full bg-[#1ca296] hover:bg-[#128a7f] text-white py-4 rounded-xl font-bold tracking-wide transition shadow-lg shadow-teal-700/10 cursor-pointer flex items-center justify-center gap-2 uppercase text-sm"
              >
                <Layers className="w-4 h-4" />
                Acessar o acervo completo
              </button>
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-bold flex items-center justify-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" />
                Acesso Vitalício • PDFs Prontos
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

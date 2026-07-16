import { motion } from "motion/react";
import { ArrowDown, Star, Quote } from "lucide-react";

interface TestimonialsProps {
  scrollToOffer: () => void;
}

const CLINICAL_TESTIMONIALS = [
  {
    id: "depo-1",
    title: "Sessões mais profundas",
    name: "Dra. Camila R.",
    role: "Psicóloga",
    photoUrl: "https://i.ibb.co/qMPnDyd1/f2e6e55bddcb8003dc70699fadb64840.jpg",
    quote: "Eu tinha alguns pacientes que respondiam apenas ‘não sei’ e era difícil aprofundar certos assuntos. As cartas de emoções e as perguntas direcionadas ajudaram muito a organizar a conversa. Hoje consigo conduzir essas sessões com mais estrutura e segurança."
  },
  {
    id: "depo-2",
    title: "Economia de tempo",
    name: "Mariana S.",
    role: "Psicóloga Clínica",
    photoUrl: "https://i.ibb.co/x8g1dmsN/a0532dfd58cb00864dc646ed68b9313e.jpg",
    quote: "O que mais gostei foi a organização por demanda. Antes eu perdia muito tempo procurando atividades para ansiedade, autoestima e relacionamentos. Agora seleciono o recurso, imprimo e adapto de acordo com o objetivo da sessão. Facilitou bastante minha rotina."
  },
  {
    id: "depo-3",
    title: "Participação do paciente",
    name: "Dr. Lucas M.",
    role: "Psicólogo",
    photoUrl: "https://i.ibb.co/LzTqN5qm/27f5930b3ad4f59a109c31b4a6d8f45e.jpg",
    quote: "Os recursos visuais deixaram alguns pacientes mais participativos, principalmente aqueles que tinham dificuldade para nomear o que estavam sentindo. O material é bem organizado, fácil de usar e oferece diferentes caminhos para trabalhar durante a sessão."
  }
];

export default function Testimonials({ scrollToOffer }: TestimonialsProps) {
  return (
    <section id="testimonials-section" className="py-20 px-4 bg-neutral-50/20 border-t border-b border-neutral-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] uppercase font-black tracking-widest text-[#1ca296] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            DEPOIMENTOS REAIS
          </span>
          <h2 id="testimonials-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            O que as psicólogas dizem na prática
          </h2>
          <p id="testimonials-subtitle" className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Veja a experiência de profissionais que transformaram a condução dos seus atendimentos utilizando o Kit Destrava Sessão.
          </p>
        </div>

        {/* Elegant Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINICAL_TESTIMONIALS.map((depo, index) => (
            <motion.div
              key={depo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-neutral-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300 relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-8 text-neutral-100 shrink-0">
                <Quote className="w-8 h-8 text-neutral-100 fill-neutral-100" />
              </div>
              
              <div className="space-y-4">
                {/* Stars Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1ca296] text-[#1ca296]" />
                  ))}
                </div>

                {/* Testimonial Title */}
                <h4 className="font-sans font-extrabold text-gray-900 text-base md:text-lg">
                  {depo.title}
                </h4>

                {/* Quote Text */}
                <p className="text-gray-600 text-sm leading-relaxed italic font-medium">
                  “{depo.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3">
                <img
                  src={depo.photoUrl}
                  alt={depo.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200 shadow-sm"
                />
                <div>
                  <h5 className="font-sans font-extrabold text-sm text-gray-900">
                    {depo.name}
                  </h5>
                  <p className="text-xs text-[#1ca296] font-bold">
                    {depo.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider">
            Oferta por tempo limitado. Garanta seu acesso antes que a condição especial seja encerrada.
          </p>
          
          <button
            onClick={scrollToOffer}
            className="inline-flex flex-col items-center gap-1.5 text-sm font-extrabold text-[#1ca296] hover:text-[#128a7f] cursor-pointer transition duration-200 animate-pulse uppercase tracking-wider"
          >
            <span>Ver oferta</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}

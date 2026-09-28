import React from 'react';
import { MessageCircle, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { EXPERT_INFO } from '../data/expertData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Subtle organic background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-emerald-100/40 via-stone-100/20 to-transparent blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          {/* Location & Expert Meta - Clean Typography without Pill Enclosures */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Madureira, Rio de Janeiro
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600">Consultório Próprio</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-emerald-700">Horários Abertos</span>
          </div>

          {/* Expert Photo Framing - Centered, Square / Editorial Portrait */}
          <div className="relative mb-7 w-full max-w-xs sm:max-w-sm">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200">
              <img
                src={EXPERT_INFO.heroPhoto}
                alt={`Foto da ${EXPERT_INFO.name}, especialista em Clareamento 3D, Ortodontia e Invisalign`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" 
              />
              <div className="absolute bottom-3 left-4 right-4 text-left">
                <p className="text-white text-xs font-semibold drop-shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento direto com a Dra. Thayana
                </p>
                <p className="text-stone-200 text-[11px] drop-shadow-sm">
                  {EXPERT_INFO.specialties}
                </p>
              </div>
            </div>

            {/* Quick Floating Trust Marker */}
            <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-2 text-left">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-stone-900 leading-tight">Primeira Consulta</p>
                <p className="text-[10px] text-emerald-700 font-medium">100% Gratuita</p>
              </div>
            </div>
          </div>

          {/* First Person Headline - Clean & High Impact */}
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.18] max-w-2xl mb-4">
            Eu sou a <span className="text-emerald-800">Dra. Thayana Ulrichsen</span>, dentista especialista em transformar sorrisos em Madureira.
          </h1>

          {/* Subheadline oriented to benefit and security */}
          <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-7">
            Tratamentos modernos em <strong className="text-stone-800 font-semibold">Clareamento 3D, Ortodontia e Invisalign</strong>. Você é recebido diretamente por mim, em um ambiente seguro, humano e sem esteira de clínica.
          </p>

          {/* Main WhatsApp CTA Button */}
          <div className="w-full max-w-md flex flex-col items-center">
            <a
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative flex items-center justify-center gap-3 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-white shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-center">Agendar Primeira Consulta Gratuita no WhatsApp</span>
            </a>

            {/* Microtext below button */}
            <p className="mt-2.5 text-xs text-stone-500 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Resposta rápida</span>
              <span aria-hidden="true">·</span>
              <span>Sem compromisso</span>
              <span aria-hidden="true">·</span>
              <span>Conversa direta comigo</span>
            </p>
          </div>

          {/* Highlights summary bar */}
          <div className="mt-10 pt-6 border-t border-stone-200/80 w-full max-w-xl grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="font-display text-lg sm:text-xl font-bold text-stone-900">100%</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">Atendimento Individual</p>
            </div>
            <div>
              <p className="font-display text-lg sm:text-xl font-bold text-stone-900">Zero</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">Procedimento Forçado</p>
            </div>
            <div>
              <p className="font-display text-lg sm:text-xl font-bold text-stone-900">3D & Digital</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">Tecnologia e Precisão</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

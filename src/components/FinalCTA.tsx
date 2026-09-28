import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { MessageCircle, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle organic light accent */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/2 translate-x-1/2 w-96 h-96 bg-emerald-700/20 blur-3xl pointer-events-none -z-0" 
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Urgent and exclusive kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">
          <Calendar className="w-3.5 h-3.5" />
          <span>Agenda com vagas semanais limitadas para garantir atenção total</span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-xl mx-auto leading-tight">
          O sorriso que você sempre quis começa com uma conversa.
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Dê o primeiro passo sem nenhum risco. Marque agora a sua <strong className="text-emerald-400 font-semibold">Primeira Consulta Gratuita</strong> e venha me conhecer no consultório em Madureira.
        </p>

        {/* WhatsApp Main Button */}
        <div className="flex flex-col items-center max-w-md mx-auto">
          <a
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group relative flex items-center justify-center gap-3 py-4 sm:py-5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-950/40 hover:shadow-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-white shrink-0 group-hover:scale-110 transition-transform" />
            <span>Agendar Primeira Consulta Gratuita</span>
          </a>

          {/* Microtext reassurance */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Gratuita
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Sem nenhum compromisso
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Conversa direta comigo
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

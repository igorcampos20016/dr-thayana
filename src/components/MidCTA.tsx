import React from 'react';
import { MessageCircle, Shield, CheckCircle2 } from 'lucide-react';
import { EXPERT_INFO } from '../data/expertData';

export const MidCTA: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-emerald-900 via-stone-900 to-stone-950 text-white relative overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" 
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4 border border-emerald-500/30">
          <Shield className="w-3.5 h-3.5" />
          <span>Primeira Avaliação 100% Gratuita</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Tire suas dúvidas diretamente comigo, sem nenhum custo ou obrigação
        </h2>

        <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
          Você não precisa decidir nada agora. Venha ao consultório em Madureira, tire todas as dúvidas sobre o seu caso e saia com uma visão clara sobre as opções de tratamento.
        </p>

        <div className="flex flex-col items-center">
          <a
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-base rounded-2xl shadow-xl transition-all active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-stone-950" />
            <span>Falar com a Dra. Thayana no WhatsApp</span>
          </a>

          <div className="mt-3 flex items-center gap-3 text-[11px] text-stone-400">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Sem compromisso
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Resposta rápida
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Consultório seguro
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

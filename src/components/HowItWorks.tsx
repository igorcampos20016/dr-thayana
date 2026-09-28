import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/expertData';
import { MessageSquare, CalendarCheck, Sparkles, Check } from 'lucide-react';

const stepIcons = [MessageSquare, CalendarCheck, Sparkles];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Simples, Rápido e Sem Pressão
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Como funciona a sua primeira consulta gratuita
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Veja como é simples iniciar o cuidado do seu sorriso em apenas 3 passos:
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = stepIcons[index] || Sparkles;
            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-bold text-emerald-700">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Passo descomplicado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 text-center p-4 rounded-2xl bg-white border border-stone-200 max-w-xl mx-auto">
          <p className="text-xs font-semibold text-stone-900">
            Você não paga absolutamente nada pela primeira avaliação presencial.
          </p>
          <p className="text-[11px] text-stone-500 mt-0.5">
            Você só decide iniciar qualquer tratamento se sentir 100% de segurança e transparência.
          </p>
        </div>

      </div>
    </section>
  );
};

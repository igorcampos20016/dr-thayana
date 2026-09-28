import React from 'react';
import { EXPERT_INFO, TESTIMONIALS } from '../data/expertData';
import { Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const BackstageProof: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Experiência & Bastidores
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Cuidado que você sente desde o primeiro contato
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Um ambiente pensado nos mínimos detalhes para garantir biossegurança, conforto e tranquilidade para o seu tratamento.
          </p>
        </div>

        {/* Backstage Photos Grid - Aligned & Square */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          
          {/* Backstage 1 */}
          <div className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/80 p-3 flex flex-col">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 mb-3">
              <img
                src={EXPERT_INFO.heroPhoto}
                alt="Dra. Thayana Ulrichsen - Atendimento personalizado em Madureira"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                Atendimento personalizado
              </div>
            </div>
            <div className="px-1 pb-1">
              <h4 className="text-sm font-bold text-stone-900">Planejamento exclusivo</h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Cada sessão é conduzida com calma, tirando todas as suas dúvidas antes de qualquer intervenção.
              </p>
            </div>
          </div>

          {/* Backstage 2 */}
          <div className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/80 p-3 flex flex-col">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 mb-3">
              <img
                src={EXPERT_INFO.authorityPhoto}
                alt="Dra. Thayana Ulrichsen - Consultório e tecnologia odontológica"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                Biossegurança & Conforto
              </div>
            </div>
            <div className="px-1 pb-1">
              <h4 className="text-sm font-bold text-stone-900">Tecnologia e cuidado minucioso</h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Esterilização hospitalar rigorosa e materiais de primeira linha para a sua proteção.
              </p>
            </div>
          </div>

        </div>

        {/* Patient Testimonials */}
        <div className="pt-2">
          <div className="text-center mb-6">
            <h3 className="font-display text-xl font-bold text-stone-900">
              O que dizem os pacientes que já passaram pelo consultório
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60">
                  <p className="text-xs font-bold text-stone-900">{t.name}</p>
                  <p className="text-[11px] text-emerald-700 font-medium">
                    {t.procedure} • {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

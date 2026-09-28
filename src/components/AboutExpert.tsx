import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { Check, Heart, Award, Sparkles, MapPin } from 'lucide-react';

export const AboutExpert: React.FC = () => {
  return (
    <section id="quem-sou-eu" className="py-12 sm:py-16 bg-white border-y border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Autoridade & Cuidado Pessoal
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Quem sou eu e como cuido do seu sorriso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Photo Column - Perfectly Aligned Square/Portrait */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square w-full rounded-3xl overflow-hidden shadow-lg border-2 border-stone-100 bg-stone-100">
                <img
                  src={EXPERT_INFO.authorityPhoto}
                  alt={`Dra. Thayana Ulrichsen no consultório em Madureira`}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Authority Badge */}
              <div className="absolute -bottom-3 left-4 bg-stone-900 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-md flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>{EXPERT_INFO.cro}</span>
                <span className="text-stone-400">·</span>
                <span>Madureira, RJ</span>
              </div>
            </div>
          </div>

          {/* Text & Bullets Column */}
          <div className="md:col-span-7 flex flex-col gap-4 text-stone-700">
            <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
              "Para mim, odontologia não é uma linha de produção. É sobre recuperar a confiança de sorrir em fotos, comer sem dor e se sentir seguro consigo mesmo."
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-stone-600">
              Eu não trabalho com metas de clínica corporativa. Cada paciente que entra no meu consultório na <strong className="text-stone-900 font-semibold">Rua Carolina Machado</strong> recebe atenção minuciosa, escuta ativa e um planejamento 100% desenhado para o seu rosto e suas necessidades.
            </p>

            {/* Differential Bullets */}
            <div className="mt-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Atendimento 100% individualizado</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Eu mesma realizo sua avaliação, seu planejamento e cada uma das suas sessões de manutenção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Clareamento 3D & Invisalign com Previsibilidade</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Utilizamos planejamento estético de última geração para alinhar seus dentes e devolver a luminosidade sem desconfortos desnecessários.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Acolhimento para quem tem medo ou receio</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Técnicas gentis, explicação clara passo a passo e um ambiente calmo para você relaxar do início ao fim.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Consultório de fácil acesso no centro de Madureira</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Rua Carolina Machado 560, Sala 533. Ponto estratégico com total conveniência de transporte.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

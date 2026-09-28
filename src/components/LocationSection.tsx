import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { MapPin, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-16 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Localização Privilegiada
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Consultório em Madureira - RJ
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Local seguro, com portaria, elevadores e fácil acesso por trem, BRT, ônibus e carro.
          </p>
        </div>

        {/* Location Card & Map Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  {EXPERT_INFO.address}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  {EXPERT_INFO.neighborhood} • {EXPERT_INFO.state} • CEP {EXPERT_INFO.cep}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-100">
                <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs text-stone-700 font-medium">
                  Edifício comercial com portaria e segurança
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-100">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs text-stone-700 font-medium">
                  Atendimento com horário agendado individual
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={EXPERT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span>Como Chegar (Abrir no Google Maps / Waze)</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Visual Location Frame */}
            <div className="aspect-[4/3] rounded-2xl bg-emerald-950 text-white p-5 flex flex-col justify-between border border-emerald-900/50 shadow-inner relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">
                  Ponto de Referência
                </span>
                <h4 className="text-sm font-bold text-white mt-1">
                  Coração de Madureira
                </h4>
                <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                  Localizado na movimentada Rua Carolina Machado, próximo à estação de Madureira, com farta condução e comércio próximo.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-emerald-800/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-200">
                  Sala 533
                </span>
                <span className="text-[11px] text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded-md">
                  Ambiente Climatizado
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

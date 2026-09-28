import React from 'react';
import { TRUST_POINTS } from '../data/expertData';
import { 
  UserCheck, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  MapPin,
  LucideIcon 
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  ShieldCheck,
  Sparkles,
  Clock,
  HeartHandshake,
  MapPin,
};

export const TrustCards: React.FC = () => {
  return (
    <section id="por-que-confiar" className="py-12 sm:py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Transparência & Respeito
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Por que confiar seu sorriso aos meus cuidados?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Um tratamento odontológico de verdade precisa de segurança, clareza e atenção humana. Veja o que você encontra aqui:
          </p>
        </div>

        {/* 6 Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {TRUST_POINTS.map((point, index) => {
            const Icon = iconMap[point.icon] || Sparkles;
            return (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-emerald-700 flex items-center justify-center mb-3 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

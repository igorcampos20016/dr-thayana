import React from 'react';
import { MessageCircle } from 'lucide-react';
import { EXPERT_INFO } from '../data/expertData';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single element brand wordmark */}
        <a 
          href="#" 
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 hover:text-emerald-800 transition-colors"
        >
          {EXPERT_INFO.name}
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
          <a href="#quem-sou-eu" className="hover:text-stone-900 transition-colors">
            Quem Sou Eu
          </a>
          <a href="#resultados" className="hover:text-stone-900 transition-colors">
            Resultados
          </a>
          <a href="#por-que-confiar" className="hover:text-stone-900 transition-colors">
            Diferenciais
          </a>
          <a href="#como-funciona" className="hover:text-stone-900 transition-colors">
            Como Funciona
          </a>
          <a href="#localizacao" className="hover:text-stone-900 transition-colors">
            Localização
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-2">
          <a
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span className="hidden xs:inline">1ª Consulta Gratuita</span>
            <span className="xs:hidden">Agendar</span>
          </a>
        </div>
      </div>
    </header>
  );
};

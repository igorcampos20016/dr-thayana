import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-8 border-b border-stone-800/80">
          
          {/* Col 1: Expert brand */}
          <div className="md:col-span-6 flex flex-col gap-2">
            <h3 className="font-display text-lg font-bold text-white tracking-tight">
              {EXPERT_INFO.name}
            </h3>
            <p className="text-stone-400 text-xs max-w-sm">
              {EXPERT_INFO.specialties}. {EXPERT_INFO.tagline}.
            </p>
            <p className="text-stone-500 text-[11px] mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{EXPERT_INFO.address}, {EXPERT_INFO.neighborhood} - {EXPERT_INFO.state}</span>
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h4 className="text-xs font-bold text-stone-200 uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col gap-1.5 text-stone-400">
              <a href="#quem-sou-eu" className="hover:text-white transition-colors">Quem Sou Eu</a>
              <a href="#resultados" className="hover:text-white transition-colors">Galeria de Resultados</a>
              <a href="#por-que-confiar" className="hover:text-white transition-colors">Diferenciais</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
              <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
            </nav>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h4 className="text-xs font-bold text-stone-200 uppercase tracking-wider">
              Canais Diretos
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={EXPERT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp: {EXPERT_INFO.whatsappNumberDisplay}</span>
              </a>

              <a
                href={EXPERT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: {EXPERT_INFO.instagramHandle}</span>
              </a>

              <a
                href={EXPERT_INFO.instagramSecondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors text-[11px]"
              >
                <Instagram className="w-3.5 h-3.5 text-stone-500" />
                <span>Instagram Parceiro / Contato</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <p>
            © {new Date().getFullYear()} {EXPERT_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right text-stone-400">
            Conforme Código de Ética Odontológica (Conselho Federal de Odontologia).
          </p>
        </div>

      </div>
    </footer>
  );
};

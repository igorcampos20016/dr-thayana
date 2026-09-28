import React, { useState } from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { MessageCircle, Send, X, Instagram, CheckCircle2 } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState(
    'Olá, gostaria de agendar uma consulta com a Dra Thayana 😃'
  );

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const encoded = encodeURIComponent(customText);
    const url = `https://api.whatsapp.com/send?phone=5521982892880&text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenInstagram = () => {
    // Open Instagram profile / DM
    window.open('https://www.instagram.com/dralaissimas/', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Interactive Quick Chat Drawer / Popup */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* WhatsApp Chat Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/60 bg-stone-100">
                <img
                  src={EXPERT_INFO.heroPhoto}
                  alt={EXPERT_INFO.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-emerald-800 rounded-full" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">{EXPERT_INFO.name}</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online • Responde rápido
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-100 hover:text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              aria-label="Fechar janela de conversa"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Simulation */}
          <div className="p-4 bg-stone-100/80 min-h-[140px] flex flex-col justify-end space-y-2.5 text-xs">
            {/* Expert message balloon */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-2xs border border-stone-200/80 max-w-[85%] text-stone-800">
              <p className="leading-relaxed">
                Olá! Seja muito bem-vindo(a). Como posso te ajudar a conquistar o sorriso dos seus sonhos hoje? ✨
              </p>
              <span className="text-[9px] text-stone-400 block text-right mt-1">Agora</span>
            </div>

            {/* Quick reminder */}
            <div className="text-[10px] text-stone-500 text-center font-medium bg-emerald-50/80 py-1 rounded-lg border border-emerald-100">
              Primeira consulta gratuita • Sem compromisso
            </div>
          </div>

          {/* Message Input & Send Action */}
          <form onSubmit={handleSendWhatsApp} className="p-3 bg-white border-t border-stone-200">
            <div className="relative flex items-center">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="w-full text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-3 pr-10 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer active:scale-95"
                title="Mandar mensagem no WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-2.5 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Mandar Mensagem no WhatsApp</span>
            </button>

            {/* Alternative Instagram direct trigger */}
            <div className="mt-2 pt-2 border-t border-stone-100 text-center">
              <button
                type="button"
                onClick={handleOpenInstagram}
                className="inline-flex items-center gap-1.5 text-[11px] text-stone-600 hover:text-stone-900 transition-colors font-medium cursor-pointer"
              >
                <Instagram className="w-3 h-3 text-pink-600" />
                <span>Prefere falar pelo Instagram? Toque aqui</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Bottom Bar & WhatsApp Trigger Button */}
      {/* Adheres strictly to the 15% mobile sticky cap */}
      <aside 
        aria-label="Atendimento rápido WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2"
      >
        <button
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            } else {
              handleSendWhatsApp();
            }
          }}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-xl shadow-emerald-900/30 hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Abrir conversa no WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white shrink-0 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full" />
          </div>
          <span className="tracking-tight whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </button>
      </aside>
    </>
  );
};

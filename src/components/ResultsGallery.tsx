import React, { useState } from 'react';
import { GALLERY_IMAGES, GalleryImage, EXPERT_INFO } from '../data/expertData';
import { ImageLightbox } from './ImageLightbox';
import { Maximize2, MessageCircle, Sparkles } from 'lucide-react';

export const ResultsGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="resultados" className="py-12 sm:py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-bold text-emerald-800 tracking-wider uppercase mb-1">
            Transformações Reais
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Resultados que transformam a autoestima
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Veja alguns casos reais de Clareamento 3D, Ortodontia e Alinhamento. Toque na foto para ver os detalhes em tela cheia.
          </p>
        </div>

        {/* Gallery Grid - Strict Squares, Aligned, Responsive */}
        {/* 2 columns on mobile, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {/* Perfectly Squared Image Container */}
              <div className="relative aspect-square w-full bg-stone-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading={index < 4 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover / Tap Overlay */}
                <div 
                  className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2"
                >
                  <span className="p-2 rounded-full bg-white/90 text-stone-900 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-stone-900/80 backdrop-blur-xs text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 line-clamp-1">
                  {item.title}
                </h3>
                <span className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 shrink-0" />
                  Ver caso completo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal & Medical Notice */}
        <p className="text-[11px] text-stone-500 text-center mt-6 max-w-lg mx-auto leading-relaxed">
          *Aviso ético: Resultados podem variar de pessoa para pessoa de acordo com as particularidades biológicas e diagnóstico de cada caso. Fotos meramente demonstrativas de tratamentos reais.
        </p>

        {/* In-gallery Call to Action */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-emerald-950">
              Quer saber qual o melhor tratamento para o seu caso?
            </h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              Venha fazer uma avaliação presencial no consultório de Madureira sem custos.
            </p>
          </div>

          <a
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-xs shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar no WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        image={selectedImage}
        images={GALLERY_IMAGES}
        onClose={() => setSelectedImage(null)}
        onSelectImage={(img) => setSelectedImage(img)}
      />
    </section>
  );
};

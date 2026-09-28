import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryImage, EXPERT_INFO } from '../data/expertData';

interface ImageLightboxProps {
  image: GalleryImage | null;
  images: GalleryImage[];
  onClose: () => void;
  onSelectImage: (image: GalleryImage) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  image,
  images,
  onClose,
  onSelectImage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    onSelectImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onSelectImage(images[prevIndex]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-stone-900 text-stone-100 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count & close */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {image.category}
            </span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">
              {currentIndex + 1} de {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Fechar visualizador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with square aspect ratio */}
        <div className="relative w-full aspect-square bg-stone-950 flex items-center justify-center overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all border border-white/10 cursor-pointer shadow-lg active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all border border-white/10 cursor-pointer shadow-lg active:scale-95"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Content & Action Bar */}
        <div className="p-5 flex flex-col gap-3 bg-stone-900 border-t border-stone-800/80">
          <div>
            <h3 className="text-base font-semibold text-white tracking-tight">
              {image.title}
            </h3>
            {image.description && (
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                {image.description}
              </p>
            )}
          </div>

          <div className="pt-1">
            <a
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-xl transition-all shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Quero uma avaliação gratuita para este resultado</span>
            </a>
            <p className="text-[10px] text-center text-stone-400 mt-2">
              Resultados clínicos podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

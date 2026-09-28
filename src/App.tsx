import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutExpert } from './components/AboutExpert';
import { ResultsGallery } from './components/ResultsGallery';
import { TrustCards } from './components/TrustCards';
import { MidCTA } from './components/MidCTA';
import { HowItWorks } from './components/HowItWorks';
import { BackstageProof } from './components/BackstageProof';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans-clean flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Quem Sou Eu (Autoridade Pessoal) */}
        <AboutExpert />

        {/* 3. Resultados Reais (Galeria Alinhada & Lightbox) */}
        <ResultsGallery />

        {/* 4. Por Que Confiar Em Mim? */}
        <TrustCards />

        {/* 5. CTA Intermediário */}
        <MidCTA />

        {/* 6. Como Funciona a Primeira Consulta (3 Passos) */}
        <HowItWorks />

        {/* 7. Mais Provas & Bastidores */}
        <BackstageProof />

        {/* 8. Localização & Consultório em Madureira */}
        <LocationSection />

        {/* 9. CTA Final */}
        <FinalCTA />
      </main>

      {/* 10. Rodapé */}
      <Footer />

      {/* 11. WhatsApp Flutuante & Chat Rápido */}
      <FloatingWhatsApp />
    </div>
  );
}

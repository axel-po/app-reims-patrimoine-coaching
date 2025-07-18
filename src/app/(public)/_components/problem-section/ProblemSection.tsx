import React from "react";
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-2xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="space-y-32">
          {/* Header */}
          <div className="text-center space-y-8">
            <div className="inline-block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.85] tracking-tight">
                <span className="block text-muted-foreground/30 font-light">Ton argent</span>
                <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  dort ?
                </span>
              </h2>
              <div className="mt-6 text-base sm:text-lg text-muted-foreground/70 font-medium">
                L&apos;inflation ne dort jamais.
              </div>
            </div>
          </div>
          
          {/* Problem grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {[
              {
                number: "01",
                title: "Épargne stagnante",
                description: "Tu épargnes tous les mois, mais ton argent ne te rapporte rien ?"
              },
              {
                number: "02", 
                title: "Inflation silencieuse",
                description: "Sur un compte courant, l'inflation grignote ton pouvoir d'achat sans que tu t'en rendes compte."
              },
              {
                number: "03",
                title: "Bourse inaccessible",
                description: "La bourse te paraît risquée, complexe, réservée aux pros ?"
              }
            ].map((item, index) => (
              <div key={index} className="group space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-mono text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
                    {item.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-16">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Solution bridge */}
          <div className="text-center space-y-12">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/40" />
              <div className="px-4 text-sm font-medium text-primary/60">
                Il existe une solution
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
            </div>
            
            <Button 
              size="lg" 
              className="group relative overflow-hidden px-10 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Découvre une méthode simple pour reprendre le contrôle
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
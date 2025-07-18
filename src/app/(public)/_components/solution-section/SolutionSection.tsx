import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    "Comprendre comment fonctionne la bourse",
    "Protéger ton argent de l'inflation",
    "Éviter les erreurs de débutant qui coûtent des milliers d'euros",
    "Créer ta stratégie d'investissement long terme",
    "Appliquer dès aujourd'hui, même avec peu d'épargne",
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-2xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <span className="font-semibold uppercase tracking-wider text-primary">
            La Solution
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Reprenez le contrôle.
            <br />
            <span className="bg-gradient-to-br from-primary via-primary/80 to-foreground/80 bg-clip-text text-transparent">
              Investissez avec confiance.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Notre programme de coaching et de formation est conçu pour vous
            donner les clés de l&apos;investissement, simplement et sans jargon.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left side - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-muted hover:border-primary/20 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13L9 17L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground font-medium">
                      {benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Method Card */}
          <div className="lg:pl-8">
            <div className="p-8 bg-primary text-white rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 10L17.5 5.5M17.5 5.5L13 1M17.5 5.5H8C4.13401 5.5 1 8.63401 1 12.5C1 16.366 4.13401 19.5 8 19.5H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">
                  Une méthode simple et éprouvée
                </h3>
              </div>
              <p className="text-white/90 text-lg mb-6">
                Pas de jargon compliqué, pas de promesses irréalistes. Juste une
                approche pragmatique pour investir intelligemment et construire
                ton patrimoine.
              </p>
              <button className="bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
                Découvrir le programme
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <Link href="/guide-gratuit">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                🎁 Télécharger le guide gratuit
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:from-primary/90 group-hover:to-primary/70" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Évitez les 5 erreurs qui vous font perdre de l'argent
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-primary">500+</p>
            <p className="text-muted-foreground mt-1">Étudiants formés</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-primary">98%</p>
            <p className="text-muted-foreground mt-1">Taux de satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

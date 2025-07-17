import React from "react";

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
        {/* Centered Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="text-6xl">🚀</div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block text-primary">Reims Patrimoine</span>
            <span className="text-foreground">: Coaching</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-foreground font-normal mt-2">
              + Formation pour prendre enfin les
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-primary font-normal">
              bonnes décisions financières
            </span>
          </h2>
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

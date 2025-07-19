import React from "react";
import { Button } from "@/components/ui/button";

const LeadMagnet = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl animate-pulse" />
        <div
          className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-gradient-to-tr from-primary/15 to-primary/5 blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-primary/20 p-8 md:p-12 shadow-2xl">
          {/* Gift emoji and title */}
          <div className="space-y-4">
            <div className="text-6xl">🎁</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Télécharge gratuitement :
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary leading-tight">
              Le Guide Express &ldquo;5 erreurs qui te font perdre de
              l&apos;argent quand tu laisses ton épargne dormir&rdquo;
            </h3>
          </div>

          {/* Hook text */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-foreground font-medium">
              Tu épargnes, mais tu ne sais pas comment faire fructifier ton
              argent ?
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Avant d&apos;investir, découvre ce que 95 % des jeunes actifs font
              mal avec leur argent — et comment toi tu peux éviter ces pièges.
            </p>
          </div>

          {/* Benefits list */}
          <div className="text-left max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Ce que tu vas découvrir dans ce guide PDF (gratuit) :
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✅</span>
                <span className="text-muted-foreground">
                  Pourquoi ton compte courant t&apos;appauvrit lentement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✅</span>
                <span className="text-muted-foreground">
                  Les placements &ldquo;sûrs&rdquo; qui ne le sont pas vraiment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✅</span>
                <span className="text-muted-foreground">
                  Comment faire un premier pas simple vers l&apos;investissement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✅</span>
                <span className="text-muted-foreground">
                  Les 5 erreurs les plus courantes (et comment les éviter)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✅</span>
                <span className="text-muted-foreground">
                  Le cadre mental des investisseurs malins
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-10 py-6 text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="h-5 w-5"
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
                Télécharger le guide gratuit
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:from-primary/90 group-hover:to-primary/70" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Aucun spam</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Désinscription en 1 clic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

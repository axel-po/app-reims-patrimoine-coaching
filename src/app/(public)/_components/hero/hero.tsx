import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Hero = async () => {
  // const global = await getGlobals();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl animate-pulse" />
        <div
          className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-gradient-to-tr from-primary/15 to-primary/5 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
              Maîtrise ton argent,
            </span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              construis ta liberté
            </span>
            <span className="block bg-gradient-to-r from-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              financière
            </span>
            {/* {global.title} */}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-2xl leading-relaxed">
            Formation + coaching pour jeunes actifs qui veulent faire travailler
            leur épargne, éviter l’inflation, et construire leur liberté
            financière.
            {/* {global.description} */}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Link href="/guide-gratuit">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🎁 Guide gratuit
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:from-primary/90 group-hover:to-primary/70" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="group rounded-full border-primary/20 px-8 py-6 text-base font-medium text-primary transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5a7 7 0 017 7 7 7 0 11-14 0 7 7 0 017-7z"
                  />
                </svg>
                Découvrir le programme
              </span>
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-16 flex flex-wrap items-center justify-center gap-12">
            {/* Users count */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 overflow-hidden rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg"
                  >
                    <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-primary/30" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-foreground">+500</p>
                <p className="text-sm text-muted-foreground">
                  investisseurs accompagnés
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-foreground">4.9/5</p>
                <p className="text-sm text-muted-foreground">de satisfaction</p>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-primary"
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
              </div>
              <span className="text-sm font-medium text-primary">
                Garantie satisfait ou remboursé
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

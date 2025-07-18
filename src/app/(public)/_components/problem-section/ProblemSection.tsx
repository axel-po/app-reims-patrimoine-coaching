import React from "react";
import { Button } from "@/components/ui/button";

const StagnantSavingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      className="text-primary/30"
      fill="currentColor"
    />
    <path
      d="M11 10H10V14H11V10Z"
      className="text-primary"
      fill="currentColor"
    />
    <path
      d="M14 10H13V14H14V10Z"
      className="text-primary"
      fill="currentColor"
    />
  </svg>
);

const InflationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 15L15 9L11 13L3 5"
      className="text-primary"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 15H21V9"
      className="text-primary"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InaccessibleMarketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="11"
      width="18"
      height="11"
      rx="2"
      ry="2"
      className="text-primary"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
      className="text-primary"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const problems = [
  {
    icon: StagnantSavingsIcon,
    title: "Épargne stagnante",
    description:
      "Chaque euro dormant sur votre compte est une opportunité manquée de construire votre avenir financier.",
  },
  {
    icon: InflationIcon,
    title: "Inflation silencieuse",
    description:
      "Sans action, votre pouvoir d'achat diminue inexorablement, érodé par une inflation constante.",
  },
  {
    icon: InaccessibleMarketIcon,
    title: "Bourse inaccessible",
    description:
      "La complexité et les risques perçus de l'investissement vous paralysent et vous maintiennent à l'écart.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative bg-background overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      <div className="absolute -z-20 inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_70%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold uppercase tracking-wider text-primary">
            Le Vrai Problème
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Votre argent stagne.
            <br />
            <span className="bg-gradient-to-br from-primary via-primary/80 to-foreground/80 bg-clip-text text-transparent">
              L&apos;inflation, elle, galope.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Laisser votre argent sur un compte courant n&apos;est pas une
            stratégie, c&apos;est une perte lente et silencieuse. Il est temps
            d&apos;agir.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative transform-gpu overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/70 via-primary/50 to-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-6 rounded-2xl border border-border/10 bg-gradient-to-b from-background/50 to-background/30 p-8 backdrop-blur-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Button
            size="lg"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-primary to-primary/80 px-8 py-7 text-lg font-bold text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30"
          >
            <span className="absolute h-full w-full bg-gradient-to-tr from-primary/20 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-3">
              Devenir maître de mes finances
              <svg
                className="h-5 w-5 transform-gpu transition-transform duration-300 group-hover:translate-x-1"
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
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

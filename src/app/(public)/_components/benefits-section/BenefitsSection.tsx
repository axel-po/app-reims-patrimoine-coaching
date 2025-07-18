import React from "react";

// Video icon
const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 5.25a.75.75 0 00-1.13-.19L16.5 6.75v4.5l2.31 1.69a.75.75 0 001.13-.19c.15-.26.06-.58-.19-.75L19.94 5.25z" />
  </svg>
);

// Phone icon
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Tools icon
const ToolsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.641l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
      clipRule="evenodd"
    />
  </svg>
);

// Lock icon
const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3V12.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm-3.75 8.25v-3a3.75 3.75 0 117.5 0v3h-7.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Gift icon
const GiftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zm1.5 9h6.75a2.25 2.25 0 002.25-2.25v-6.75H12.75v9z" />
  </svg>
);

// Speaker icon
const SpeakerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
  </svg>
);

const benefits = [
  {
    icon: VideoIcon,
    title: "La formation complète en vidéo",
    description: "Modules structurés et progressifs pour maîtriser l'investissement étape par étape"
  },
  {
    icon: PhoneIcon,
    title: "1 session de coaching personnalisé",
    description: "Un échange individuel pour répondre à tes questions spécifiques"
  },
  {
    icon: ToolsIcon,
    title: "Des outils concrets (modèles, simulateurs, checklists)",
    description: "Tout ce qu'il faut pour passer à l'action immédiatement"
  },
  {
    icon: LockIcon,
    title: "Accès à vie + mises à jour",
    description: "Pas d'abonnement, accès permanent aux contenus et améliorations"
  },
  {
    icon: GiftIcon,
    title: "Bonus exclusifs inclus",
    description: "Ressources supplémentaires pour optimiser tes investissements"
  },
  {
    icon: SpeakerIcon,
    title: "Témoignages inspirants",
    description: "Retours d'expérience d'autres jeunes actifs qui ont franchi le pas"
  }
];

const BenefitCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group relative overflow-hidden rounded-2xl border border-border/10 bg-background/50 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
    <div className="flex items-start gap-4">
      <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Icon className="relative h-6 w-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default function BenefitsSection() {
  return (
    <section className="relative bg-background overflow-hidden py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      <div className="absolute -z-20 inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_80%)]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-2xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold uppercase tracking-wider text-primary">
            🟦 SECTION 4 – CE QUE TU REÇOIS
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            📦 Tu obtiens :
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Un programme complet avec tout ce qu&apos;il faut pour réussir tes premiers investissements et construire ton patrimoine en toute confiance.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-2xl border border-primary/20 bg-primary/10 p-8 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                <GiftIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Tout est inclus, rien à ajouter
                </h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Un investissement unique pour une formation complète qui te donnera les clés de l&apos;investissement intelligent et durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
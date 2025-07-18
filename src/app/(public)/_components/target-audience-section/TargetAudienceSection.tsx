import React from "react";

// Using Heroicons for a clean, professional look
const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      clipRule="evenodd"
    />
  </svg>
);

const BanknotesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M11.25 4.533A9.707 9.707 0 001.5 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75c0-2.39-.841-4.592-2.25-6.284A9.733 9.733 0 0011.25 4.533zM12 18a6 6 0 100-12 6 6 0 000 12z" />
    <path
      d="M12 18.75a.75.75 0 000-1.5H12a.75.75 0 000 1.5z"
      transform="rotate(45 12 18.75)"
    />
    <path
      d="M13.23 17.52a.75.75 0 00-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06z"
      transform="rotate(45 13.23 17.52)"
    />
    <path
      d="M13.23 17.52a.75.75 0 00-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06z"
      transform="rotate(45 13.23 17.52)"
    />
    <path
      d="M15.75 15a.75.75 0 000-1.5H15a.75.75 0 000 1.5z"
      transform="rotate(45 15.75 15)"
    />
    <path
      d="M16.98 13.77a.75.75 0 00-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06z"
      transform="rotate(45 16.98 13.77)"
    />
    <path
      d="M16.98 13.77a.75.75 0 00-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06z"
      transform="rotate(45 16.98 13.77)"
    />
  </svg>
);

const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.75 15.667a.75.75 0 00-1.5 0v4.583a.75.75 0 001.5 0v-4.583z" />
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 003.328 2.624.75.75 0 00.865-1.182A6.75 6.75 0 017.05 12a.75.75 0 00-1.258-.797 8.25 8.25 0 00-1.217 4.397zM9.95 6.46a.75.75 0 00-1.182-.865A8.25 8.25 0 006.143 9.403a.75.75 0 00.796 1.258 6.75 6.75 0 013.01-4.198zM14.05 17.54a.75.75 0 001.182.865 8.25 8.25 0 002.624-3.328.75.75 0 00-1.258-.796 6.75 6.75 0 01-4.2 3.01.75.75 0 00.865 1.182.75.75 0 00.787-1.133zM17.857 9.403a.75.75 0 00.796-1.258 8.25 8.25 0 00-4.397-1.217.75.75 0 00-.797 1.258 6.75 6.75 0 014.198 3.01z"
      clipRule="evenodd"
    />
  </svg>
);

const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2.25a.75.75 0 01.75.75v.518a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v.518a.75.75 0 01-1.5 0v-.518A.75.75 0 0112 18zM15.93 5.32a.75.75 0 011.06 1.06l-.366.365a.75.75 0 01-1.06-1.06l.366-.365zM8.13 15.87a.75.75 0 011.06 1.06l-.366.365a.75.75 0 01-1.06-1.06l.366-.365zM5.32 8.13a.75.75 0 011.06-1.06l.365.366a.75.75 0 01-1.06 1.06l-.365-.366zM17.87 14.81a.75.75 0 011.06-1.06l.365.366a.75.75 0 01-1.06 1.06l-.365-.366zM18.75 12a.75.75 0 01-.75.75h-.518a.75.75 0 010-1.5h.518a.75.75 0 01.75.75zM5.25 12a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zM12 6.75a5.25 5.25 0 00-5.25 5.25H12a.75.75 0 010 1.5H6.75A5.25 5.25 0 0012 18.75V12a.75.75 0 010-1.5v-3.75z" />
  </svg>
);

const ArrowPathIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0V9.28l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497A4.49 4.49 0 018.603 3.8z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M11.328 15.328a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06L11 13.689l3.384-3.383a.75.75 0 011.06 1.06l-4 4z"
      clipRule="evenodd"
    />
  </svg>
);

const criteria = [
  {
    icon: UserCircleIcon,
    text: "Tu as entre 20 et 35 ans",
  },
  {
    icon: BanknotesIcon,
    text: "Tu as une capacité d'épargne régulière",
  },
  {
    icon: ChartBarIcon,
    text: "Tu veux mieux que le livret A, sans risques absurdes",
  },
  {
    icon: LightBulbIcon,
    text: 'Tu veux comprendre avant d\'investir, pas suivre des "conseils YouTube"',
  },
  {
    icon: ArrowPathIcon,
    text: "Tu veux une méthode claire, simple, et directe",
  },
];

const TargetCard = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="relative overflow-hidden rounded-2xl border border-border/10 bg-background/50 p-px">
    <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg" />
        <Icon className="relative h-8 w-8 text-primary" />
      </div>
      <p className="text-xl font-medium text-foreground">{text}</p>
    </div>
  </div>
);

export default function TargetAudienceSection() {
  return (
    <section className="relative bg-background overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      <div className="absolute -z-20 inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_80%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Ce programme est fait pour{" "}
            <span className="bg-gradient-to-br from-primary via-primary/80 to-foreground/80 bg-clip-text text-transparent">
              toi
            </span>{" "}
            si :
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Jeune actif, tu sens qu&apos;il est temps de prendre en main tes
            finances, mais tu ne sais pas par où commencer ? Ce programme est
            ton point de départ.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <TargetCard {...criteria[0]} />
          </div>
          <div className="lg:col-span-2">
            <TargetCard {...criteria[1]} />
          </div>
          <div className="lg:col-span-2">
            <TargetCard {...criteria[2]} />
          </div>
          <div className="lg:col-span-3 lg:col-start-2">
            <TargetCard {...criteria[3]} />
          </div>
          <div className="lg:col-span-3 lg:col-start-4">
            <TargetCard {...criteria[4]} />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center sm:text-left">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-400/20 text-green-400">
                <CheckBadgeIcon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  Si tu te reconnais, tu es au bon endroit !
                </h3>
                <p className="mt-1 text-base text-muted-foreground">
                  Notre méthode est spécialement conçue pour les jeunes actifs
                  motivés comme toi, prêts à passer à l&apos;action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

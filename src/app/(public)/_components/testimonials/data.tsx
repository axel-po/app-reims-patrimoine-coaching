import clsx from "clsx";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export const testimonials = [
  {
    name: "Jordan Hayes",
    role: "CTO at Quantum Innovations",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        NexaUI has completely transformed our development workflow.
        <Highlight>
          The component system saved us weeks of custom coding and design work.
        </Highlight>{" "}
        Our team can now focus on business logic instead of UI details.
      </p>
    ),
  },
  {
    name: "Maya Rodriguez",
    role: "Lead Developer at Skyline Digital",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        I was skeptical at first, but NexaUI proved me wrong.
        <Highlight>
          The accessibility features and responsive design are top-notch.
        </Highlight>{" "}
        It&apos;s rare to find a framework that prioritizes both aesthetics and
        functionality.
      </p>
    ),
  },
  {
    name: "Ethan Park",
    role: "Startup Founder at Elevate Labs",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        As a non-technical founder, NexaUI has been a game-changer for our MVP.
        <Highlight>We launched three months ahead of schedule.</Highlight> The
        modular components allowed us to iterate quickly based on user feedback.
      </p>
    ),
  },
  {
    name: "Zoe Bennett",
    role: "UX Architect at Fusion Systems",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        NexaUI&apos;s attention to detail is impressive.
        <Highlight>
          The micro-interactions and animations create a polished experience.
        </Highlight>{" "}
        It&apos;s become our go-to solution for client projects with tight
        deadlines.
      </p>
    ),
  },
  {
    name: "Victor Nguyen",
    role: "Product Lead at FinEdge",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    description: (
      <p>
        Our financial dashboard needed a complete overhaul, and NexaUI
        delivered.
        <Highlight>
          The data visualization components are both beautiful and functional.
        </Highlight>{" "}
        User engagement has increased by 47% since the redesign.
      </p>
    ),
  },
  {
    name: "Amara Johnson",
    role: "Frontend Specialist at Nimbus Tech",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    description: (
      <p>
        The documentation for NexaUI is exceptional.
        <Highlight>
          I was able to implement complex UI patterns in just a few hours.
        </Highlight>{" "}
        The TypeScript support is also a major productivity booster.
      </p>
    ),
  },
  {
    name: "Leo Tanaka",
    role: "Creative Technologist at Prism Agency",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    description: (
      <p>
        NexaUI has the perfect balance of flexibility and structure.
        <Highlight>
          We can maintain brand consistency while still creating unique
          experiences.
        </Highlight>{" "}
        Our clients are consistently impressed with the results.
      </p>
    ),
  },
  {
    name: "Sophia Martinez",
    role: "E-commerce Director at StyleHub",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    description: (
      <p>
        Our conversion rates have increased by 28% since implementing NexaUI.
        <Highlight>
          The checkout flow components are optimized for both desktop and
          mobile.
        </Highlight>{" "}
        The dark mode support was also a huge hit with our customers.
      </p>
    ),
  },
  {
    name: "Aiden Wilson",
    role: "Healthcare Solutions Architect",
    img: "https://randomuser.me/api/portraits/men/92.jpg",
    description: (
      <p>
        NexaUI&apos;s accessibility features were crucial for our healthcare
        platform.
        <Highlight>
          We passed compliance requirements with minimal additional work.
        </Highlight>{" "}
        The form components are especially well-designed for complex data entry.
      </p>
    ),
  },
  {
    name: "Olivia Chen",
    role: "EdTech Product Manager at LearnSphere",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    description: (
      <p>
        Our educational platform needed to work for students of all ages and
        abilities.
        <Highlight>
          NexaUI&apos;s inclusive design principles made this possible without
          compromise.
        </Highlight>{" "}
        The interactive components have significantly improved student
        engagement.
      </p>
    ),
  },
];

import React from "react";
import Button from "../button/Button";

const CallToAction = () => {
  return (
    <div className="mt-24 text-center">
      <h3 className="text-2xl font-bold mb-6">
        Prêt à transformer votre avenir financier ?
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/coaching" size="lg">
          Découvrir notre programme
        </Button>
        <a
          href="#"
          className="text-indigo-600 font-medium flex items-center group"
        >
          Réserver un appel découverte
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;

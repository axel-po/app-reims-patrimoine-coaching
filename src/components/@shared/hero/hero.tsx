import React from "react";
import Button from "../../../components/landing/button/button";
import Simulators from "./simulators";

const Hero = () => {
  return (
    <section
      className="pt-40 pb-20 relative overflow-hidden"
      aria-label="Introduction et calculateur d'épargne"
    >
      <div
        className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] rounded-[40%] bg-gradient-to-b from-indigo-50 to-blue-100 opacity-70 blur-3xl z-0"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-[40%] -right-[20%] w-[50%] h-[60%] rounded-[60%] bg-gradient-to-t from-purple-50 to-pink-100 opacity-60 blur-3xl z-0"
        aria-hidden="true"
      ></div>

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(80,70,230,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(80,70,230,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 lg:col-start-2">
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[1.05] mb-8">
              Reprends le contrôle de ton
              <span className="relative inline-block ml-2">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  avenir financier
                </span>
                <div
                  className="absolute top-[40%] -z-10 left-0 right-0 h-[30%] bg-indigo-100"
                  aria-hidden="true"
                ></div>
              </span>
            </h1>

            <p className="text-gray-700 text-lg max-w-xl mb-10 relative font-light">
              Formation + coaching 100% en ligne pour apprendre à investir, même
              en partant de zéro.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-5 mb-12">
              <Button href="/formations" size="lg">
                Découvrir nos programmes
              </Button>

              <Button href="/simulateurs" variant="outline" size="lg">
                Essayer nos simulateurs
              </Button>
            </div>

            {/* <Avis /> */}
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Simulators />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

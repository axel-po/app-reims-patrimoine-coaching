"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      aria-label="Introduction et présentation"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"
        aria-hidden="true"
      ></div>

      <div
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-blue-50 mix-blend-multiply opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-20 left-[15%] w-96 h-96 rounded-full bg-indigo-50 mix-blend-multiply opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-purple-50 mix-blend-multiply opacity-50"
        aria-hidden="true"
      ></div>

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(80,70,230,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(80,70,230,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      ></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          className="inline-flex items-center px-4 py-2 mb-10 border border-indigo-100 rounded-full bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
          <span className="text-sm font-medium text-indigo-700">
            Formation patrimoine
          </span>
        </motion.div>

        <motion.h1
          className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight mb-8 mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Reprends le contrôle de ton
          <span className="relative inline-block mx-2">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              avenir financier
            </span>
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.path
                d="M0 3C50 -1 150 -1 200 3"
                stroke="#4f46e5"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-700 text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Formation + coaching 100% en ligne pour apprendre à investir, même en
          partant de zéro.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Button href="/formations" size="lg">
            Découvrir nos programmes
          </Button>

          <Button href="/simulateurs" variant="outline" size="lg">
            Essayer nos simulateurs
          </Button>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <div className="text-3xl font-bold text-indigo-600 mb-1">+1000</div>
            <div className="text-sm text-gray-500">Étudiants formés</div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            <div className="text-3xl font-bold text-indigo-600 mb-1">97%</div>
            <div className="text-sm text-gray-500">Taux de satisfaction</div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <div className="text-3xl font-bold text-indigo-600 mb-1">24/7</div>
            <div className="text-sm text-gray-500">Support disponible</div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            <div className="text-3xl font-bold text-indigo-600 mb-1">+50</div>
            <div className="text-sm text-gray-500">Heures de contenu</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center justify-center text-sm text-gray-500 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        >
          <div className="w-10 h-[1px] bg-gray-300 mr-3"></div>
          Défilez pour en savoir plus
          <div className="w-10 h-[1px] bg-gray-300 ml-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

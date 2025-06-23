"use client";

import Button from "@/app/(public)/_components/button/button";
import React, { useState, useEffect } from "react";

export default function Simulators() {
  const [capital, setCapital] = useState<string>("10000");
  const [duration, setDuration] = useState<number>(10);
  const [result, setResult] = useState<string>("0");

  // Calculate future value based on initial capital and duration
  const calculateFutureValue = () => {
    const initialCapital = parseFloat(capital.replace(/[^\d.-]/g, "")) || 0;
    const annualRate = 0.05; // 5% annual return

    // Compound interest formula: FV = PV * (1 + r)^t
    const futureValue = initialCapital * Math.pow(1 + annualRate, duration);

    // Format the result with thousand separators and 2 decimal places
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(futureValue);
  };

  // Update result whenever inputs change
  useEffect(() => {
    setResult(calculateFutureValue());
  }, [capital, duration]);

  // Handle capital input change
  const handleCapitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and basic formatting
    const value = e.target.value.replace(/[^\d]/g, "");
    setCapital(value);
  };

  // Handle duration slider change
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value, 10));
  };

  // Format capital for display
  const formatCapital = (value: string) => {
    if (!value) return "";
    return new Intl.NumberFormat("fr-FR").format(parseInt(value, 10));
  };

  return (
    <div className="relative">
      <div
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-indigo-200 opacity-70"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full border border-purple-200 opacity-70"
        aria-hidden="true"
      ></div>

      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
        <div
          className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
          aria-hidden="true"
        ></div>

        <div className="pt-16 pb-8 px-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="inline-block px-3 py-1 bg-indigo-50 rounded-md text-xs text-indigo-600 font-medium uppercase tracking-wider mb-2">
                CALCULATEUR
              </span>
              <h3 className="text-2xl font-bold text-gray-900">
                Projection d&apos;épargne
              </h3>
            </div>
            <div
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-inner p-2"
              aria-hidden="true"
            >
              <svg
                className="w-8 h-8 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                role="img"
                aria-label="Icône monétaire"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="montant"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Capital initial
              </label>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm" aria-hidden="true">
                    €
                  </span>
                </div>
                <input
                  type="text"
                  name="montant"
                  id="montant"
                  className="bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-12 py-3 border-gray-200 rounded-md"
                  placeholder="10 000"
                  aria-describedby="montant-description"
                  value={formatCapital(capital)}
                  onChange={handleCapitalChange}
                />
                <span id="montant-description" className="sr-only">
                  Entrez votre capital initial en euros
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label
                  htmlFor="duree"
                  className="block text-sm font-medium text-gray-700"
                >
                  Durée d&apos;investissement
                </label>
                <span
                  className="text-sm text-indigo-600 font-medium"
                  aria-live="polite"
                  id="duree-value"
                >
                  {duration} ans
                </span>
              </div>
              <div className="relative mt-1">
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={duration}
                  id="duree"
                  name="duree"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  aria-valuemin={1}
                  aria-valuemax={30}
                  aria-valuenow={duration}
                  aria-labelledby="duree-value"
                  onChange={handleDurationChange}
                />
                <div className="absolute left-0 right-0 -bottom-6 flex justify-between text-xs text-gray-500">
                  <span>1</span>
                  <span>15</span>
                  <span>30</span>
                </div>
              </div>
            </div>

            <div className="pt-10 mt-8 border-t border-gray-100">
              <div className="flex justify-between items-baseline">
                <span className="text-gray-500 text-sm">Estimation :</span>
                <div className="text-right">
                  <div
                    className="text-3xl font-bold text-indigo-700"
                    aria-live="polite"
                  >
                    {result} €
                  </div>
                  <div className="text-xs text-gray-500">
                    Rendement annuel de 5%
                  </div>
                </div>
              </div>
            </div>

            <Button variant="secondary" size="md">
              Simulation complète
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="absolute -bottom-5 left-10 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-5 py-2 rounded-full shadow-lg font-medium text-sm">
        100% gratuit
      </div> */}
    </div>
  );
}

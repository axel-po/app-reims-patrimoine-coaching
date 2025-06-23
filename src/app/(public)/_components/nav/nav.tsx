"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { navLinks, mobileNavLinks } from "./nav-links";

export default function Nav() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 md:px-8 py-4">
      <div
        className={`relative mx-auto max-w-7xl rounded-full transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-xs"
        }`}
      >
        <div
          className={`absolute inset-0 backdrop-blur-md border border-white/20 rounded-full transition-colors duration-300 ${
            scrolled ? "bg-white/70" : "bg-white/50"
          }`}
        ></div>

        <div className="flex items-center justify-between relative z-10 h-16 px-6 max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setActiveLink("/")}
            aria-label="Reims Patrimoine - Accueil"
          >
            <Image
              src={logo}
              alt="Logo"
              className="w-auto h-17 transition-transform duration-300 "
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center h-full">
              {navLinks.map((link) => (
                <li key={link.href} className="h-full">
                  <Link
                    href={link.href}
                    className={`relative flex items-center justify-center h-16 px-5 group`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    <span
                      className={`font-medium transition-all duration-300 ${
                        activeLink === link.href
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      {link.label}
                    </span>

                    {activeLink === link.href && (
                      <div className="absolute bottom-3 h-[2px] w-1/2 bg-blue-600 rounded-full transition-all duration-300 transform origin-center"></div>
                    )}

                    <div
                      className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-1/2 ${
                        activeLink === link.href ? "opacity-0" : "opacity-100"
                      }`}
                    ></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Link
              href="/dashboard"
              className="hidden md:flex items-center"
              aria-label="Accéder à l'espace abonné"
            >
              <div className="relative overflow-hidden rounded-full transition-transform duration-300">
                <div className="px-5 py-2.5 font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-full">
                  <span>Espace abonné</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/30 rounded-full"></div>
              </div>
            </Link>

            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center ml-4"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <div
                className={`w-6 h-0.5 bg-gray-800 mb-1.5 transition-all duration-300 ${
                  menuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-800 mb-1.5 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  menuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 right-0 mx-auto mt-2 max-w-6xl bg-white/90 backdrop-blur-md shadow-md border border-white/10 rounded-2xl transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <nav
          className={`px-6 py-4 transition-all duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="space-y-0 divide-y divide-gray-100">
            {mobileNavLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${
                  menuOpen ? "" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center py-3 transition-colors duration-300 relative ${
                    activeLink === link.href ? "text-blue-600" : "text-gray-800"
                  }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMenuOpen(false);
                  }}
                >
                  {activeLink === link.href && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-md"></div>
                  )}
                  <span className="font-medium ml-3">{link.label}</span>
                </Link>
              </li>
            ))}
            <li
              className={`pt-2 transition-all duration-300 ${
                menuOpen ? "" : "opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <Link
                href="/espace-client"
                className="flex items-center justify-center w-full py-3 font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 hover:from-blue-700 hover:to-purple-700 transform"
                onClick={() => setMenuOpen(false)}
              >
                Espace client
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

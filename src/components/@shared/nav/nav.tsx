"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

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
        className={`relative mx-auto max-w-6xl rounded-full transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div
          className={`absolute inset-0 backdrop-blur-md border border-white/20 rounded-full transition-colors duration-300 ${
            scrolled ? "bg-white/70" : "bg-white/50"
          }`}
        ></div>

        <div className="absolute left-0 top-0 w-full h-20 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-full"></div>

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400/40 via-white/20 to-purple-400/40 rounded-full"></div>

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
              className="w-auto h-20 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center h-full">
              {[
                { href: "/", label: "Accueil" },
                { href: "/formations", label: "Formations" },
                { href: "/coachs", label: "Experts" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href} className="h-full">
                  <Link
                    href={link.href}
                    className={`relative flex items-center justify-center h-16 px-5 group ${
                      activeLink === link.href
                        ? "text-blue-600"
                        : "text-gray-800"
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {activeLink === link.href && (
                      <div className="absolute left-2 right-2 bottom-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    )}

                    <span className="font-medium transition-all duration-300 group-hover:text-blue-600">
                      {link.label}
                    </span>

                    <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Link
              href="/espace-client"
              className="hidden md:flex items-center"
              aria-label="Accéder à l'espace client"
            >
              <div className="relative overflow-hidden rounded-full transition-transform duration-300 hover:scale-105">
                <div className="px-5 py-2.5 font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-full">
                  <span>Espace client</span>
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
            {[
              { href: "/", label: "Accueil" },
              { href: "/formations", label: "Formations" },
              { href: "/simulateurs", label: "Simulateurs" },
              { href: "/coachs", label: "Experts" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${
                  menuOpen ? "" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center py-3 transition-colors duration-300 ${
                    activeLink === link.href ? "text-blue-600" : "text-gray-800"
                  }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMenuOpen(false);
                  }}
                >
                  <div
                    className={`w-[3px] h-5 rounded-full transition-all duration-300 ${
                      activeLink === link.href
                        ? "bg-gradient-to-b from-blue-600 to-purple-600"
                        : "bg-transparent"
                    } mr-3`}
                  ></div>
                  <span className="font-medium">{link.label}</span>
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
                className="flex items-center justify-center w-full py-3 font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[0.98]"
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

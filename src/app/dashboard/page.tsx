"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronLeft,
  Play,
  CheckCircle2,
  Circle,
  ChevronDown,
  Check,
  RotateCcw,
  Clock,
  Users,
  Star,
  BookOpen,
  Settings,
  Bell,
} from "lucide-react";

// Types
interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
}

// Static data for modules
const courseData = {
  title: "Investissement & Patrimoine",
  description:
    "Maîtrisez la gestion de patrimoine et l'investissement de A à Z",
  instructor: "Marie Dubois",
  rating: 4.9,
  totalLessons: 42,
  duration: "6h 15min",
  enrolled: 248,
  modules: [
    {
      id: 1,
      title: "01: Les Fondamentaux",
      duration: "45min",
      lessons: [
        {
          id: 1,
          title: "Introduction au patrimoine",
          completed: true,
          duration: "8min",
        },
        {
          id: 2,
          title: "Définir ses objectifs financiers",
          completed: false,
          duration: "12min",
        },
        {
          id: 3,
          title: "Profil d'investisseur",
          completed: false,
          duration: "10min",
        },
        {
          id: 4,
          title: "Les différents types d'actifs",
          completed: false,
          duration: "15min",
        },
      ],
    },
    {
      id: 2,
      title: "02: Épargne et Liquidités",
      duration: "1h 05min",
      lessons: [
        {
          id: 5,
          title: "Livret A, LDDS et autres livrets",
          completed: false,
          duration: "18min",
        },
        {
          id: 6,
          title: "Comptes à terme et dépôts",
          completed: false,
          duration: "15min",
        },
        {
          id: 7,
          title: "Fonds euros et capital garanti",
          completed: false,
          duration: "22min",
        },
        {
          id: 8,
          title: "Stratégie de constitution d'épargne",
          completed: false,
          duration: "10min",
        },
      ],
    },
    {
      id: 3,
      title: "03: Assurance Vie",
      duration: "1h 30min",
      lessons: [
        {
          id: 9,
          title: "Fonctionnement de l'assurance vie",
          completed: false,
          duration: "20min",
        },
        {
          id: 10,
          title: "Fonds euros vs unités de compte",
          completed: false,
          duration: "25min",
        },
        {
          id: 11,
          title: "Fiscalité de l'assurance vie",
          completed: false,
          duration: "18min",
        },
        {
          id: 12,
          title: "Transmission et succession",
          completed: false,
          duration: "15min",
        },
        {
          id: 13,
          title: "Choisir son contrat d'assurance vie",
          completed: false,
          duration: "12min",
        },
      ],
    },
    {
      id: 4,
      title: "04: Bourse et Actions",
      duration: "1h 45min",
      lessons: [
        {
          id: 14,
          title: "Introduction à la bourse",
          completed: false,
          duration: "20min",
        },
        {
          id: 15,
          title: "PEA et compte-titres",
          completed: false,
          duration: "25min",
        },
        {
          id: 16,
          title: "Analyse fondamentale",
          completed: false,
          duration: "30min",
        },
        {
          id: 17,
          title: "ETF et diversification",
          completed: false,
          duration: "18min",
        },
        {
          id: 18,
          title: "Stratégies d'investissement",
          completed: false,
          duration: "12min",
        },
      ],
    },
    {
      id: 5,
      title: "05: Immobilier",
      duration: "2h 10min",
      lessons: [
        {
          id: 19,
          title: "Résidence principale",
          completed: false,
          duration: "25min",
        },
        {
          id: 20,
          title: "Investissement locatif",
          completed: false,
          duration: "35min",
        },
        {
          id: 21,
          title: "SCPI et crowdfunding",
          completed: false,
          duration: "20min",
        },
        {
          id: 22,
          title: "Fiscalité immobilière",
          completed: false,
          duration: "30min",
        },
        {
          id: 23,
          title: "Financement et crédit",
          completed: false,
          duration: "20min",
        },
      ],
    },
    {
      id: 6,
      title: "06: Retraite et Prévoyance",
      duration: "55min",
      lessons: [
        {
          id: 24,
          title: "Système de retraite français",
          completed: false,
          duration: "20min",
        },
        {
          id: 25,
          title: "PER et épargne retraite",
          completed: false,
          duration: "25min",
        },
        {
          id: 26,
          title: "Prévoyance et assurances",
          completed: false,
          duration: "10min",
        },
      ],
    },
    {
      id: 7,
      title: "07: Fiscalité et Optimisation",
      duration: "1h 15min",
      lessons: [
        {
          id: 27,
          title: "Fiscalité des placements",
          completed: false,
          duration: "30min",
        },
        {
          id: 28,
          title: "Optimisation fiscale légale",
          completed: false,
          duration: "25min",
        },
        {
          id: 29,
          title: "Déclaration d'impôts",
          completed: false,
          duration: "20min",
        },
      ],
    },
  ],
};

const transcript = `L'épargne de précaution est la base de toute stratégie patrimoniale solide. Il est recommandé de constituer une réserve équivalente à 3 à 6 mois de charges courantes.

Cette épargne doit être placée sur des supports liquides et sécurisés comme le Livret A, le LDDS ou un compte sur livret. Ces placements garantissent le capital et permettent une disponibilité immédiate des fonds en cas de besoin.`;

export default function Dashboard() {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(
    courseData.modules[0].lessons[1]
  );
  const [showTranscript, setShowTranscript] = useState(false);
  const [lessons, setLessons] = useState(courseData.modules);

  const selectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  const toggleLessonCompletion = (lessonId: number) => {
    setLessons((prevModules) =>
      prevModules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === lessonId
            ? { ...lesson, completed: !lesson.completed }
            : lesson
        ),
      }))
    );

    // Update current lesson if it's the one being toggled
    if (currentLesson.id === lessonId) {
      setCurrentLesson((prev) => ({ ...prev, completed: !prev.completed }));
    }
  };

  const markAsCompleted = () => {
    toggleLessonCompletion(currentLesson.id);
  };

  const markAsIncomplete = () => {
    toggleLessonCompletion(currentLesson.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900">Codelingo</span>
            </div>
            <div className="text-slate-400">/</div>
            <span className="text-slate-600">Formations</span>
            <div className="text-slate-400">/</div>
            <span className="text-slate-600">Finance & Patrimoine</span>
            <div className="text-slate-400">/</div>
            <span className="text-slate-900 font-medium">
              {courseData.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              Share
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Enroll Now
            </Button>
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
              <Bell className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                AP
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-slate-200 h-[calc(100vh-73px)] flex flex-col">
          {/* Course Header */}
          <div className="p-6 border-b border-slate-100">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 h-8 px-2 text-slate-600 hover:text-slate-900"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                {courseData.title}
              </h2>
              <p className="text-sm text-slate-600">{courseData.description}</p>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>
                    {courseData.rating} ({courseData.enrolled} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Course content
              </h3>

              <div className="space-y-1">
                {lessons.map((module) => (
                  <div key={module.id}>
                    <Accordion
                      type="multiple"
                      defaultValue={["module-1"]}
                      className="w-full"
                    >
                      <AccordionItem
                        value={`module-${module.id}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="hover:no-underline py-3 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-700 [&[data-state=open]]:bg-slate-50">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                              <span>{module.title}</span>
                            </div>
                            <span className="text-xs text-slate-500 mr-4">
                              {module.duration}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2">
                          <div className="ml-4 space-y-1">
                            {module.lessons.map((lesson) => (
                              <button
                                key={lesson.id}
                                onClick={() => selectLesson(lesson)}
                                className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                                  currentLesson.id === lesson.id
                                    ? "bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 font-medium border border-purple-200"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    {lesson.completed ? (
                                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                                    ) : (
                                      <Circle className="h-4 w-4 text-slate-300 shrink-0" />
                                    )}
                                    <span className="truncate">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-400 ml-2">
                                    {lesson.duration}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="p-6 border-t border-slate-100">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">Author</h4>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm">
                    CL
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-slate-900">
                      {courseData.instructor}
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700"
                    >
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {courseData.rating}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">
                    Conseillère en Gestion de Patrimoine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          {/* Content Area */}
          <div className="flex-1 flex flex-col p-8">
            {/* Current Lesson Info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <span>Finance & Patrimoine</span>
                <span>/</span>
                <span>{courseData.title}</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                {currentLesson.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentLesson.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{courseData.enrolled} enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {courseData.rating} ({courseData.enrolled} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="w-full max-w-4xl">
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </Button>
                  </div>

                  {/* Video overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                  {/* Video filename */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                      <span className="text-white text-sm font-medium">
                        epargne-precaution-bases.mp4
                      </span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 h-9 w-9 p-0 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3H5C3.89543 3 3 3.89543 3 5V8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 8V5C21 3.89543 20.1046 3 19 3H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 21H19C20.1046 21 21 20.1046 21 19V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 16V19C3 20.1046 3.89543 21 5 21H8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 h-9 w-9 p-0 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {currentLesson.completed ? (
                <Button
                  onClick={markAsIncomplete}
                  variant="outline"
                  className="flex items-center gap-2 border-slate-200 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  Marquer comme non terminé
                </Button>
              ) : (
                <Button
                  onClick={markAsCompleted}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <Check className="h-4 w-4" />
                  Marquer comme terminé
                </Button>
              )}
            </div>

            {/* Transcript */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="border border-slate-200 rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="w-full px-6 py-4 text-left hover:bg-slate-50 transition-colors rounded-t-xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Transcript
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                        showTranscript ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {showTranscript && (
                  <div className="px-6 pb-6 border-t border-slate-100">
                    <div className="prose prose-sm max-w-none pt-4">
                      <p className="text-slate-700 leading-relaxed">
                        {transcript}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

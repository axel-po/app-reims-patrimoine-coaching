"use client";

import { useLessonViewModel } from "@/userinterface/components/dashboard/lessons/LessonsViewModel";
import { VideoPlayer } from "./video-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileIcon,
  PlayCircleIcon,
  ClockIcon,
  HashIcon,
  CalendarIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  GlobeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  InfinityIcon,
  FileTextIcon,
  FolderIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import {
  markLessonAsCompletedAction,
  getUserProgressByUserAndLessonAction,
} from "@/userinterface/actions/userProgress.actions";
import { getLessonsByModuleIdAction } from "@/userinterface/actions/lessons.actions";
import { useQueryState } from "nuqs";
import { Lesson } from "@/domain/models/lessons.interface";

interface LessonDetailViewProps {
  lessonId: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function LessonDetailView({ lessonId }: LessonDetailViewProps) {
  const { lesson, isLoading, error, loadLesson } = useLessonViewModel(lessonId);
  const [mounted, setMounted] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);

  // Simple navigation using module lessons
  const [nextLessonId, setNextLessonId] = useState<string | null>(null);
  const [previousLessonId, setPreviousLessonId] = useState<string | null>(null);
  const [, setLessonId] = useQueryState("lessonId");

  // Get lessons for the current module only (simpler approach)
  const [currentModuleLessons, setCurrentModuleLessons] = useState<Lesson[]>(
    []
  );

  const loadUserProgress = useCallback(async () => {
    try {
      const result = await getUserProgressByUserAndLessonAction(lessonId);
      if (result.data) {
        setLessonCompleted(result.data.completed);
      }
    } catch (error) {
      console.error("Error loading user progress:", error);
    }
  }, [lessonId]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lessonId) {
      setLessonCompleted(false);
      setVideoCompleted(false);
      loadUserProgress();
    }
  }, [lessonId, loadUserProgress]);

  // Load lessons for current module and calculate navigation
  useEffect(() => {
    const loadModuleLessons = async () => {
      if (lesson?.moduleId && currentModuleLessons.length === 0) {
        try {
          const result = await getLessonsByModuleIdAction(lesson.moduleId);
          if (result.data) {
            const lessons = result.data.sort(
              (a, b) => (a.position || 0) - (b.position || 0)
            );
            setCurrentModuleLessons(lessons);
          }
        } catch (error) {
          console.error("Error loading module lessons:", error);
        }
      }
    };

    loadModuleLessons();
  }, [lesson?.moduleId, currentModuleLessons.length]);

  // Calculate navigation when lessons or current lesson changes
  useEffect(() => {
    if (currentModuleLessons.length > 0 && lessonId) {
      const currentIndex = currentModuleLessons.findIndex(
        (l) => l.id === lessonId
      );
      if (currentIndex !== -1) {
        setPreviousLessonId(
          currentIndex > 0 ? currentModuleLessons[currentIndex - 1].id : null
        );
        setNextLessonId(
          currentIndex < currentModuleLessons.length - 1
            ? currentModuleLessons[currentIndex + 1].id
            : null
        );
      }
    }
  }, [currentModuleLessons, lessonId]);

  // Simple navigation helper functions
  const goToNextLesson = useCallback(() => {
    if (nextLessonId) {
      setLessonId(nextLessonId);
    }
  }, [nextLessonId, setLessonId]);

  const goToPreviousLesson = useCallback(() => {
    if (previousLessonId) {
      setLessonId(previousLessonId);
    }
  }, [previousLessonId, setLessonId]);

  const handleMarkAsCompleted = async () => {
    setIsMarkingComplete(true);
    try {
      const result = await markLessonAsCompletedAction(lessonId);
      if (result.data && !result.error) {
        setLessonCompleted(true);
        setVideoCompleted(true);

        // Dispatch custom event to notify other components
        window.dispatchEvent(
          new CustomEvent("lessonCompleted", {
            detail: { lessonId },
          })
        );

        // Move to next lesson immediately
        if (nextLessonId) {
          goToNextLesson();
        }
      } else {
        console.error("Error marking lesson as completed:", result.error);
      }
    } catch (error) {
      console.error("Error marking lesson as completed:", error);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto py-4">
          <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-64"></div>
                  <div className="h-8 bg-gray-200 rounded w-96"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                </div>
              </div>
            </div>

            {/* Video skeleton */}
            <div className="p-4 mb-4">
              <div className="aspect-video bg-gray-200 rounded-lg"></div>
            </div>

            {/* Content skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCwIcon className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Impossible de charger la leçon
            </h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => loadLesson(lessonId)} className="w-full">
              <RefreshCwIcon className="mr-2 h-4 w-4" />
              Réessayer
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Leçon introuvable
            </h3>
            <p className="text-gray-600">
              Cette leçon n&apos;existe pas ou a été supprimée.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!mounted) return null;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div variants={fadeIn} className="p-4 mb-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <GlobeIcon className="w-4 h-4" />
                <span>Cours de patrimoine</span>
                <span className="text-gray-400">•</span>
                <span>Leçon {lesson.position || 1}</span>
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                {lesson.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{lesson.duration || "18 min"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HashIcon className="w-4 h-4" />
                  <span>Leçon {lesson.position || 1}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {lessonCompleted && (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 border-green-200 px-3 py-1"
                >
                  <CheckCircleIcon className="w-3 h-3 mr-1" />
                  Terminée
                </Badge>
              )}
              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousLesson}
                  disabled={!previousLessonId}
                  className="flex items-center gap-1"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Précédent</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextLesson}
                  disabled={!nextLessonId}
                  className="flex items-center gap-1"
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div variants={fadeIn} className="p-4 mb-4">
          {lesson.videoUrl ? (
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <VideoPlayer
                  videoKey={lesson.videoUrl}
                  title={lesson.title}
                  onComplete={() => setVideoCompleted(true)}
                />
              </div>
              {(videoCompleted || lessonCompleted) && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2 shadow-lg">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <PlayCircleIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Vidéo non disponible</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Course Content */}
          <motion.div variants={slideIn} className="lg:col-span-2 space-y-4">
            {/* Course Description */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileTextIcon className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Contenu du cours
                </h2>
              </div>
              <div className="prose prose-gray max-w-none">
                {lesson.textContent ? (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                    {lesson.textContent}
                  </div>
                ) : (
                  <div className="text-gray-500 italic text-sm">
                    <p>Aucun contenu écrit disponible pour cette leçon.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Learning Objectives - Only show if textContent exists */}
            {lesson.textContent && (
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Objectifs d&apos;apprentissage
                </h3>
                <div className="text-gray-500 italic text-sm">
                  <p>
                    Les objectifs d&apos;apprentissage spécifiques seront
                    définis dans le contenu de la leçon.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Sidebar */}
          <motion.div variants={slideIn} className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Course Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Informations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Durée</span>
                    <span className="font-medium">
                      {lesson.duration || "18 min"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulté</span>
                    <span className="font-medium">Débutant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Format</span>
                    <span className="font-medium">
                      {lesson.videoUrl && lesson.documentUrl
                        ? "Vidéo + Document"
                        : lesson.videoUrl
                        ? "Vidéo"
                        : lesson.documentUrl
                        ? "Document"
                        : "Contenu écrit"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Accès</span>
                    <div className="flex items-center gap-1">
                      <InfinityIcon className="w-4 h-4 text-green-500" />
                      <span className="font-medium">Illimité</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Progression
                </h3>
                <Button
                  className="w-full text-white font-medium bg-green-600 hover:bg-green-700"
                  onClick={handleMarkAsCompleted}
                  disabled={isMarkingComplete || lessonCompleted}
                >
                  {isMarkingComplete ? (
                    <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                  )}
                  {isMarkingComplete
                    ? "Marquage..."
                    : lessonCompleted
                    ? "Terminée"
                    : "Marquer terminé"}
                </Button>
              </div>

              {/* Resources */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <FolderIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Ressources
                  </h3>
                </div>
                <div className="space-y-2">
                  {lesson.documentUrl ? (
                    <a
                      href={lesson.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileIcon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            Support de cours
                          </p>
                          <p className="text-xs text-gray-500">Document</p>
                        </div>
                      </div>
                      <DownloadIcon className="w-4 h-4 text-gray-400" />
                    </a>
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-500 text-sm">
                        Aucun document disponible pour cette leçon.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Instructor */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Formateur
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    RP
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Reims Patrimoine
                    </h4>
                    <p className="text-sm text-gray-600">
                      Coaching patrimonial à Reims
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div variants={fadeIn} className="mt-6 p-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <CalendarIcon className="w-4 h-4" />
            <span>
              Créé le{" "}
              {lesson.createdAt
                ? new Date(lesson.createdAt).toLocaleDateString()
                : "15/12/2024"}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

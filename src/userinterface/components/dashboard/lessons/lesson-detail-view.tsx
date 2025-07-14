"use client";

import { useLessonViewModel } from "@/userinterface/components/dashboard/lessons/LessonsViewModel";
import { VideoPlayer } from "./video-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileIcon,
  PlayCircleIcon,
  FileTextIcon,
  ClockIcon,
  HashIcon,
  CalendarIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  GlobeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LessonDetailViewProps {
  lessonId: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isLoading) {
    return (
      <div className="relative p-8 overflow-hidden rounded-2xl border border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="relative z-10">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded-md w-3/5"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-muted rounded-full w-24"></div>
              <div className="h-6 bg-muted rounded-full w-28"></div>
            </div>
            <div className="h-72 bg-muted rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-6 bg-muted rounded-md w-1/4"></div>
              <div className="h-4 bg-muted rounded-md w-full"></div>
              <div className="h-4 bg-muted rounded-md w-5/6"></div>
              <div className="h-4 bg-muted rounded-md w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative p-8 overflow-hidden rounded-2xl border border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="relative z-10">
          <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-destructive/10 mr-4">
                <RefreshCwIcon className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Impossible de charger la leçon
                </h3>
                <p className="text-muted-foreground mb-4">{error}</p>
                <Button
                  onClick={() => loadLesson(lessonId)}
                  variant="outline"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <RefreshCwIcon className="mr-2 h-4 w-4 group-hover:animate-spin" />
                    Réessayer
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="relative p-8 overflow-hidden rounded-2xl border border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-border/40 to-border/10 blur-sm"></div>
              <div className="relative rounded-full bg-muted/50 p-5 backdrop-blur-sm">
                <FileIcon className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-medium mt-6 mb-2">Leçon introuvable</h3>
            <p className="text-muted-foreground max-w-md">
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
      className="relative overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="relative z-10">
        <motion.div variants={fadeIn} className="mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="relative mb-4 md:mb-0">
              <div className="absolute -left-3 top-2 h-12 w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full"></div>
              <div className="pl-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <GlobeIcon className="mr-1.5 h-3.5 w-3.5" />
                    <span>
                      Finance & Patrimoine / Investissement & Patrimoine
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold tracking-tight">
                  {lesson.title}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <ClockIcon className="mr-1.5 h-3.5 w-3.5" />
                <span>{lesson.duration || "18min"}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <HashIcon className="mr-1.5 h-3.5 w-3.5" />
                <span>
                  {lesson.position ? `Leçon ${lesson.position}` : "Leçon 1"}
                </span>
              </div>
              <Badge
                variant="secondary"
                className="bg-amber-500/10 text-amber-500 border-amber-500/20"
              >
                4.9 (248 avis)
              </Badge>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="mb-8">
          {lesson.videoUrl ? (
            <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm relative bg-black">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-10"></div>
              <VideoPlayer
                videoKey={lesson.videoUrl}
                title={lesson.title}
                onComplete={() => setVideoCompleted(true)}
              />
              {videoCompleted && (
                <div className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full p-2 shadow-lg z-20">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm relative bg-black h-[400px] flex items-center justify-center">
              <div className="text-center">
                <PlayCircleIcon className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Vidéo non disponible</p>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div variants={fadeIn} className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-1.5 rounded-full bg-blue-500/10">
                <FileTextIcon className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold">Contenu du cours</h2>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/60 shadow-sm">
              {lesson.textContent ? (
                <div
                  className={cn(
                    "prose prose-slate dark:prose-invert max-w-none",
                    "relative"
                  )}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">
                    {lesson.textContent}
                  </p>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Livret A, LDDS et autres livrets d&apos;épargne réglementée -
                  contenu détaillé du cours.
                </p>
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-1.5 rounded-full bg-amber-500/10">
                <FileIcon className="h-5 w-5 text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold">Ressources</h2>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/60 shadow-sm">
              {lesson.documentUrl ? (
                <Button
                  asChild
                  variant="outline"
                  className="w-full group relative overflow-hidden"
                >
                  <a
                    href={lesson.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative z-10 flex items-center">
                      <FileIcon className="mr-2 h-4 w-4 group-hover:text-amber-500 transition-colors" />
                      epargne-precaution-bases.mp4
                    </span>
                    <span className="text-xs text-muted-foreground">8 min</span>
                  </a>
                </Button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <FileIcon className="mr-2 h-4 w-4 group-hover:text-amber-500 transition-colors" />
                        epargne-precaution-bases.mp4
                      </div>
                      <span className="text-xs text-muted-foreground">
                        8 min
                      </span>
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <FileIcon className="mr-2 h-4 w-4 group-hover:text-amber-500 transition-colors" />
                        livrets-reglementés.pdf
                      </div>
                      <span className="text-xs text-muted-foreground">
                        12 min
                      </span>
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <FileIcon className="mr-2 h-4 w-4 group-hover:text-amber-500 transition-colors" />
                        fiscalité-livrets.pdf
                      </div>
                      <span className="text-xs text-muted-foreground">
                        10 min
                      </span>
                    </span>
                  </Button>
                </div>
              )}

              <div className="mt-6">
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setVideoCompleted(true)}
                >
                  <CheckCircleIcon className="mr-2 h-4 w-4" />
                  Marquer comme terminé
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {lesson.createdAt && (
          <motion.div
            variants={fadeIn}
            className="flex items-center text-sm text-muted-foreground mt-8 pt-4 border-t border-border/40"
          >
            <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
            <span>
              Créé le {new Date(lesson.createdAt).toLocaleDateString()}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

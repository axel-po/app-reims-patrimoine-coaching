"use client";

import { useLessonViewModel } from "@/userinterface/components/dashboard/lessons/LessonsViewModel";
import { VideoPlayer } from "./video-player";
import { Separator } from "@/components/ui/separator";
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
        <motion.div variants={fadeIn} className="mb-8">
          <div className="relative mb-8">
            <div className="absolute -left-3 top-2 h-12 w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full"></div>
            <div className="pl-2">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {lesson.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <HashIcon className="mr-1.5 h-3.5 w-3.5" />
                  <span>Leçon {lesson.position}</span>
                </div>
                <div className="hidden md:block h-1 w-1 rounded-full bg-muted-foreground/30"></div>
                <div className="flex items-center">
                  <ClockIcon className="mr-1.5 h-3.5 w-3.5" />
                  <span>{lesson.duration}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {lesson.videoUrl && (
              <Badge
                variant="secondary"
                className="flex items-center gap-1.5 py-1.5 bg-primary/10 hover:bg-primary/15 transition-colors"
              >
                <PlayCircleIcon className="h-3.5 w-3.5" />
                Vidéo
              </Badge>
            )}
            {lesson.textContent && (
              <Badge
                variant="outline"
                className="flex items-center gap-1.5 py-1.5 hover:bg-muted/50 transition-colors"
              >
                <FileTextIcon className="h-3.5 w-3.5" />
                Contenu écrit
              </Badge>
            )}
            {lesson.documentUrl && (
              <Badge
                variant="outline"
                className="flex items-center gap-1.5 py-1.5 hover:bg-muted/50 transition-colors"
              >
                <FileIcon className="h-3.5 w-3.5" />
                Document
              </Badge>
            )}
          </div>

          <div className="relative">
            <Separator className="my-6" />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-border"></div>
            <div className="absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-border"></div>
            <div className="absolute left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-border"></div>
          </div>
        </motion.div>

        {lesson.videoUrl && (
          <motion.div variants={fadeIn} className="mb-12">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-1.5 rounded-full bg-primary/10">
                <PlayCircleIcon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Vidéo</h2>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-10"></div>
              <VideoPlayer videoKey={lesson.videoUrl} title={lesson.title} />
            </div>
          </motion.div>
        )}

        {lesson.textContent && (
          <motion.div variants={fadeIn} className="mb-12">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-1.5 rounded-full bg-blue-500/10">
                <FileTextIcon className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold">Contenu</h2>
            </div>
            <div
              className={cn(
                "prose prose-slate dark:prose-invert max-w-none p-6 rounded-xl",
                "",
                "relative overflow-hidden"
              )}
            >
              <p className="leading-relaxed whitespace-pre-wrap">
                {lesson.textContent}
              </p>
            </div>
          </motion.div>
        )}

        {lesson.documentUrl && (
          <motion.div variants={fadeIn} className="mb-12">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-1.5 rounded-full bg-amber-500/10">
                <FileIcon className="h-5 w-5 text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold">Document</h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="group relative overflow-hidden"
            >
              <a
                href={lesson.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center">
                  <FileIcon className="mr-2 h-4 w-4 group-hover:text-amber-500 transition-colors" />
                  Ouvrir le document
                </span>
              </a>
            </Button>
          </motion.div>
        )}

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

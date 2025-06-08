import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  accentColor?: "pink" | "cyan" | "green" | "yellow" | "default";
  showDivider?: boolean;
}

const SectionContainer = ({
  id,
  title,
  className,
  titleClassName,
  contentClassName,
  children,
  accentColor = "default",
  showDivider = true,
}: SectionContainerProps) => {
  const accentColorClasses = {
    pink: "text-pink-500 before:bg-pink-500",
    cyan: "text-cyan-400 before:bg-cyan-400",
    green: "text-green-400 before:bg-green-400",
    yellow: "text-yellow-400 before:bg-yellow-400",
    default: "text-white before:bg-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-16 bg-[#0e0525] min-h-[400px]",
        className,
      )}
    >
      {title && (
        <div className="mb-8">
          <h2
            className={cn(
              "text-3xl font-bold relative inline-block",
              'before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full',
              accentColorClasses[accentColor],
              titleClassName,
            )}
          >
            {title}
          </h2>
        </div>
      )}
      <div className={cn("relative z-10", contentClassName)}>{children}</div>

      {showDivider && (
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      )}

      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-8 h-8 rounded-full bg-pink-500/20 blur-sm animate-pulse" />
      <div className="absolute bottom-24 left-24 w-12 h-12 rounded-full bg-cyan-500/20 blur-sm animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full bg-green-500/20 blur-sm animate-pulse" />
    </section>
  );
};

export default SectionContainer;

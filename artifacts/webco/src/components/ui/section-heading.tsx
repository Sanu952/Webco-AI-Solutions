import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, alignment = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12",
      alignment === "center" ? "text-center mx-auto items-center" : "text-left items-start",
      "flex flex-col gap-4 max-w-3xl",
      className
    )}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-primary rounded-full mt-2",
        alignment === "center" ? "mx-auto" : ""
      )} />
    </div>
  );
}

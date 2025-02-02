"use client";

import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}

export function Logo({ className, collapsed, ...props }: LogoProps) {
  return (
    <div className={cn(
      "flex items-center justify-start",
      className
    )}>
      <div className={cn(
        "flex items-center justify-center rounded-lg bg-primary text-primary-foreground w-8 h-8",
      )}>
        <span className="font-bold text-2xl">ع</span>

        

      </div>
    </div>
  )
}

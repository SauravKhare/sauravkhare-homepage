import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ContainerProps {
  borderBottom?: boolean;
  borderTop?: boolean;
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Container({ borderBottom, borderTop, children, id, className }: ContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-dark-primary text-light-primary",
        borderBottom && "border-b border-light-primary/10",
        borderTop && "border-t border-light-primary/10",
        className
      )}
    >
      <div className="px-6 md:px-16 py-24 md:py-52 md:max-w-7xl md:mx-auto">
        {children}
      </div>
    </section>
  );
}
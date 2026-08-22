import { Suspense, type ReactNode } from "react";
import { SectionErrorBoundary } from "@/components/section-error-boundary";

export function renderSection(
  section: string,
  skeleton: ReactNode,
  children: ReactNode,
) {
  return (
    <SectionErrorBoundary section={section}>
      <Suspense fallback={skeleton}>
        {children}
      </Suspense>
    </SectionErrorBoundary>
  );
}

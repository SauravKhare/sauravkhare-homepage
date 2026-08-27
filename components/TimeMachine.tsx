"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Layers, ArrowUpRight, X } from "lucide-react";
import { DotField } from "./DotField";
import { Archive } from "@/payload-types";

export default function TimeMachine({ archive }: { archive?: Archive | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const records = archive?.records;
  const headingId = "archive-heading";
  const hasHeading = Boolean(archive?.heading);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpen.current) {
        triggerRef.current?.focus();
        wasOpen.current = false;
      }
      return;
    }

    wasOpen.current = true;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  if (!records || records.length === 0) return null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="View previous design iterations"
        title="Design iterations"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
      >
        <Layers className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">View previous design iterations</span>
      </button>

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={hasHeading ? undefined : "The Archive"}
            aria-labelledby={hasHeading ? headingId : undefined}
            className="portal-coat fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
          >
            <button
              type="button"
              aria-label="Close archive"
              onClick={() => setIsOpen(false)}
              className="archive-void absolute inset-0 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0">
                <DotField
                  spacing={26}
                  baseOpacity={0.05}
                  maxOpacity={0.8}
                  radius={220}
                  breathing
                  breatheDuration={11}
                  breatheAmplitude={0.24}
                  dotClassName="text-white/60"
                  glowClassName="text-primary"
                />
              </div>
            </button>

            <div className="relative z-10 flex max-h-[88vh] w-full max-w-[600px] items-center justify-center">
              <div className="portal-halo" aria-hidden="true" />

              <div className="portal-surface portal-scroll max-h-[88vh] w-full overflow-y-auto px-7 py-12 sm:px-12 sm:py-14">
                {archive?.eyebrow && (
                  <p className="flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
                    <span className="mark-plus" aria-hidden="true" />
                    {archive.eyebrow}
                  </p>
                )}
                {hasHeading && (
                  <h2
                    id={headingId}
                    className="mt-4 text-center font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl"
                  >
                    {archive?.heading}
                  </h2>
                )}
                {archive?.description && (
                  <p className="mx-auto mt-3 max-w-sm text-pretty text-center text-sm leading-relaxed text-muted-foreground">
                    {archive.description}
                  </p>
                )}

                <ul className="mt-10 flex flex-col gap-2">
                  {records.map((record) => (
                    <li key={record.id} className="relative">
                      <a
                        href={record.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group relative flex items-start gap-4 rounded-2xl px-3 py-4 transition-transform duration-300 hover:translate-x-1"
                      >
                        <span className="archive-row-glow" aria-hidden="true" />
                        <span
                          className="archive-index relative mt-0.5 text-2xl leading-none"
                          aria-hidden="true"
                        >
                          {record.index}
                        </span>
                        <span className="relative min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="font-serif text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                              {record.label}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/60">
                              {record.year}
                            </span>
                          </span>
                          <span className="mt-1.5 block max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                            {record.description}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="relative mt-1 h-4 w-4 flex-none text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>

                {archive?.footer && (
                  <p className="mt-9 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-muted-foreground/50">
                    {archive.footer}
                  </p>
                )}
              </div>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close archive"
              className="fixed right-5 top-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground/60 transition-colors hover:text-foreground sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}

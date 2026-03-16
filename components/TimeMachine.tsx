"use client";

import { useState, useEffect, useRef } from "react";
import { Hourglass, X } from "@phosphor-icons/react";
import Heading from "./Heading";

type ArchiveRecord = {
  id?: string | null;
  version: string;
  yearRange: string;
  url: string;
};

export default function TimeMachine({ records }: { records: ArchiveRecord[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      wasOpen.current = true;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
      if (wasOpen.current) {
        triggerRef.current?.focus();
        wasOpen.current = false;
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!records || records.length === 0) return null;

  return (
    <>
      <div className="absolute bottom-6 right-6 z-40">
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-dashed border-ink/40 text-ink/40 transition-colors duration-500 hover:border-ink hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          aria-label="Open Archival Records"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <Hourglass className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-canvas/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-dialog-title"
            className="relative w-full max-w-sm overflow-y-auto border-2 border-dashed border-ink bg-canvas p-8 animate-fade-in max-h-[80vh] custom-scrollbar"
          >
            <div className="mb-6 flex items-start justify-between border-b-[1.5px] border-dashed border-ink/50 pb-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">From the Archives</span>
                <Heading headingLevel="h3" id="archive-dialog-title" classname="font-serif text-2xl text-ink">Temporal Anomaly</Heading>
              </div>
              <button
                ref={closeRef}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-ink/60 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                aria-label="Close Archival Records"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {records.map((record, index) => (
                <a
                  key={record.id || index}
                  href={record.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center border border-ink/30 bg-ink/5 py-6 text-ink transition-colors duration-300 hover:bg-ink hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <Hourglass className="mb-3 h-5 w-5 opacity-50 transition-transform duration-700 group-hover:opacity-100 group-hover:rotate-180" />
                  <span className="font-serif text-lg">{record.version}</span>
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-widest opacity-60">
                    {record.yearRange}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
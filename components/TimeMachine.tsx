"use client";

import { useState, useEffect } from "react";
import { Hourglass, X } from "@phosphor-icons/react";

type ArchiveRecord = {
  id?: string | null;
  version: string;
  yearRange: string;
  url: string;
};

export default function TimeMachine({ records }: { records: ArchiveRecord[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!records || records.length === 0) return null;

  return (
    <>
      <div className="absolute bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center border-2 border-dashed border-ink/40 text-ink/40 transition-colors duration-500 hover:border-ink hover:text-ink focus:outline-none cursor-pointer"
          aria-label="Open Archives"
        >
          <Hourglass className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-canvas/90 backdrop-blur-sm transition-opacity duration-300" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-sm border-2 border-dashed border-ink bg-canvas p-8 animate-fade-in max-h-[80vh] overflow-y-auto custom-scrollbar">

            <div className="mb-6 flex items-start justify-between border-b-[1.5px] border-dashed border-ink/50 pb-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">From the Archives</span>
                <h3 className="font-serif text-2xl text-ink">Temporal Anomaly</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-ink/60 hover:text-ink transition-colors cursor-pointer">
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
                  className="group flex flex-col items-center justify-center border border-ink/30 bg-ink/5 py-6 transition-colors duration-300 hover:bg-ink hover:text-canvas text-ink"
                >
                  <Hourglass className="mb-3 h-5 w-5 opacity-50 transition-transform duration-700 group-hover:rotate-180 group-hover:opacity-100" />
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
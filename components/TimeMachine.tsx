"use client";

import { useState, useEffect, useRef } from "react";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Heading from "./Heading";
import { Archive } from "@/payload-types";

type ArchiveRecord = NonNullable<Archive["records"]>[number];

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
    <div className="tm-scope" style={{ display: "contents" }}>
      <div className="z-40">
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className="tm-trigger"
          aria-label="Open Archival Records"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <HistoryOutlinedIcon style={{ fontSize: 18 }} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          <div className="tm-scrim" onClick={() => setIsOpen(false)} aria-hidden="true" />

          <div className="tm-aurora" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          {/* film-grain texture, purely decorative */}
          <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
            <filter id="tm-grain-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </svg>
          <div className="tm-grain" aria-hidden="true">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" filter="url(#tm-grain-filter)" />
            </svg>
          </div>

          <div className="tm-ring w-full max-w-xl">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="archive-dialog-title"
              className="tm-panel max-h-[80vh] overflow-y-auto custom-scrollbar"
            >
              <div className="tm-head">
                <div className="flex flex-col">
                  <span className="tm-eyebrow font-mono">From the Archives</span>
                  <Heading headingLevel="h3" id="archive-dialog-title" classname="tm-title font-serif">
                    Temporal Anomaly
                  </Heading>
                </div>
                <button
                  ref={closeRef}
                  onClick={() => setIsOpen(false)}
                  className="tm-close"
                  aria-label="Close Archival Records"
                >
                  <CloseOutlinedIcon style={{ fontSize: 15 }} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {records.map((record, index) => (
                  <a
                    key={record.id || index}
                    href={record.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tm-card group"
                  >
                    <span className="tm-ring-icon">
                      <HistoryOutlinedIcon style={{ fontSize: 17 }} />
                    </span>
                    <span className="tm-version font-serif">{record.version}</span>
                    <span className="tm-years font-mono">{record.yearRange}</span>
                  </a>
                ))}
              </div>

              <p className="tm-foot-note font-mono">Signal recovered from the boundary</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
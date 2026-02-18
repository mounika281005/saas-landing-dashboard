"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  /* ================= ESC CLOSE ================= */
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CONTENT */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-md bg-[#111217] border border-[#1f2230] rounded-2xl p-8 shadow-2xl animate-fadeIn"
      >
        {children}
      </div>

    </div>
  );
}

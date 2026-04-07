"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { type ReactNode, useEffect } from "react";

type ModalProps = {
    isOpen: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
};

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    className="fixed inset-0 z-70 flex items-center justify-center bg-slate-950/55 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    aria-modal="true"
                    role="dialog"
                    aria-label={title}
                    onClick={onClose}
                >
                    <motion.section
                        className="w-full max-w-xl rounded-2xl border border-brand-purple/20 bg-white p-6 shadow-[0_28px_70px_rgba(15,23,42,0.22)]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <header className="mb-4 flex items-center justify-between gap-4">
                            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:text-slate-900"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </button>
                        </header>
                        {children}
                    </motion.section>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

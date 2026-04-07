"use client";

import { motion } from "framer-motion";

export default function Preloader() {
    return (
        <div className="flex min-h-[40vh] items-center justify-center">
            <motion.div
                className="h-16 w-16 rounded-full border-4 border-brand-purple/20 border-t-brand-orange"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 0.9 }}
                aria-label="Loading"
            />
        </div>
    );
}

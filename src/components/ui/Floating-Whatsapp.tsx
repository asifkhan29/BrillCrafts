// src/components/ui/FloatingWhatsApp.tsx

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917506839909"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.12, rotate: 5 }}
      whileTap={{ scale: 0.92 }}
      className="
        fixed bottom-6 right-6 z-[9999]
        flex h-16 w-16 items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_20px_50px_rgba(37,211,102,0.35)]
        transition-all duration-300
        hover:shadow-[0_25px_60px_rgba(37,211,102,0.5)]
      "
    >
      {/* PING EFFECT */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* ICON */}
      <div className="relative z-10">
        <MessageCircle size={30} fill="white" />
      </div>
    </motion.a>
  );
}
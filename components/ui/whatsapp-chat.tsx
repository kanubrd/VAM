'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919898123983';
  const welcomeMessage = encodeURIComponent("Hello Valtrix Team, I'm visiting your website and have a sourcing inquiry.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Card (Appears on Hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden sm:flex flex-col items-start px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-emerald-500/20 text-slate-800 dark:text-slate-100 max-w-[200px]"
            style={{ pointerEvents: 'none' }}
          >
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Sourcing Support
            </span>
            <span className="text-xs font-semibold leading-tight">
              Chat with our experts
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Background Rings */}
      <div className="relative">
        {/* Radar Ring 1 */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" style={{ animationDuration: '3s' }} />
        {/* Radar Ring 2 */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-pulse" />

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with VAM VALTRIX on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_8px_30px_rgb(18,140,126,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 border border-white/20"
        >
          {/* Refined SVG path with standard WhatsApp symbol */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 filter drop-shadow-sm" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.638-1.024-5.117-2.884-6.979C16.57 1.904 14.09 .88 11.453.88 6.012.88 1.593 5.299 1.59 10.74c-.001 1.637.425 3.235 1.238 4.673l-.995 3.637 3.73-.978zm11.391-7.757c-.292-.146-1.729-.854-1.997-.951-.268-.098-.463-.146-.659.146-.195.292-.756.951-.926 1.146-.17.195-.341.219-.633.073-.292-.146-1.235-.456-2.353-1.454-.868-.775-1.454-1.732-1.624-2.024-.17-.292-.018-.45.129-.595.132-.13.292-.341.439-.512.146-.17.195-.292.292-.487.098-.195.049-.366-.024-.512-.073-.146-.659-1.585-.902-2.17-.238-.574-.479-.496-.659-.505-.17-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.292-1.024 1.001-1.024 2.439 0 1.439 1.049 2.829 1.195 3.024.146.195 2.062 3.149 4.996 4.413.698.301 1.243.481 1.667.615.7.223 1.34.192 1.845.116.563-.085 1.729-.707 1.973-1.39.244-.683.244-1.268.17-1.39-.073-.122-.268-.195-.561-.341z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

export function WhatsAppChat() {
  const phoneNumber = '919898123983';
  const welcomeMessage = encodeURIComponent("Hello Valtrix Team, I'm visiting your website and have a sourcing inquiry.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VAM VALTRIX on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        style={{
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35)'
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.638-1.024-5.117-2.884-6.979C16.57 1.904 14.09 .88 11.453.88 6.012.88 1.593 5.299 1.59 10.74c-.001 1.637.425 3.235 1.238 4.673l-.995 3.637 3.73-.978zm11.391-7.757c-.292-.146-1.729-.854-1.997-.951-.268-.098-.463-.146-.659.146-.195.292-.756.951-.926 1.146-.17.195-.341.219-.633.073-.292-.146-1.235-.456-2.353-1.454-.868-.775-1.454-1.732-1.624-2.024-.17-.292-.018-.45.129-.595.132-.13.292-.341.439-.512.146-.17.195-.292.292-.487.098-.195.049-.366-.024-.512-.073-.146-.659-1.585-.902-2.17-.238-.574-.479-.496-.659-.505-.17-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.292-1.024 1.001-1.024 2.439 0 1.439 1.049 2.829 1.195 3.024.146.195 2.062 3.149 4.996 4.413.698.301 1.243.481 1.667.615.7.223 1.34.192 1.845.116.563-.085 1.729-.707 1.973-1.39.244-.683.244-1.268.17-1.39-.073-.122-.268-.195-.561-.341z"/>
        </svg>
      </motion.a>
    </div>
  );
}

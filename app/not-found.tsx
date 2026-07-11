import Link from 'next/link';
import { ArrowLeft, Send, AlertTriangle } from 'lucide-react';
import { Section } from '@/components/ui/section';

export default function NotFound() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
      <Section className="py-12 text-center max-w-xl mx-auto px-4">
        {/* Animated/Interactive looking Error Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FEF3C7] border-2 border-[#F59E0B] flex items-center justify-center mx-auto mb-6 text-[#F59E0B] shadow-sm">
          <AlertTriangle size={32} className="sm:size-40" />
        </div>
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C3E50] mb-4 tracking-tight leading-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17A2B8] hover:bg-[#0D7A8C] text-white font-bold rounded-lg transition-colors min-h-[48px] shadow-sm"
          >
            <ArrowLeft size={16} /> Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 text-[#2C3E50] hover:text-[#17A2B8] hover:border-[#17A2B8] font-bold rounded-lg transition-all min-h-[48px]"
          >
            <Send size={16} /> Contact Support
          </Link>
        </div>
      </Section>
    </div>
  );
}

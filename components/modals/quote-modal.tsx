'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Clock, Shield, Truck, CheckCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = ['SusCat-I', 'SusPol-125', 'VAMShield-90', 'VAM BS-01', 'VAM Cat-M (Rust Converter)'];

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [quoteName, setQuoteName] = useState('');
  const [quoteCompany, setQuoteCompany] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteMaterial, setQuoteMaterial] = useState('');
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleProduct = (p: string) =>
    setSelectedProducts((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const handleQuoteSubmit = async () => {
    if (!quoteEmail) return;
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(quoteEmail.trim()) || quoteEmail.length > 254) {
      setQuoteStatus('error');
      return;
    }
    if (quoteName && quoteName.length > 100) {
      setQuoteStatus('error');
      return;
    }
    if (quoteCompany && quoteCompany.length > 100) {
      setQuoteStatus('error');
      return;
    }
    if (quoteMaterial && quoteMaterial.length > 500) {
      setQuoteStatus('error');
      return;
    }
    setQuoteStatus('loading');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: quoteName,
          company: quoteCompany,
          email: quoteEmail.trim().toLowerCase(),
          products: selectedProducts,
          material: quoteMaterial,
          _hp: '',
        }),
      });
      if (!res.ok) throw new Error();
      setQuoteStatus('success');
      setQuoteName('');
      setQuoteCompany('');
      setQuoteEmail('');
      setQuoteMaterial('');
      setSelectedProducts([]);
    } catch {
      setQuoteStatus('error');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get Started with VAM VALTRIX">
      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { icon: Clock, label: '24hr Response', sub: 'Quote turnaround' },
            { icon: Shield, label: 'Verified Sources', sub: '320+ suppliers' },
            { icon: Truck, label: 'On-Time', sub: '97.4% delivery' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="text-center p-2 sm:p-3 bg-[#E6F7FA] rounded-xl border border-[#D1F2F7]">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#17A2B8] mx-auto mb-1" />
              <p className="text-xs font-semibold text-[#2C3E50] leading-tight">{label}</p>
              <p className="text-xs text-[#6B7280] hidden sm:block">{sub}</p>
            </div>
          ))}
        </div>
        {quoteStatus === 'success' ? (
          <div className="text-center py-5 bg-[#E6F7FA] rounded-xl border border-[#D1F2F7]">
            <CheckCircle className="w-10 h-10 text-[#17A2B8] mx-auto mb-2" />
            <p className="font-semibold text-[#2C3E50]">Request Received!</p>
            <p className="text-sm text-[#6B7280] mt-1">A specialist will follow up within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={quoteName}
                  onChange={(e) => setQuoteName(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={quoteCompany}
                  onChange={(e) => setQuoteCompany(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]"
                />
              </div>
              <input
                type="email"
                placeholder="Work email"
                value={quoteEmail}
                onChange={(e) => setQuoteEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]"
              />
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setProductsOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="text-sm font-semibold text-[#2C3E50]">
                    Select Products
                    {selectedProducts.length > 0 && (
                      <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full text-white bg-[#17A2B8]">
                        {selectedProducts.length}
                      </span>
                    )}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#17A2B8] transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="px-3 py-3 space-y-3 border-t border-gray-100">
                    {products.map((product) => (
                      <label key={product} className="flex items-center gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product)}
                          onChange={() => toggleProduct(product)}
                          className="w-4 h-4 rounded border-gray-300 cursor-pointer shrink-0 accent-[#17A2B8]"
                        />
                        <span className="text-sm text-[#2C3E50] group-hover:text-[#17A2B8] transition-colors">
                          {product}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder="Additional material needed (optional)"
                value={quoteMaterial}
                onChange={(e) => setQuoteMaterial(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]"
              />
            </div>
            <button
              onClick={handleQuoteSubmit}
              disabled={quoteStatus === 'loading'}
              className="w-full py-3.5 text-white font-semibold disabled:opacity-60 min-h-[44px]"
              style={{ background: '#17A2B8', borderRadius: 0 }}
            >
              {quoteStatus === 'loading' ? 'Submitting...' : 'Get My Quote →'}
            </button>
            {quoteStatus === 'error' && (
              <p className="text-center text-xs text-red-600">Something went wrong. Please try again.</p>
            )}
          </>
        )}
      </div>
    </Modal>
  );
}

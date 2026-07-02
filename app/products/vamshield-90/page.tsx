'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Download, Mail, Phone } from 'lucide-react';

export default function VAMShield90Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt="VAMShield-90"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
        </div>

        <div className="relative h-full flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Industries</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-semibold text-[#17A2B8] uppercase tracking-wider mb-4">
                CORROSION INHIBITOR
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                VAMShield-90
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                Advanced corrosion inhibitor for metalworking fluids and lubricants
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <Reveal direction="up">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  VAMShield-90 is a high-performance corrosion inhibitor specifically designed for metalworking fluids and industrial lubricants. It provides superior protection against rust and corrosion while maintaining excellent compatibility with various metal surfaces.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This advanced formulation offers long-lasting protection in demanding industrial environments, ensuring extended equipment life and reduced maintenance costs.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    'Superior corrosion protection for ferrous and non-ferrous metals',
                    'Excellent compatibility with metalworking fluids',
                    'Extended equipment life and reduced downtime',
                    'Effective at low dosage rates (cost-effective)',
                    'Stable across wide temperature ranges',
                    'Environmentally friendly formulation',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#17A2B8]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#17A2B8]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right Column - Specifications */}
            <Reveal direction="up" delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 mb-1">Product Code</p>
                    <p className="text-lg font-semibold text-gray-900">VAMShield-90</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 mb-1">Chemical Type</p>
                    <p className="text-lg font-semibold text-gray-900">Corrosion Inhibitor</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 mb-1">Application</p>
                    <p className="text-lg font-semibold text-gray-900">Metalworking Fluids & Lubricants</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 mb-1">Dosage Range</p>
                    <p className="text-lg font-semibold text-gray-900">0.5% - 2.0%</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500 mb-1">pH Range</p>
                    <p className="text-lg font-semibold text-gray-900">8.0 - 9.5</p>
                  </div>

                  <div className="pb-4">
                    <p className="text-sm text-gray-500 mb-1">Storage</p>
                    <p className="text-lg font-semibold text-gray-900">Cool, dry place (15-25°C)</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Available Packaging</h4>
                  <div className="flex flex-wrap gap-3">
                    {['25 kg', '50 kg', '200 kg', '1000 kg'].map((size) => (
                      <span
                        key={size}
                        className="px-4 py-2 bg-white border-2 border-[#17A2B8] text-[#17A2B8] rounded-lg font-semibold"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Applications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Metalworking Fluids',
                  description: 'Ideal for cutting, grinding, and machining operations requiring rust prevention.',
                  image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                },
                {
                  title: 'Industrial Lubricants',
                  description: 'Enhances corrosion protection in hydraulic fluids and gear oils.',
                  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
                },
                {
                  title: 'Cooling Systems',
                  description: 'Protects metal surfaces in industrial cooling and heat transfer systems.',
                  image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80',
                },
              ].map((app, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Interested in VAMShield-90?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Contact our technical team for detailed specifications, pricing, and samples.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#17A2B8] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Request Quote
            </Link>
            <a
              href="tel:+919898123983"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

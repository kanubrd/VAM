'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const industries = [
  {
    title: 'Automotive & General Industries',
    description: 'Reliable specialty chemical solutions engineered for automotive manufacturing and diverse industrial applications.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    href: '/industries/automotive',
    solutions: [
      { name: 'Rust Converter', product: 'Vam RC 01' },
    ],
  },
  {
    title: 'Metal Working Fluids & Lubricants',
    description: 'High-performance lubricants and metalworking solutions designed to improve machining efficiency, reduce wear, and extend equipment life.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    href: '/industries/metalworking',
    solutions: [
      { name: 'Corrosion Inhibitor', product: 'Vamshied 90' },
      { name: 'Ether Carboxylate', product: 'Product name to be decided' },
    ],
  },
  {
    title: 'Electroplating & Brighteners',
    description: 'Advanced electroplating chemicals and brighteners that enhance coating quality, corrosion resistance, and surface appearance.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
    href: '/industries/electroplating',
    solutions: [
      { name: 'Levelling Agent', product: 'Suscat-1' },
    ],
  },
  {
    title: 'Surface Treatment',
    description: 'Specialized surface treatment technologies that improve adhesion, durability, and protection for industrial components.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80',
    href: '/industries/surface-treatment',
    solutions: [
      { name: 'Silanes', product: 'Amino Silanes and Epoxy Silanes' },
      { name: 'Binders for TOC', product: 'Product name to be decided' },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/industries-hero.jpeg"
            alt="Industries Banner"
            fill
            className="object-contain object-center"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Text Section Below Image */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold text-white bg-[#17A2B8] uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full shadow-lg">
              OUR INDUSTRIES
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-3 leading-tight">
              Innovative Chemical Solutions
              <br />
              <span className="text-[#17A2B8]">for Diverse Industries</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-medium">
              Delivering advanced solutions in metalworking, electroplating, surface treatment, 
              and automotive industries through sustainable chemistry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, idx) => (
              <Reveal key={industry.title} delay={idx * 0.1} direction="up">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="group relative h-[400px] rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="w-full h-full"
                    >
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                      />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                        {industry.title}
                      </h3>
                      <p className="text-base text-gray-200 leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      
                      {/* Solutions List */}
                      <div className="space-y-2 mb-4">
                        {industry.solutions.map((solution, sIdx) => (
                          <div key={sIdx} className="flex flex-col">
                            <span className="text-sm font-semibold text-[#17A2B8]">
                              {solution.name}
                            </span>
                            <span className="text-sm text-gray-300">
                              {solution.product}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Arrow Icon - Clickable Button */}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-end"
                    >
                      <button
                        onClick={() => window.location.href = industry.href}
                        className="w-12 h-12 rounded-full bg-[#17A2B8] flex items-center justify-center group-hover:bg-[#0D7A8C] transition-colors duration-300 cursor-pointer hover:scale-110"
                        aria-label={`View ${industry.title}`}
                      >
                        <ArrowRight className="w-6 h-6 text-white" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
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
            Ready to Transform Your Industrial Processes?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Connect with our technical experts to discover how our specialty chemical solutions can optimize your operations.
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
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#17A2B8] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              View Solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

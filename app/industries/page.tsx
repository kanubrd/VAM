'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Solution = {
  name: string;
  product: string;
};

type Industry = {
  title: string;
  description: string;
  image: string;
  href: string;
  solutions: Solution[];
};

const industries: Industry[] = [
  {
    title: 'Automotive & General Industries',
    description: 'Reliable specialty chemical solutions engineered for automotive manufacturing and diverse industrial applications.',
    image: '/automotive-category.avif',
    href: '/industries/automotive',
    solutions: [],
  },
  {
    title: 'Metal Working Fluids & Lubricants',
    description: 'High-performance lubricants and metalworking solutions designed to improve machining efficiency, reduce wear, and extend equipment life.',
    image: '/metalworking-category.avif',
    href: '/industries/metalworking',
    solutions: [],
  },
  {
    title: 'Electroplating & Brighteners',
    description: 'Advanced electroplating chemicals and brighteners that enhance coating quality, corrosion resistance, and surface appearance.',
    image: '/electroplating-category.avif',
    href: '/industries/electroplating',
    solutions: [],
  },
  {
    title: 'Surface Treatment',
    description: 'Specialized surface treatment technologies that improve adhesion, durability, and protection for industrial components.',
    image: '/surface-treatment-category.avif',
    href: '/industries/surface-treatment',
    solutions: [],
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
            style={{ objectPosition: 'center 60%' }}
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
              <div key={industry.title} className="relative h-[400px] rounded-[20px] overflow-hidden shadow-lg">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-base text-gray-200 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    
                    {/* Solutions List */}
                    {industry.solutions.length > 0 && (
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
                    )}
                  </div>

                  {/* Arrow Icon - Clickable Button */}
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => window.location.href = industry.href}
                      className="w-12 h-12 rounded-full bg-[#17A2B8] flex items-center justify-center cursor-pointer"
                      aria-label={`View ${industry.title}`}
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
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
              Contact Us
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

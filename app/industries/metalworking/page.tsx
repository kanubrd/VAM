'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Droplets, Zap } from 'lucide-react';

// Updated: 2026-07-02 - Latest version with enhanced benefits section
export default function MetalworkingPage() {
  console.log('🔥 METALWORKING PAGE LOADED - LATEST VERSION WITH ENHANCED BENEFITS');
  const products = [
    {
      name: 'VAMShield-90',
      category: 'Corrosion Inhibitor',
      description: 'Advanced corrosion protection for ferrous and non-ferrous metals in metalworking fluids.',
      features: ['Long-lasting protection', 'Low dosage required', 'Multi-metal compatibility'],
      href: '/solutions?product=vamshield-90',
    },
    {
      name: 'Ether Carboxylate',
      category: 'Emulsifier',
      description: 'High-performance emulsifier for stable metalworking fluid formulations.',
      features: ['Superior emulsion stability', 'Excellent lubricity', 'Hard water tolerance'],
      href: '/solutions',
    },
  ];

  const applications = [
    {
      title: 'Cutting & Machining',
      description: 'Optimize tool life and surface finish in precision machining operations with our advanced lubricant additives.',
      icon: Zap,
    },
    {
      title: 'Grinding Operations',
      description: 'Reduce heat generation and improve workpiece quality in demanding grinding applications.',
      icon: Shield,
    },
    {
      title: 'Metal Forming',
      description: 'Enhance formability and reduce friction in stamping, drawing, and rolling processes.',
      icon: Droplets,
    },
  ];

  const benefits = [
    'Reduced Friction and Wear: Minimizes friction between the cutting tool and workpiece, reducing wear and improving machining performance.',
    'Effective Cooling: Dissipates heat generated during machining, preventing overheating and thermal damage to tools and components.',
    'Extended Tool Life: Reduces tool wear, leading to longer tool life and lower tooling costs.',
    'Improved Surface Finish: Enhances the quality and accuracy of machined parts by reducing friction, vibration, and built-up edge formation.',
    'Corrosion Protection: Protects cutting tools, workpieces, and machine components from rust and corrosion, increasing their durability and service life.',
  ];

  return (
    <div key="metalworking-page-v2-enhanced">
      {/* Hero Section */}
      <section className="relative w-full bg-white" style={{ marginTop: '108px', boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        {/* Hero Image */}
        <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="/metalworking-hero.png"
            alt="Metal Working Fluids - Technician with laboratory equipment and metalworking components"
            fill
            className="object-contain object-center"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>

        {/* Spacing Section */}
        <div className="w-full h-16 bg-white"></div>

        {/* Text Content */}
        <div className="pb-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-3 leading-tight">
                Metal Working Fluids & Lubricants
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
                High-performance specialty chemicals designed to improve machining efficiency, reduce wear, and extend equipment life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Overview</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Metal Working Fluids (MWFs) and Lubricants are essential materials used in manufacturing and machining processes to improve efficiency, extend tool life, and produce high-quality finished products. Metal Working Fluids are applied during operations such as cutting, drilling, milling, turning, and grinding to reduce friction, dissipate heat, remove metal chips, and protect both the cutting tool and workpiece from corrosion.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Depending on the application, MWFs may be classified as straight oils, soluble oils, semi-synthetic fluids, or synthetic fluids, each offering different levels of cooling and lubrication. Lubricants, on the other hand, are substances such as oils, greases, or solid lubricants that primarily reduce friction and wear between moving surfaces in machines and equipment.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A good lubricant should possess suitable viscosity, thermal stability, oxidation resistance, anti-wear properties, and corrosion protection to ensure reliable machine performance and long service life. Together, metal working fluids and lubricants play a critical role in enhancing machining accuracy, improving surface finish, reducing maintenance costs, and increasing productivity across industries such as automotive, aerospace, manufacturing, and metal fabrication.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our metalworking solutions are designed for a wide range of industrial applications
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      idx === 0 ? '/cutting-machining.png' : 
                      idx === 1 ? '/grinding-operations.png' : 
                      '/metal-forming.png'
                    }
                    alt={app.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-[#17A2B8]/10 flex items-center justify-center mb-6">
                    <app.icon className="w-7 h-7 text-[#17A2B8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fluid Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Metalworking Fluid Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive additive packages for all major metalworking fluid types
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Soluble Oils',
                description: 'Balanced emulsions for general machining with excellent cooling and lubrication properties',
                image: '/soluble-oils.png',
              },
              {
                name: 'Semi-Synthetic Fluids',
                description: 'Hybrid formulations combining mineral oil and synthetic components for enhanced performance',
                image: '/semi-synthetic-fluids.png',
              },
              {
                name: 'Synthetic Fluids',
                description: 'Oil-free solutions offering superior cooling, cleanliness, and extended sump life',
                image: '/synthetic-fluids.png',
              },
            ].map((type, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-leading specialty chemicals for metalworking applications
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <span className="text-sm font-semibold text-[#17A2B8] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#17A2B8] shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-[#17A2B8] font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-[#17A2B8] uppercase tracking-wider mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Top 5 Key Benefits of Metal Working Fluids (MWFs) and Lubricants
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Metal working fluids and lubricants deliver critical performance improvements across manufacturing operations
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const [title, description] = benefit.split(': ');
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#17A2B8]/30 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C] flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
            Ready to Optimize Your Metalworking Operations?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Connect with our technical experts to find the right solution for your specific needs
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
              Request Technical Information
            </Link>
            <Link
              href="/products/vamshield-90"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              View Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


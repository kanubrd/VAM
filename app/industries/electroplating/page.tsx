'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Sparkles, Layers, Beaker } from 'lucide-react';

export default function ElectroplatingPage() {
  const products = [
    {
      name: 'SusCat-I',
      category: 'Levelling Agent',
      description: 'Advanced levelling agent for bright, smooth electroplated finishes with excellent throwing power.',
      features: ['Superior surface levelling', 'Bright lustrous finish', 'Wide current density range'],
      href: '/solutions?product=suscat-i',
    },
  ];

  const applications = [
    {
      title: 'Decorative Plating',
      description: 'Achieve brilliant, mirror-like finishes for automotive, hardware, and consumer products.',
      icon: Sparkles,
    },
    {
      title: 'Functional Coatings',
      description: 'Enhance corrosion resistance, wear resistance, and electrical conductivity for industrial components.',
      icon: Layers,
    },
    {
      title: 'Electronics Manufacturing',
      description: 'Precision plating solutions for PCBs, connectors, and semiconductor packaging.',
      icon: Beaker,
    },
  ];

  const benefits = [
    'Exceptional surface brightness and smoothness',
    'Improved throwing power and coverage',
    'Enhanced corrosion resistance',
    'Reduced internal stress in deposits',
    'Excellent bath stability and longevity',
    'Compatible with various base metals',
  ];

  const platingTypes = [
    {
      name: 'Nickel Plating',
      description: 'High-quality nickel deposits with excellent corrosion resistance and decorative appeal',
      image: '/nickel-plating.png',
    },
    {
      name: 'Chrome Plating',
      description: 'Bright, durable chrome finishes for automotive and industrial applications',
      image: '/chrome-plating.png',
    },
    {
      name: 'Copper Plating',
      description: 'Conductive copper layers for electronics and decorative undercoats',
      image: '/copper-plating.png',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-white" style={{ marginTop: '108px', boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        {/* Hero Image */}
        <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="/electroplating-hero.png"
            alt="Electroplating - Technician with electroplating bath and metal samples"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Spacing Section */}
        <div className="w-full h-16 bg-white"></div>

        {/* Text Content */}
        <div className="pb-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div>
              <span className="inline-block text-sm font-semibold text-[#17A2B8] uppercase tracking-wider mb-3">
                ELECTROPLATING SOLUTIONS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-3 leading-tight">
                Electroplating & Brighteners
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
                Advanced specialty chemicals for superior surface finishing and electroplating applications
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
              <p className="text-lg text-gray-600 leading-relaxed">
                Electroplating and Brighteners are essential components of modern surface engineering, widely used in the automotive, electronics, aerospace, construction, and consumer goods industries. Electroplating is an electrochemical process in which a thin layer of metal, such as nickel, chromium, zinc, copper, silver, or gold, is deposited onto the surface of a metal or plastic object using an electric current. This process enhances corrosion resistance, wear resistance, electrical conductivity, appearance, and the overall durability of the component. Brighteners are specialized chemical additives used in electroplating baths to produce smooth, level, and highly reflective metal coatings by refining the grain structure of the deposited metal. They improve the finish, uniformity, and decorative appeal of plated products while reducing surface defects. Electroplating and brighteners are extensively used in manufacturing automotive parts, electronic connectors, household appliances, hardware, medical devices, and decorative products. As industries move toward sustainable manufacturing, there is an increasing focus on environmentally friendly plating chemicals, efficient waste treatment, and compliance with environmental and safety regulations. Overall, electroplating and brighteners play a crucial role in improving product performance, extending service life, and enhancing the aesthetic quality of manufactured components.
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
                Our electroplating solutions serve diverse industries and applications
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        idx === 0 ? '/decorative-plating.png' :
                        idx === 1 ? '/functional-coatings.png' :
                        '/electronics-manufacturing.png'
                      }
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      quality={85}
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plating Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Plating Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive additive packages for all major plating processes
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {platingTypes.map((type, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      quality={85}
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
                Premium electroplating additives for superior surface finishing
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
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
                Key Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our electroplating additives deliver superior performance and cost-effectiveness
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#17A2B8]/30 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed font-medium">{benefit}</p>
                    </div>
                  </div>
                </div>
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
            Enhance Your Plating Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Discover how our electroplating chemistry can improve your surface finishing quality
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
              Request Technical Data
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              Explore Other Industries
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

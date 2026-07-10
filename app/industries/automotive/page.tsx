'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Car, Wrench, Factory } from 'lucide-react';

export default function AutomotivePage() {
  const products = [
    {
      name: 'VAM RC 01',
      category: 'Rust Converter',
      description: 'Advanced rust converter that transforms rust into a stable, protective coating ready for painting.',
      features: ['Fast-acting formula', 'Long-lasting protection', 'Easy application process'],
      href: '/solutions?product=vam-rc-01',
    },
    {
      name: 'Polyols',
      category: 'Polyurethane Building Blocks',
      description: 'High-performance polyols for manufacturing polyurethane foams, coatings, adhesives, and sealants in automotive applications.',
      features: ['Versatile applications', 'Superior mechanical properties', 'Excellent chemical resistance'],
      href: '/solutions',
    },
    {
      name: 'High Build Coatings',
      category: 'Aftermarket Solutions',
      description: 'Thick-film protective coatings designed for automotive repair and restoration, providing excellent coverage and durability.',
      features: ['High film thickness', 'Superior hiding power', 'Excellent corrosion resistance'],
      href: '/solutions',
    },
  ];

  const applications = [
    {
      title: 'Automotive Manufacturing',
      description: 'High-performance coatings and surface treatments for vehicle production lines and component manufacturing.',
      icon: Car,
    },
    {
      title: 'Maintenance & Repair',
      description: 'Specialized chemistry for automotive aftermarket, including rust treatment and corrosion prevention.',
      icon: Wrench,
    },
    {
      title: 'General Industrial',
      description: 'Versatile solutions for diverse manufacturing operations across multiple industrial sectors.',
      icon: Factory,
    },
  ];

  const benefits = [
    'Superior corrosion protection for extended service life',
    'Enhanced paint adhesion and finish quality',
    'Reduced maintenance costs and downtime',
    'Easy-to-use formulations for efficient application',
    'Compatible with existing manufacturing processes',
    'Environmentally responsible chemistry',
  ];

  const segments = [
    {
      name: 'OEM Automotive',
      description: 'Advanced coating systems and specialty chemicals for original equipment manufacturers',
      image: '/oem-automotive.png',
    },
    {
      name: 'Aftermarket Solutions',
      description: 'Professional-grade products including High Build Coatings for repair shops, body shops, and DIY applications',
      image: '/aftermarket-solutions.png',
    },
    {
      name: 'Heavy Equipment',
      description: 'Durable protective coatings for construction and agricultural machinery',
      image: '/heavy-equipment.png',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-white" style={{ marginTop: '108px', boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        {/* Hero Image */}
        <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="/automotive-hero-new.png"
            alt="Automotive & Industrial Solutions - Professional scientist with automotive components and chemical solutions"
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
              <span className="inline-block text-sm font-semibold text-[#17A2B8] uppercase tracking-wider mb-3">
                AUTOMOTIVE & INDUSTRIAL SOLUTIONS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-3 leading-tight">
                Automotive & General Industries
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
                Reliable specialty chemical solutions engineered for automotive manufacturing and diverse industrial applications
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
                The Automotive and General Industries sector is a key driver of economic growth, technological innovation, and industrial development. The automotive industry is responsible for the design, manufacturing, assembly, and maintenance of vehicles such as passenger cars, commercial vehicles, motorcycles, electric vehicles (EVs), and their components. General industries cover a wide range of manufacturing sectors, including heavy engineering, industrial machinery, electrical equipment, metal fabrication, chemicals, construction equipment, and consumer goods. Together, these industries form the foundation of the manufacturing sector and support transportation, infrastructure, and economic progress.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modern automotive and general industries use advanced technologies such as automation, robotics, CNC machining, CAD/CAM, Industrial Internet of Things (IIoT), and smart manufacturing to improve productivity, precision, and product quality. They also follow internationally recognized quality standards, including ISO 9001, IATF 16949, and ISO 14001, along with continuous improvement practices such as Lean Manufacturing, Six Sigma, and Kaizen to enhance efficiency and reduce waste.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These industries play a vital role in creating employment, supporting supply chains, promoting exports, and encouraging research and development. They provide career opportunities in production, design, quality assurance, maintenance, supply chain management, and engineering. With the growing adoption of electric vehicles, artificial intelligence, digital manufacturing, and sustainable production methods, the sector is undergoing rapid transformation. Despite challenges such as rising material costs, global competition, and evolving environmental regulations, the Automotive and General Industries sector continues to be a major contributor to innovation, industrial competitiveness, and long-term economic development.
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
                Comprehensive solutions for automotive and general industrial needs
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
                        idx === 0 ? '/automotive-manufacturing.png' : 
                        idx === 1 ? '/maintenance-repair.png' :
                        '/general-industrial.png'
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

      {/* Market Segments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Segments</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored solutions for every segment of the automotive and industrial markets
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={segment.image}
                      alt={segment.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{segment.name}</h3>
                    <p className="text-gray-600">{segment.description}</p>
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
                Professional-grade chemistry for automotive and industrial applications
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
                Our automotive and industrial solutions deliver proven performance improvements
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
            Drive Innovation in Your Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Partner with us to enhance your automotive and industrial processes
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
              Get Started Today
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              Explore Other Solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

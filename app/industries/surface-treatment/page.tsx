'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Layers, Droplet } from 'lucide-react';

export default function SurfaceTreatmentPage() {
  const products = [
    {
      name: 'Amino & Epoxy Silanes',
      category: 'Coupling Agents',
      description: 'Advanced silane coupling agents that enhance adhesion between organic polymers and inorganic substrates.',
      features: ['Superior adhesion promotion', 'Moisture resistance', 'Improved mechanical properties'],
      href: '/solutions',
    },
    {
      name: 'TOC Binders',
      category: 'Top of Cab Coatings',
      description: 'High-performance binders for temporary protective coatings with excellent weather resistance.',
      features: ['Easy application and removal', 'UV protection', 'Long-term stability'],
      href: '/solutions',
    },
  ];

  const applications = [
    {
      title: 'Pre-Treatment Systems',
      description: 'Optimize surface preparation for painting, coating, and bonding applications with our advanced treatment chemistry.',
      icon: Layers,
    },
    {
      title: 'Adhesion Promotion',
      description: 'Enhance bonding strength between dissimilar materials in composite and laminate applications.',
      icon: Droplet,
    },
    {
      title: 'Protective Coatings',
      description: 'Deliver long-lasting corrosion protection and surface durability for industrial components.',
      icon: Shield,
    },
  ];

  const benefits = [
    'Enhanced adhesion and bonding performance',
    'Superior corrosion and weathering resistance',
    'Improved coating durability and longevity',
    'Compatible with various substrate materials',
    'Reduced processing time and costs',
    'Environmentally responsible formulations',
  ];

  const treatmentTypes = [
    {
      name: 'Phosphate Conversion Coatings',
      description: 'Crystalline coatings that provide excellent paint adhesion and corrosion resistance',
      image: '/phosphate-conversion-coatings.png',
    },
    {
      name: 'Silane Pre-Treatment',
      description: 'Chrome-free surface treatment for superior adhesion and environmental compliance',
      image: '/silane-pre-treatment.png',
    },
    {
      name: 'Anodizing Solutions',
      description: 'Electrochemical processes for enhanced aluminum surface properties and appearance',
      image: '/anodizing-solutions.png',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-white" style={{ marginTop: '108px', boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        {/* Hero Image */}
        <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="/surface-treatment-hero-new.png"
            alt="Surface Treatment Technology - Professional scientist working with coating samples and surface treatment processes"
            fill
            className="object-contain object-center"
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
                SURFACE TREATMENT SOLUTIONS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-3 leading-tight">
                Surface Treatment Technology
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
                Specialized chemistry for superior surface preparation, adhesion promotion, and protective coatings
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
                Surface Treatment is a manufacturing process used to improve the physical, chemical, and mechanical properties of a material's surface without significantly altering its core characteristics. It is widely applied in the automotive, aerospace, electronics, construction, and engineering industries to enhance corrosion resistance, wear resistance, hardness, adhesion, appearance, and durability of components. Common surface treatment methods include electroplating, anodizing, galvanizing, phosphating, powder coating, painting, polishing, passivation, and heat treatment. These processes protect components from environmental damage, reduce friction, increase service life, and improve the bonding of paints or coatings. Surface treatment also plays a crucial role in maintaining product quality, reducing maintenance costs, and ensuring compliance with industry standards. With the growing emphasis on sustainability, modern surface treatment technologies focus on environmentally friendly chemicals, energy-efficient processes, and waste minimization while delivering high-performance and long-lasting surface finishes.
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
                Comprehensive surface treatment solutions for diverse industrial needs
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
                        idx === 0 ? '/pre-treatment-systems.png' :
                        idx === 1 ? '/adhesion-promotion.png' :
                        '/protective-coatings.png'
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Technologies</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Advanced surface treatment processes for optimal performance
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {treatmentTypes.map((type, idx) => (
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
                High-performance specialty chemicals for surface treatment applications
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
                Key Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our surface treatment solutions deliver measurable improvements in product performance and longevity
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
            Transform Your Surface Treatment Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Connect with our surface treatment specialists to optimize your operations
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
              Request Technical Support
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              View All Industries
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

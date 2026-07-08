'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from '@/components/ui/section';
import { Reveal } from '@/components/animations/reveal';
import { Target, Telescope, Lightbulb, CheckCircle2, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);

  return (
    <div className="pt-16 sm:pt-20">

      {/* Hero */}
      <Section className="bg-white py-16 sm:py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F7FA] border border-[#17A2B8]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#17A2B8] animate-pulse" />
            <span className="text-sm font-medium text-[#17A2B8]">Valtrix Advanced Materials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#17A2B8]">
            Transforming Innovation into Industrial Reality
          </h1>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            A research and innovation-driven organization delivering value through superior performance, cost optimization, and sustainable solutions in specialty materials and surface chemistry.
          </p>
        </motion.div>
      </Section>

      {/* Separator */}
      <div className="relative bg-white py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto px-4">
            <div className="relative h-px bg-gradient-to-r from-transparent via-[#17A2B8]/30 to-transparent" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C] flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C]" />
              </div>
            </div>
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-[#17A2B8]/20 animate-ping" style={{ animationDuration: '3s' }} />
          </motion.div>
        </div>
      </div>

      {/* Company Story */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
                The <span className="gradient-text">Valtrix</span> Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#17A2B8] to-[#0D7A8C] mx-auto rounded-full" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-lg max-w-none text-[#6B7280] space-y-6">
              <p className="text-lg leading-relaxed">
                Valtrix Advanced Materials is founded on the principles embodied in its name—<strong className="text-[#17A2B8]">"Value"</strong> and <strong className="text-[#17A2B8]">"Matrix."</strong> The term <strong>"Value"</strong> reflects our commitment to delivering meaningful benefits to customers through superior product performance, cost optimization, and efficient implementation. The term <strong>"Matrix"</strong> represents the complex and interconnected challenges that exist within the materials science and specialty chemicals industry.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our mission is to navigate these complexities and transform them into practical, sustainable, and commercially viable solutions that create long-term value for our customers and stakeholders. We are dedicated to advancing material technologies through scientific excellence, innovation, and customer-centric development.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our expertise lies in understanding the intricate relationships between raw materials, formulations, processing conditions, and end-use performance, enabling us to design solutions that address evolving industry requirements. We believe that innovation should not only solve technical challenges but also improve operational efficiency, reduce costs, accelerate market adoption, and support sustainable growth.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Leadership & Expertise */}
      <Section className="bg-[#F8FAFB]">
        <SectionTitle 
          subtitle="EXPERTISE" 
          title="World-Class Leadership Team" 
          description="Proven track record in research, innovation, and commercialization"
        />

        <Reveal delay={0.2}>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#D1F2F7]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F7FA] flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-[#17A2B8]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C3E50] mb-3">End-to-End Technology Development</h4>
                <p className="text-[#6B7280] leading-relaxed">
                  One of our key strengths is the ability to manage the complete technology development lifecycle—from concept generation and laboratory-scale research to pilot-scale validation and full-scale manufacturing implementation. This end-to-end capability enables us to bridge the gap between innovation and commercialization, ensuring that new technologies are not only technically successful but also economically viable and scalable for industrial production.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Mission & Vision - Interactive Checkboxes */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-[#6B7280]">Click to explore what drives us forward</p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {/* Mission Checkbox */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl shadow-lg border-2 border-[#D1F2F7] overflow-hidden">
                <button
                  onClick={() => setShowMission(!showMission)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-[#E6F7FA]/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${showMission ? 'bg-[#17A2B8] border-[#17A2B8]' : 'border-[#D1F2F7] bg-white'}`}>
                      {showMission && <CheckCircle2 className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C] flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#2C3E50]">Our Mission</h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-[#17A2B8] transition-transform duration-300 ${showMission ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showMission && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                        <div className="bg-white rounded-xl p-6 border-l-4 border-[#17A2B8]">
                          <p className="text-lg text-[#6B7280] leading-relaxed">
                            To develop <strong className="text-[#2C3E50]">innovative, sustainable, and high-performance specialty materials</strong> through cutting-edge research in surface chemistry, specialty polymers, and functional additives. We are committed to delivering value-driven solutions that optimize performance, cost, and time while helping our customers overcome complex material challenges. Through scientific excellence, technological innovation, and strong industry partnerships, we aim to <strong className="text-[#2C3E50]">transform laboratory research into commercially successful industrial technologies.</strong>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>

            {/* Vision Checkbox */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl shadow-lg border-2 border-[#D1F2F7] overflow-hidden">
                <button
                  onClick={() => setShowVision(!showVision)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-[#E6F7FA]/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${showVision ? 'bg-[#17A2B8] border-[#17A2B8]' : 'border-[#D1F2F7] bg-white'}`}>
                      {showVision && <CheckCircle2 className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C] flex items-center justify-center">
                        <Telescope className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#2C3E50]">Our Vision</h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-[#17A2B8] transition-transform duration-300 ${showVision ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showVision && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                        <div className="bg-white rounded-xl p-6 border-l-4 border-[#17A2B8]">
                          <p className="text-lg text-[#6B7280] leading-relaxed">
                            To become a <strong className="text-[#2C3E50]">globally recognized research and innovation-driven company</strong> in advanced materials, setting new benchmarks in surface chemistry and specialty materials. We aspire to be the preferred technology partner for leading multinational companies by developing world-class solutions that drive industrial growth, sustainability, and technological advancement. By fostering a culture of innovation, intellectual property creation, technical excellence, and customer partnership, we aim to become a <strong className="text-[#2C3E50]">trusted global player</strong> in advanced materials, specialty polymers, and performance additives, contributing to the advancement of industries worldwide while creating lasting value for customers, partners, and society.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section className="bg-[#F8FAFB]">
        <SectionTitle 
          subtitle="OUR EXPERTISE" 
          title="Strategic Focus Areas" 
          description="Driving innovation in surface chemistry and specialty materials"
        />
        
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              'Surface Chemistry & Material Science',
              'Specialty Polymers & Performance Additives',
              'Functional Ingredients & Advanced Materials',
              'Application-Driven Research & Development'
            ].map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#D1F2F7] hover:shadow-xl transition-all duration-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#17A2B8] to-[#0D7A8C] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-semibold text-[#2C3E50]">{area}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#17A2B8]">
            <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Business Model</h4>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Operating primarily in a <strong className="text-[#17A2B8]">Business-to-Business (B2B)</strong> model, we collaborate closely with industrial partners, manufacturers, formulators, and technology-driven organizations to develop customized solutions tailored to specific market needs. Our approach combines scientific rigor, practical industry experience, and deep customer engagement to deliver solutions that generate measurable value and support business growth.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-[#2C3E50] to-[#17A2B8] text-white text-center py-16 sm:py-20">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight px-4">
            Partner With Innovation Leaders
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
            Join forces with a team that transforms complex material challenges into commercial success. Let's create value together through innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#17A2B8] font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
            <Link 
              href="/solutions" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-[#17A2B8] transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

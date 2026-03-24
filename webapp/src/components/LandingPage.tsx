import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faMemory,
  faGauge,
  faGears,
  faFlask,
  faCheckCircle,
  faStar,
  faLightbulb,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: faMemory,
      title: 'Memory Optimization',
      description: 'Reduce KV-cache overhead by 40-60% with intelligent inference optimization',
    },
    {
      icon: faGauge,
      title: 'Speed Control',
      description: 'Configure quality and speed tradeoffs to match your application needs',
    },
    {
      icon: faGears,
      title: 'Multi-Model Support',
      description: 'Works with various LLM architectures - Transformer, RoPE, and custom models',
    },
    {
      icon: faChartLine,
      title: 'Latency Monitoring',
      description: 'Real-time latency tracking and performance analytics dashboard',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Deploy Model',
      description: 'Integrate InferCheap with your LLM inference pipeline',
    },
    {
      step: 2,
      title: 'Configure Quality/Speed',
      description: 'Set your desired quality level and speed tradeoff parameters',
    },
    {
      step: 3,
      title: 'Monitor Performance',
      description: 'Track memory usage, latency, and throughput in real-time',
    },
    {
      step: 4,
      title: 'Optimize & Scale',
      description: 'Use insights to optimize batch processing and reduce infrastructure costs',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'ML Engineering at CloudScale',
      content: 'InferCheap reduced our inference costs by 45% while maintaining quality. Game-changer.',
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO at AI Solutions Inc',
      content: 'The memory savings allowed us to serve 3x more requests on the same hardware.',
      avatar: '👨‍💼',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Research Lead at TechAI',
      content: 'Best-in-class latency monitoring. We can now optimize with confidence.',
      avatar: '👩‍💻',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -top-40 -right-40"></div>
          <div className="absolute w-96 h-96 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl -bottom-40 -left-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FontAwesomeIcon icon={faLightbulb} />
              KV-Cache-Free Inference
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Memory-Efficient LLM Inference
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Reduce memory overhead while maintaining model quality. Optimize your inference infrastructure with KV-cache-free techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-br text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started Free
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <a
                href="/#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need for efficient LLM inference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-br flex items-center justify-center text-white mb-4">
                  <FontAwesomeIcon icon={feature.icon} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-br text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gradient-to-r from-primary-600 to-accent-600"></div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            What Our Users Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-primary-500" size="sm" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-br rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to Optimize Your Inference?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start reducing your inference infrastructure costs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-primary-600 font-semibold hover:bg-gray-50"
            >
              Start Free Trial
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white text-white font-semibold hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { PricingTier } from '@/types';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      price: 0,
      period: '/month',
      inferences: 1000,
      description: 'Perfect for getting started',
      features: [
        'Up to 1,000 inferences/month',
        'Single model support',
        'Basic memory tracking',
        'Monthly performance report',
        'Email support',
        'Community access',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: annual ? 490 : 49,
      period: annual ? '/year' : '/month',
      inferences: 50000,
      description: 'For growing teams',
      features: [
        'Up to 50,000 inferences/month',
        'Multi-model support (up to 5 models)',
        'Advanced memory optimization',
        'Real-time latency dashboard',
        'Quality/speed configuration',
        'Priority email support',
        'Batch processing queue',
        'API access',
        'Team collaboration (up to 3 users)',
        'Performance metrics export',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 0,
      period: 'Custom',
      inferences: 0,
      description: 'For large organizations',
      features: [
        'Unlimited inferences',
        'Unlimited model support',
        'Custom model fine-tuning',
        'Dedicated performance engineer',
        'Advanced analytics and reporting',
        'SLA guarantee (99.99% uptime)',
        'Priority 24/7 phone support',
        'Custom integrations',
        'Unlimited team members',
        'On-premise deployment option',
        'Advanced security features',
      ],
      cta: 'Contact Sales',
    },
  ];

  const faqs = [
    {
      question: 'What exactly is KV-cache-free inference?',
      answer:
        'KV-cache-free inference eliminates the key-value cache overhead in transformer models during inference, reducing memory consumption by 40-60% while maintaining model quality through intelligent optimization techniques.',
    },
    {
      question: 'Can I change quality/speed tradeoffs after deployment?',
      answer:
        'Yes! You can adjust quality and speed parameters at any time without redeployment. Changes take effect immediately on new inference requests.',
    },
    {
      question: 'Which models are supported?',
      answer:
        'InferCheap supports any Transformer-based model with RoPE or standard attention mechanisms. This includes LLaMA, Mistral, GPT variants, Claude, and many others.',
    },
    {
      question: 'Do you offer a free trial for Pro plan?',
      answer:
        'Yes! The Free plan is always available with no time limits. Pro plan includes a 14-day free trial with full features and no credit card required.',
    },
    {
      question: 'What happens if I exceed my inference limit?',
      answer:
        'We\'ll notify you at 80% of your limit. You can upgrade anytime, and we\'ll apply credits for unused portion. We can also temporarily increase your limit if needed.',
    },
    {
      question: 'Can I downgrade from Pro to Free?',
      answer:
        'Absolutely! You can change your plan at any time. If you downgrade, we\'ll prorate your charges and apply any remaining credit.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that fits your inference needs
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium ${!annual ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
              style={{
                backgroundColor: annual ? 'var(--color-primary-600)' : undefined,
              }}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  annual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${annual ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
              Annual <span className="text-sm text-primary-600">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all ${
                tier.highlighted
                  ? 'md:scale-105 bg-gradient-br text-white shadow-2xl'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white dark:bg-gray-800 text-primary-600 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className={tier.highlighted ? 'opacity-90' : 'text-gray-600 dark:text-gray-400'}>
                  {tier.description}
                </p>

                <div className="my-6">
                  <span className="text-5xl font-bold">${tier.price}</span>
                  <span className={tier.highlighted ? 'opacity-75' : 'text-gray-600 dark:text-gray-400'}>
                    {tier.period}
                  </span>
                </div>

                {tier.inferences > 0 && (
                  <div className={`mb-6 p-3 rounded-lg ${tier.highlighted ? 'bg-white/10' : 'bg-primary-50 dark:bg-primary-900/20'}`}>
                    <p className={tier.highlighted ? '' : 'text-primary-600 dark:text-primary-400'}>
                      <span className="font-bold">{tier.inferences.toLocaleString()}</span> inferences/month
                    </p>
                  </div>
                )}

                <Link
                  to={tier.name === 'Enterprise' ? '/#contact' : '/signup'}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-opacity mb-8 ${
                    tier.highlighted
                      ? 'bg-white text-primary-600 hover:opacity-90'
                      : 'bg-gradient-br text-white hover:opacity-90'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={tier.highlighted ? 'text-white' : 'text-primary-600 dark:text-primary-400'}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Our team is here to help. Contact us anytime.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-br text-white font-semibold hover:opacity-90">
            Contact Sales
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

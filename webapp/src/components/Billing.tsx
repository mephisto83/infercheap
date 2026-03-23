import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faArrowRight,
  faCheckCircle,
  faDownload,
  faCalendar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { BillingInfo } from '@/types';

const Billing: React.FC = () => {
  const [billingInfo] = useState<BillingInfo>({
    currentPlan: 'pro',
    usagePercent: 62,
    inferencesUsed: 31000,
    inferencesLimit: 50000,
    renewalDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    nextInvoiceAmount: 49.0,
  });

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const invoices = [
    {
      id: '1',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
      amount: 49.0,
      status: 'Paid',
      inferences: 50000,
    },
    {
      id: '2',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
      amount: 49.0,
      status: 'Paid',
      inferences: 50000,
    },
    {
      id: '3',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
      amount: 0.0,
      status: 'Paid',
      inferences: 1000,
    },
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'Visa',
      last4: '4242',
      expiry: '12/26',
      isDefault: true,
    },
  ];

  const planFeatures = {
    free: [
      'Up to 1,000 inferences/month',
      'Single model support',
      'Basic memory tracking',
      'Community access',
    ],
    pro: [
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
    enterprise: [
      'Unlimited inferences',
      'Unlimited model support',
      'Custom model fine-tuning',
      'Dedicated performance engineer',
      'Advanced analytics and reporting',
      'SLA guarantee (99.99% uptime)',
      'Priority 24/7 phone support',
      'Custom integrations',
      'Unlimited team members',
    ],
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Billing & Subscription
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your plan, usage, and payment methods
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Current Plan
            </h2>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pro Plan
                </h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  $49/month
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Monthly Inference Usage
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {billingInfo.inferencesUsed.toLocaleString()} / {billingInfo.inferencesLimit.toLocaleString()}
                  </p>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-br"
                    style={{ width: `${billingInfo.usagePercent}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {billingInfo.usagePercent}% used
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg mb-6">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Next Renewal
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {formatDate(billingInfo.renewalDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Next Invoice
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ${billingInfo.nextInvoiceAmount.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowUpgradeModal(true)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-br text-white font-semibold hover:opacity-90"
                >
                  Upgrade to Enterprise
                </button>
                <button className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700">
                  Manage Billing
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Plan Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {planFeatures.pro.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-primary-600 dark:text-primary-400 mt-0.5"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Usage Summary
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    This Month
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {billingInfo.inferencesUsed.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Remaining
                  </p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {(billingInfo.inferencesLimit - billingInfo.inferencesUsed).toLocaleString()}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Avg per day
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {Math.round(billingInfo.inferencesUsed / 15).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-br rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-2">Approaching Limit?</h4>
              <p className="text-sm opacity-90 mb-4">
                Upgrade to Enterprise for unlimited inferences.
              </p>
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="w-full px-4 py-2 rounded-lg bg-white text-primary-600 font-semibold hover:bg-gray-50 text-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Payment Method
          </h2>

          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="text-2xl text-gray-400 dark:text-gray-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {method.type} ending in {method.last4}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Expires {method.expiry}
                    </p>
                  </div>
                </div>
                {method.isDefault && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
                    Default
                  </span>
                )}
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700">
            Add Payment Method
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Billing History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Inferences</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30"
                  >
                    <td className="py-3 px-4 text-gray-900 dark:text-white">
                      {formatDate(invoice.date)}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {invoice.inferences.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      ${invoice.amount.toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-1">
                        <FontAwesomeIcon icon={faDownload} size="sm" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Upgrade to Enterprise
              </h3>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get unlimited inferences, dedicated support, and advanced features.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Enterprise Plan
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Custom Pricing
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tailored to your needs
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {planFeatures.enterprise.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary-600 dark:text-primary-400 mt-0.5"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-br text-white font-semibold hover:opacity-90">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;

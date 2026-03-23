import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMemory,
  faGauge,
  faZap,
  faDatabase,
  faGear,
  faCheck,
  faMinus,
  faFlask,
  faArrowRight,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { DashboardStats, Inference, LatencyComparison, BatchJob, ModelConfig, PerformanceMetrics } from '@/types';

const Dashboard: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('llama-7b');
  const [qualityLevel, setQualityLevel] = useState(85);
  const [speedLevel, setSpeedLevel] = useState(90);

  const stats: DashboardStats = {
    memorySaved: 2847.5,
    memorySavingsPercent: 48,
    inferencesToday: 3421,
    averageLatency: 145.2,
    budgetRemaining: 8950.0,
    budgetLimit: 10000.0,
  };

  const latencyData: LatencyComparison[] = [
    { timepoint: '00:00', standard: 280, optimized: 145 },
    { timepoint: '04:00', standard: 275, optimized: 142 },
    { timepoint: '08:00', standard: 320, optimized: 165 },
    { timepoint: '12:00', standard: 350, optimized: 185 },
    { timepoint: '16:00', standard: 330, optimized: 170 },
    { timepoint: '20:00', standard: 310, optimized: 155 },
    { timepoint: '24:00', standard: 290, optimized: 148 },
  ];

  const memoryData = [
    { name: 'Standard KV-Cache', value: 5824, fill: '#ef4444' },
    { name: 'InferCheap (Optimized)', value: 2977, fill: '#16a34a' },
  ];

  const recentInferences: Inference[] = [
    {
      id: '1',
      model: 'llama-7b',
      qualityScore: 94,
      latency: 142,
      memoryUsage: 2.8,
      memoryStandard: 5.5,
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      tokensPerSec: 87.3,
    },
    {
      id: '2',
      model: 'mistral-7b',
      qualityScore: 91,
      latency: 138,
      memoryUsage: 2.6,
      memoryStandard: 5.2,
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      tokensPerSec: 92.1,
    },
    {
      id: '3',
      model: 'llama-13b',
      qualityScore: 96,
      latency: 165,
      memoryUsage: 4.1,
      memoryStandard: 8.3,
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      tokensPerSec: 78.5,
    },
    {
      id: '4',
      model: 'mistral-7b',
      qualityScore: 89,
      latency: 135,
      memoryUsage: 2.5,
      memoryStandard: 5.1,
      timestamp: new Date(Date.now() - 1000 * 60 * 28),
      tokensPerSec: 94.2,
    },
    {
      id: '5',
      model: 'llama-7b',
      qualityScore: 93,
      latency: 148,
      memoryUsage: 2.9,
      memoryStandard: 5.6,
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      tokensPerSec: 85.6,
    },
  ];

  const batchJobs: BatchJob[] = [
    {
      id: 'batch-1',
      status: 'completed',
      model: 'llama-7b',
      inferences: 512,
      memoryUsage: 4.2,
      completedAt: new Date(Date.now() - 1000 * 60 * 120),
      createdAt: new Date(Date.now() - 1000 * 60 * 180),
    },
    {
      id: 'batch-2',
      status: 'completed',
      model: 'mistral-7b',
      inferences: 768,
      memoryUsage: 5.1,
      completedAt: new Date(Date.now() - 1000 * 60 * 60),
      createdAt: new Date(Date.now() - 1000 * 60 * 90),
    },
    {
      id: 'batch-3',
      status: 'processing',
      model: 'llama-13b',
      inferences: 384,
      memoryUsage: 6.8,
      createdAt: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      id: 'batch-4',
      status: 'queued',
      model: 'llama-7b',
      inferences: 256,
      memoryUsage: 3.5,
      createdAt: new Date(Date.now() - 1000 * 60 * 5),
    },
  ];

  const modelConfigs: ModelConfig[] = [
    { model: 'llama-7b', qualityLevel: 85, speedLevel: 90, isEnabled: true },
    { model: 'mistral-7b', qualityLevel: 88, speedLevel: 88, isEnabled: true },
    { model: 'llama-13b', qualityLevel: 92, speedLevel: 85, isEnabled: true },
  ];

  const performanceMetrics: PerformanceMetrics = {
    tokensPerSec: 87.3,
    memoryUsageGB: 2.8,
    cacheHitRate: 67.2,
    averageLatencyMs: 145.2,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">Completed</span>;
      case 'processing':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">Processing</span>;
      case 'queued':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">Queued</span>;
      case 'failed':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your KV-cache-free inference performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-400 font-medium">Memory Savings</p>
              <FontAwesomeIcon icon={faMemory} className="text-primary-600 dark:text-primary-400 text-xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {stats.memorySavingsPercent}%
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stats.memorySaved.toFixed(1)} GB saved today
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-400 font-medium">Inferences Today</p>
              <FontAwesomeIcon icon={faFlask} className="text-accent-600 dark:text-accent-400 text-xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {stats.inferencesToday.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time inference count
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-400 font-medium">Avg Latency</p>
              <FontAwesomeIcon icon={faClock} className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {stats.averageLatency}ms
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Below target threshold
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-400 font-medium">Budget</p>
              <FontAwesomeIcon icon={faGauge} className="text-purple-600 dark:text-purple-400 text-xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              ${stats.budgetRemaining.toFixed(0)}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              of ${stats.budgetLimit.toFixed(0)} remaining
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Latency Comparison (24h)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="timepoint" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="standard"
                  stroke="#ef4444"
                  name="Standard KV-Cache"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="optimized"
                  stroke="#16a34a"
                  name="InferCheap Optimized"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Memory Usage
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={memoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {memoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} MB`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }}></div>
                <span className="text-gray-600 dark:text-gray-400">Standard: 5.8 GB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#16a34a' }}></div>
                <span className="text-gray-600 dark:text-gray-400">Optimized: 3.0 GB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Model Configuration
              </h3>
              <FontAwesomeIcon icon={faGear} className="text-gray-400" />
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Model
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="llama-7b">LLaMA 7B</option>
                  <option value="mistral-7b">Mistral 7B</option>
                  <option value="llama-13b">LLaMA 13B</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Quality Level
                  </label>
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    {qualityLevel}%
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={qualityLevel}
                  onChange={(e) => setQualityLevel(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Higher = Better quality, More memory
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Speed Level
                  </label>
                  <span className="text-sm font-bold text-accent-600 dark:text-accent-400">
                    {speedLevel}%
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={speedLevel}
                  onChange={(e) => setSpeedLevel(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-600"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Higher = Faster inference, Lower latency
                </p>
              </div>

              <button className="w-full px-4 py-2.5 rounded-lg bg-gradient-br text-white font-semibold hover:opacity-90">
                Apply Configuration
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Tokens/Second
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceMetrics.tokensPerSec}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Memory Usage
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceMetrics.memoryUsageGB}GB
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Cache Hit Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceMetrics.cacheHitRate}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Latency
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceMetrics.averageLatencyMs}ms
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Recent Inferences
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-300">Model</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-300">Quality</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-300">Latency</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-300">Memory</th>
                  </tr>
                </thead>
                <tbody>
                  {recentInferences.map((inference) => (
                    <tr key={inference.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="py-3 px-2 text-gray-900 dark:text-white font-medium">{inference.model}</td>
                      <td className="py-3 px-2">
                        <span className="text-green-600 dark:text-green-400">{inference.qualityScore}%</span>
                      </td>
                      <td className="py-3 px-2 text-gray-600 dark:text-gray-400">{inference.latency}ms</td>
                      <td className="py-3 px-2 text-gray-600 dark:text-gray-400">{inference.memoryUsage}GB</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Batch Processing Queue
            </h3>
            <div className="space-y-3">
              {batchJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {job.model}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {job.inferences} inferences
                      </p>
                    </div>
                    {getStatusBadge(job.status)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Memory: {job.memoryUsage}GB
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-br rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Upgrade to Pro</h3>
          <p className="opacity-90 mb-6">
            Unlock unlimited inferences, multi-model support, and advanced analytics
          </p>
          <Link
            to="/billing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary-600 font-semibold hover:bg-gray-50"
          >
            View Pricing
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  inferences: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface DashboardStats {
  memorySaved: number;
  memorySavingsPercent: number;
  inferencesToday: number;
  averageLatency: number;
  budgetRemaining: number;
  budgetLimit: number;
}

export interface Inference {
  id: string;
  model: string;
  qualityScore: number;
  latency: number;
  memoryUsage: number;
  memoryStandard: number;
  timestamp: Date;
  tokensPerSec: number;
}

export interface LatencyComparison {
  timepoint: string;
  standard: number;
  optimized: number;
}

export interface BatchJob {
  id: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  model: string;
  inferences: number;
  memoryUsage: number;
  completedAt?: Date;
  createdAt: Date;
}

export interface ModelConfig {
  model: string;
  qualityLevel: number;
  speedLevel: number;
  isEnabled: boolean;
}

export interface PerformanceMetrics {
  tokensPerSec: number;
  memoryUsageGB: number;
  cacheHitRate: number;
  averageLatencyMs: number;
}

export interface BillingInfo {
  currentPlan: 'free' | 'pro' | 'enterprise';
  usagePercent: number;
  inferencesUsed: number;
  inferencesLimit: number;
  renewalDate: Date;
  nextInvoiceAmount: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';

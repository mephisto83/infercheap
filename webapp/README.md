# InferCheap - KV-Cache-Free Inference SaaS

A complete Vite + React + TypeScript SaaS application for memory-efficient LLM inference.

## Features

- **Memory Optimization**: 40-60% KV-cache overhead reduction
- **Speed Control**: Configurable quality/speed tradeoffs
- **Multi-Model Support**: Works with various LLM architectures
- **Latency Monitoring**: Real-time performance tracking
- **Batch Processing**: Queue management and processing
- **Dashboard**: Comprehensive analytics and metrics
- **Billing Management**: Plan management and usage tracking

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Firebase project setup with authentication enabled

### Installation

```bash
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env.local`
2. Set up a Firebase project at https://firebase.google.com
3. Configure Firebase authentication (Email/Password and Google)
4. Add your Firebase credentials to `.env.local`

### Development

```bash
npm run dev
```

The app will open at http://localhost:5173

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/           # React components
│   ├── LandingPage.tsx
│   ├── PricingPage.tsx
│   ├── Dashboard.tsx
│   ├── Billing.tsx
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   └── Navigation.tsx
├── contexts/            # React contexts
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── types/              # TypeScript types
│   └── index.ts
├── firebase.ts         # Firebase configuration
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css          # Global styles
```

## Firebase Setup

1. Create a new Firebase project
2. Enable Authentication > Email/Password and Google
3. Create a Firestore database (optional for future features)
4. Set up a Storage bucket (optional)
5. Add your credentials to `.env.local`

## Available Routes

- `/` - Landing page
- `/pricing` - Pricing page
- `/signin` - Sign in
- `/signup` - Sign up
- `/dashboard` - User dashboard (protected)
- `/billing` - Billing management (protected)

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome
- **Charts**: Recharts
- **Routing**: React Router
- **Authentication**: Firebase Auth
- **HTTP Client**: Firebase

## Theme Support

The app includes light/dark/system theme support with persistent user preferences.

## Development Tips

- Use the theme context hook: `useTheme()`
- Use the auth context hook: `useAuth()`
- Type-safe components with TypeScript
- Responsive design with Tailwind CSS

## License

Proprietary

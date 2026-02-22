# Ortho-Test Project Overview

## Project Description
**Ortho-Test** is a specialized web application designed for orthopedic clinical testing and tracking. It provides a comprehensive dashboard for medical professionals to manage, filter, and track various clinical tests related to joint health (e.g., Shoulder, Knee, Hip, etc.).

The application features a modern, responsive UI with real-time filtering, search capabilities, and detailed test management including activity logs and a dashboard for joint-specific metrics.

## Key Features
- **Joint Dashboard**: Comprehensive view of orthopedic tests categorized by joint type.
- **Real-time Filtering**: Filter tests by category, status (Done/Pending), and search queries.
- **Test Management**: View, edit, and track status of various clinical tests.
- **Activity Logs**: Track changes and updates to tests over time.
- **Customizable UI**: Support for different card sizes (Small to XL) and modern animations using Framer Motion.
- **Database Integration**: Ability to import and sync data, likely backed by Cloudflare D1 or similar SQL databases.

## Technology Stack
- **Frontend**: React 19, Vite
- **Styling**: Vanilla CSS (Custom Properties, Semantic Classes)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend/API**: Cloudflare Workers (Functions)
- **Database**: SQL (schema managed in `schema.sql`)

## Project Layout
- `src/components/`: Modular UI components.
    - `Header.jsx`: Sticky top bar with search, notifications, and user profile.
    - `NavigationRail.jsx`: Left-side navigation for core modules.
    - `ActivityHub.jsx`: Right sidebar for activity logs and insights.
    - `MobileNav.jsx`: Bottom navigation bar for mobile views.
    - `FilterBar.jsx`: Advanced filtering (Joint, Status, Difficulty, Trending).
    - `TestCard.jsx`: Detailed clinical test display.
- `src/hooks/`: Custom React hooks for business logic.
    - `useClinicalTests.js`: Central orchestrator for tests and filters.
    - `useActivityLogs.js`: Manages real-time activity data.
- `functions/`: Cloudflare Workers (API routes).
- `sql/`: D1 database schema and migrations.
- `/sql`: SQL migration or seed files.
- `package.json`: Main project configuration and dependencies.
- `wrangler.toml`: Cloudflare Workers/Pages configuration.
- `vite.config.js`: Vite build system configuration.

### Source Directory (`/src`)
- `App.jsx`: Main entry point and layout component.
- `main.jsx`: React rendering initialization.
- `index.css`: Global styles and Tailwind imports.
- `components/`: Reusable UI components.
    - `JointDashboard/`: Components for the main joint metrics view.
    - `FilterBar/`: Filtering and search controls.
    - `TestCard.jsx`: Individual test display component.
    - `ModalsLayer.jsx`: Central hub for managing application modals.
- `hooks/`: Custom React hooks for state and data management (e.g., `useClinicalTests`).
- `constants/`: Global constants like `jointCategories`.
- `utils/`: Utility functions.

### Functions Directory (`/functions`)
- `api/`: Backend API endpoints for data fetching and persistence.

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

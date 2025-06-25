# CariKOL - Influencer Marketing Platform

## Overview

CariKOL is a comprehensive influencer marketing platform designed to connect brands with Key Opinion Leaders (KOLs) in Indonesia. The platform streamlines the process of finding, evaluating, and collaborating with influencers, making influencer marketing more accessible and efficient for brands while providing KOLs with tools to showcase their value professionally.

### Key Features

- **For Brands**: Dashboard to manage campaigns, explore KOLs, and track offers
- **For KOLs**: Professional rate card creation, campaign management, and performance tracking
- **Dual Interface**: Separate dashboards for brands and KOLs with tailored features
- **Comprehensive Profiles**: Detailed KOL profiles with audience demographics, engagement metrics, and content samples

## Live Demo

[CariKOL Platform](https://carikol.netlify.app/)

## Repository

[GitHub Repository](https://github.com/dianprsty/carikol-nextjs)

## Requirements

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm/bun)

### Dependencies

- Next.js 15.x
- React 19.x
- TailwindCSS
- Radix UI components
- Framer Motion
- Various UI libraries (see package.json for complete list)

## Setup and Installation

### Development Environment

1. Clone the repository
   ```bash
   git clone https://github.com/dianprsty/carikol-nextjs.git
   cd carikol-nextjs
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

### Production Environment

1. Build the application
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   # or
   bun build
   ```

2. Start the production server
   ```bash
   npm run start
   # or
   yarn start
   # or
   pnpm start
   # or
   bun start
   ```

### Deployment

The project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Set environment variables as needed

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js app router pages
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Utility functions
└── ...configuration files
```

## Contributors

- [Dian Prasetyo](https://github.com/dianprsty)
- [Muhammad Dzulfiqar](https://github.com/dzulfiqar03)
- [Dhafina](https://github.com/Dhafina)

## Screenshots

### Landing Page
![Landing Page](/public/images/screenshot/landing.png)

### Login Page
![Login Page](/public/images/screenshot/login.png)

### Registration Page
![Registration Page](/public/images/screenshot/register.png)

### KOL Dashboard
![KOL Dashboard](/public/images/screenshot/dashboard-kol.png)

### Brand Dashboard
![Brand Dashboard](/public/images/screenshot/dashboard-brand.png)

### Create Rate Card
![Create Rate Card](/public/images/screenshot/create-ratecard.png)

### Explore Rate Card
![Explore Rate Card](/public/images/screenshot/explore-ratecard.png)

### About Us
![About Us](/public/images/screenshot/about-us.png)

### Team
![Team](/public/images/screenshot/team.png)

### KOL Dictionary
![KOL Dictionary](/public/images/screenshot/kamus-kol.png)


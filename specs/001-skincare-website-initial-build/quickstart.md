# Quickstart: Glowvera Skincare Brand Website Development

This document provides a quick guide to setting up and running the Glowvera Skincare Brand Website development environment.

## 1. Prerequisites

-   Node.js (latest LTS version recommended)
-   npm or Yarn (package manager)
-   Git

## 2. Setup

1.  **Clone the repository:**
    ```bash
    git clone [repository_url]
    cd 001-skincare-website-initial-build
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure environment variables:**
    Create a `.env.local` file in the project root based on `.env.example` (if provided). This will include CMS API keys, URLs, etc.

## 3. Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 4. Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `.next` directory.

## 5. Running Production Build Locally

```bash
npm run start
# or
yarn start
```

This will serve the production build locally.

## 6. Tailwind CSS

Tailwind CSS is configured in `tailwind.config.ts`. You can customize your design system there.

## 7. App Router

The project uses Next.js App Router, with pages and layouts defined under the `src/app` directory.

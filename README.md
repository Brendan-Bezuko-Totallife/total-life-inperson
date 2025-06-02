# Total Life Insurance Procedure Calculator

A modern web application for managing medical procedures and calculating insurance coverage details. Built with React, TypeScript, and Tailwind CSS.

## Features

- Import and manage medical procedures (CPT codes)
- Add/remove procedures from a list
- Calculate the total cost of prodcurders on the front end
- Call an end point that will return calculate insurance coverage details:
  - Coinsurance
  - Copay
  - Deductible
  - Remaining balance
- Modern, responsive UI with Tailwind CSS

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite (for build tooling)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

- `/src/components` - React components
- `/src/types` - TypeScript type definitions
- `/src/data` - JSON data files
- `/src/api` - API integration
- `/src/styles` - Global styles and Tailwind configuration

# Total Life Insurance Procedure Calculator

A web application for managing medical procedures and calculating insurance coverage details. Built with React, TypeScript, and Tailwind CSS.

## Features to implement

- Import and manage medical procedures (CPT codes)
- Add/remove procedures from a list
- Calculate the total cost of procedures on the front end
- Call an endpoint that will return calculated insurance coverage details:
  - Coinsurance
  - Copay
  - Deductible
  - Remaining balance

The endpoint will expect a POST requests with the selected procuders as input i nthe body of the request.

- Modern, responsive UI with Tailwind CSS

The primary focus of this assignment is to implement robust core functionalities while maintaining an elegant user interface. Additional time should be allocated to enhancing the UI/UX design.

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

- `/src/types` - TypeScript type definitions
- `/src/data` - JSON data files

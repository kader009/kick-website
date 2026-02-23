# KICKS - Premium Sneaker & Apparel Store

KICKS is a modern, responsive e-commerce platform dedicated to high-end footwear, sneakers, and premium apparel. Built with a focus on premium aesthetics and seamless user experience, KICKS provides a sleek interface for browsing, selecting, and purchasing your favorite kicks and clothing items.

## Overview

The project features a fully responsive design, custom-built UI components, and a robust state management system. It includes detailed product pages, a centralized shopping cart, and a category-based navigation system, all optimized for both desktop and mobile devices.

## Tech Stack

- **Framework**: [Next.js 16.1+](https://nextjs.org/) (App Router)
- **Library**: [React 19.2+](https://react.dev/)
- **State Management**: [Redux Toolkit 2.11+](https://redux-toolkit.js.org/) & [React Redux 9.2+](https://react-redux.js.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript 5.0+](https://www.typescriptlang.org/)
- **Icons & Graphics**: Custom SVGs & [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast 2.6+](https://react-hot-toast.com/)

## Setup Instructions

Follow these steps to get the project running locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kader009/kick-website
   cd kick-website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

Access the application at `http://localhost:3000`.

## Live URL

The project is deployed and accessible at:
[https://kick-website-pi.vercel.app/](https://kick-website-pi.vercel.app/)

## Notes

- **Dynamic Navigation**: In sections like Categories and "You May Also Like", the Next/Prev buttons are functional and allow users to scroll through the data. While the implementation follows the Figma file, some visual adjustments were made to ensure a smooth transition between items.
- **Loading States**: To improve user experience during data fetching, a combination of loaders and skeleton screens has been implemented, providing a perceived performance boost while content is loading.
- **Cart Optimization**: The shopping cart, which was initially optional, has been fully implemented. On small devices, the layout and image handling differ slightly from the original Figma design to ensure the best possible visibility and responsiveness.
- **Design Decisions**: During development, some colors and text styles in the provided Figma file appeared misleading. In these cases, deliberate choices were made to prioritize visual harmony and a premium user experience.
- **Responsive Design**: Special attention was paid to mobile views, including custom grid layouts and specialized cart item displays.
- **Data Handling**: Due to some limitations or gaps in the provided API, dummy text and placeholder content were used in certain sections to ensure the UI remains complete and visually consistent with the intended design.

# Next.js State Management Lab

This is a [Next.js](https://nextjs.org) project that demonstrates state management using React Context API.

## Project Structure

```
lab7-managing-state/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Main application page
│   │   └── layout.tsx       # Root layout with client-side hydration handling
│   ├── components/
│   │   ├── Counter.tsx      # Main counter component
│   │   ├── DisplayCount.tsx # Component to display the current count
│   │   ├── Controls.tsx     # Component with increment/decrement buttons
│   │   └── CounterProvider.tsx # Context provider for state management
│   └── styles/
│       └── globals.css      # Global styles including counter components
├── package.json
└── README.md
```

## About the Project

This project implements a simple counter application to demonstrate state management in Next.js using React Context API:

- [`CounterProvider.tsx`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/CounterProvider.tsx) - Creates the context and provides state management
- [`Counter.tsx`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/Counter.tsx) - Main component that wraps the counter UI with the provider
- [`DisplayCount.tsx`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/DisplayCount.tsx) - Displays the current count value
- [`Controls.tsx`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/Controls.tsx) - Provides buttons to increment, decrement, and reset the counter

## Component Details

### CounterProvider

The [`CounterProvider`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/CounterProvider.tsx) implements React's Context API to manage state globally:
- Uses `useState` to track the count value
- Provides functions for incrementing and decrementing the counter
- Makes state accessible to child components through context

### Counter Component

The [`Counter`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/Counter.tsx) component serves as the main UI container:
- Composes the DisplayCount and Controls components
- Handles hydration safely with mounted state check
- Provides a consistent UI wrapper with proper styling

### DisplayCount Component

The [`DisplayCount`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/DisplayCount.tsx) component:
- Consumes the counter context to access the current count
- Renders the count value in a visually appealing format
- Includes loading state for smooth hydration

### Controls Component

The [`Controls`](https://github.com/hjoseph777/lab7-managing-state/blob/main/src/components/Controls.tsx) component:
- Provides buttons to increment, decrement and reset the counter
- Consumes context to access state manipulation functions
- Features styled buttons with hover effects

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

## Troubleshooting

If you encounter any issues with the application, please try the following:

- Test in incognito mode or disable browser extensions like Grammarly/LanguageTool to confirm they are not causing the issue.

## Troubleshooting Hydration Errors

If you encounter hydration errors, please try the following:

- Test in incognito mode or disable browser extensions like Grammarly/LanguageTool to confirm they are not causing the mismatch.

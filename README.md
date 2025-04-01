# Next.js State Management Lab

This is a [Next.js lab7 managing state  click to open project](https://hjoseph777.github.io/lab7-managing-state/) project that demonstrates state management using React Context API.

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
│   │   ├── Controls.tsx     # Component with  reset /increment/decrement buttons
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





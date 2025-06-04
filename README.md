# Epic Chat (Next.js Version)

This is the Next.js version of Epic Chat, an AI-powered chat application with UI enhancements. This project has been migrated from an earlier vanilla JavaScript implementation to align with modern web development practices and a Next.js-based deployment strategy.

## Current Status

*   The application UI has been rebuilt in Next.js using the App Router and React components.
*   Core chat logic (sending messages, displaying chat history) is implemented.
*   Services for AI responses, database interaction, and speech recognition are currently **mocked client-side** for local development.
*   UI enhancement modules (theming, code highlighting, etc.) have been structurally integrated, with some basic functionality (like theme toggle button) in place. Further work is needed to fully implement these features in a React-idiomatic way.
*   The application is styled with Tailwind CSS, and custom theming capabilities from the original project have been carried over.

## Project Structure (within `epic-chat-nextjs` directory)

*   `epic-chat-nextjs/`: The root directory for the Next.js application.
    *   `src/app/`: Main application routes (e.g., `page.tsx` for the chat interface).
    *   `src/services/`: Contains client-side service mocks (e.g., `aiService.ts`, `dbService.ts`).
    *   `src/enhancements/`: Contains modules for UI enhancements (e.g., `themeService.ts`).
    *   `src/styles/`: Global styles and imported CSS like `theme-styles.css`.
    *   `public/`: Static assets.
    *   `.env.local`: For local environment variables (see "Environment Configuration" below).
    *   `package.json`: Defines project dependencies and scripts for the Next.js app.
    *   `next.config.js`: Next.js configuration.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18.x or later recommended for Next.js)
*   npm (Node Package Manager)

### Setup and Running Locally

1.  **Navigate to the Next.js project directory:**
    ```bash
    cd epic-chat-nextjs
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration (Optional - for future use):**
    *   Create a `.env.local` file in the `epic-chat-nextjs` directory by copying from `.env.example` (if one is provided in the future) or by creating it manually.
    *   A basic `epic-chat-nextjs/.env.local` has been created with placeholders:
        ```
        NEXT_PUBLIC_APP_URL=http://localhost:3000
        NEXT_PUBLIC_API_URL=http://localhost:3001/api/mock
        ```
    *   Next.js automatically loads variables from `.env.local` during development.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Next.js development server, typically on `http://localhost:3000`. Open this URL in your browser to see the application.

### Building for Production

(Refer to official Next.js documentation and the user-provided deployment strategy for actual production deployment. This is a general guide.)

1.  **Navigate to the Next.js project directory:**
    ```bash
    cd epic-chat-nextjs
    ```

2.  **Build the application:**
    ```bash
    npm run build
    ```
    This creates an optimized production build in the `.next` folder within `epic-chat-nextjs`.

3.  **Start the production server (locally):**
    ```bash
    npm start
    ```

## Migrating from Vanilla JS Version

The original vanilla JavaScript version of this chat application is still present in the repository's history but is superseded by this Next.js implementation. Key assets like service logic and enhancement ideas have been migrated and adapted for the Next.js environment. The root-level `package.json` and other files from the vanilla JS version may still exist but are not used by this Next.js application.

---

*This README provides guidance for the `epic-chat-nextjs` application.*

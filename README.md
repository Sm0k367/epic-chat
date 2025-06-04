# Epic Chat

Epic Chat is a full-featured, AI-Engineered chatbot interface with a range of client-side enhancements. This project provides the frontend for the chat application.

## Features

*   Interactive chat interface.
*   **UI Enhancements (from Epic Tech AI Enhancements):**
    *   🌓 **Theme Switcher:** Light/Dark mode with preference saving.
    *   🖥️ **Code Highlighting:** Syntax highlighting for code blocks with copy-to-clipboard.
    *   💬 **Message Enhancements:** Typing indicators, timestamps, animations.
    *   💾 **Chat Export:** Export chat history (Text, HTML, JSON, Markdown).
    *   ⚙️ **User Preferences:** Customizable settings like font size.
*   Speech-to-text input.
*   Local chat history persistence (using browser's localStorage).

## Project Structure

*   `chat.html`: The main HTML file for running the chat application.
*   `src/`: Contains the source files for the application.
    *   `src/js/`: JavaScript files, including core logic (`main.js`), services (`ai-service.js`, `db-service.js`, etc.), and UI enhancements.
    *   `src/css/`: CSS files, primarily for theming (`theme-styles.css`).
*   `dist/`: When you run the build script, optimized (minified) versions of JS and CSS files will be placed here. This directory is suitable for deployment.
*   `package.json`: Defines project dependencies, scripts, and metadata.
*   Other HTML files (`8.html` - `15.html`): These appear to be informational pages related to a broader "Unified Smoke Stream Platform" and are not part of the runnable chat application itself.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm, the Node Package Manager)

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    Open your terminal in the project root directory and run:
    ```bash
    npm install
    ```
    This will install the development dependencies, including `http-server` for local serving, `uglify-js` for minifying JavaScript, and `clean-css-cli` for minifying CSS.

### Running the Application Locally

To start the application locally, run the following command from the project root:

```bash
npm start
```
This will start a local web server and should automatically open `chat.html` in your default web browser. You can then interact with the chat interface.

### Building for Deployment

To create optimized (minified) versions of the JavaScript and CSS files for deployment, run:

```bash
npm run build
```
This will populate the `dist/js` and `dist/css` directories with the built files. The `minify` script (`npm run minify`) performs a similar function but is more specific to the minification process itself. The `build` script is generally what you'd use.

## SaaS/WaaS Notes

*   **Current State:** The application runs locally with mocked backend services.
    *   **AI Service (`src/js/ai-service.js`):** Simulates responses from an AI. For a production SaaS application, this would need to connect to a real AI backend.
    *   **Database Service (`src/js/db-service.js`):** Uses browser `localStorage` to save chat history. For SaaS, this would need to be replaced with a backend database and corresponding API calls.
*   **WaaS (White-label as a Service) Capability:** The application includes a theme service (`src/js/theme-service.js` and `src/css/theme-styles.css`) allowing for light/dark mode. This is a foundational element for WaaS. Further white-labeling could involve making more branding elements (logos, custom color schemes, feature toggles) configurable.

## Original Enhancements Demo

The original `README (2).md` for "Epic Tech AI Enhancements" mentioned a live demo at `https://epicstart2.pages.dev/`. This demo showcases the UI enhancement features. Note that the version running there might differ from the current state of this repository.

// epic-chat-nextjs/src/enhancements/enhancements.ts
import ThemeService from './themeService';
import CodeHighlightService from './codeHighlightService';
import MessageEnhancementService from './messageEnhancementService';
import ExportService from './exportService';
import PreferencesService from './preferencesService';

console.log("enhancements.ts: Loading Epic Tech AI enhancements...");

export function initializeAllEnhancements(): void {
  console.log("enhancements.ts: Initializing all enhancements...");
  // Initialize services in a specific order if necessary
  ThemeService.init();
  CodeHighlightService.init();
  MessageEnhancementService.init();
  ExportService.init();
  PreferencesService.init();
  console.log("enhancements.ts: All enhancement services initialized (or placeholders called).");
}

// Note: The dynamic CSS loading part from original enhancements.js is removed
// as theme-styles.css is now imported globally in globals.css

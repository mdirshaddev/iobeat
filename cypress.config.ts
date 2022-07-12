import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'o3nt18',
  screenshotOnRunFailure: true,
  scrollBehavior: 'bottom',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});

import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'o3nt18',
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  scrollBehavior: 'bottom',
  video: true,
  videosFolder: 'cypress/videos',
  videoCompression: 32,
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});

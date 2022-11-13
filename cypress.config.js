const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 5000,
  requestTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: '68buye',
  chromeWebSecurity: false,
  retries: 0,
  env: { baseUrl: 'https://example.cypress.io/' },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      '**/1-getting-started/*.js',
      '**/2-advanced-examples/*.js'
    ]
  },
});
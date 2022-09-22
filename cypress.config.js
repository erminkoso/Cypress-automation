const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 100000,
  requestTimeout: 100000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: '68buye',
  chromeWebSecurity: false,
  retries: 1,
  env: { baseUrl: 'https://www.skidrowreloaded.com/' },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const logToOutput = require('cypress-log-to-output').install;
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com/#/',
    env: {
      apiUrl: 'https://www.advantageonlineshopping.com/',
    },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      mochawesome(on);  // Registro do plugin
      logToOutput(on); // Adicionado logs no terminal
      installLogsPrinter(on);
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true
    }
  },
});

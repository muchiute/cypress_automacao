const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const logToOutput = require('cypress-log-to-output').install;
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com/#/',
    env: {
      apiUrl: 'https://www.advantageonlineshopping.com/',
    },
    setupNodeEvents(on, config) {
      // Cria o diretório de logs, se não existir
      const logDir = path.join(__dirname, 'cypress/logs');
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
        console.log("Diretório 'cypress/logs' criado com sucesso.");
      }

      // Preprocessor para Cucumber
      on('file:preprocessor', cucumber());

      // Plugin para Mochawesome
      mochawesome(on);

      // Plugin para log no terminal
      logToOutput(on);

      // Configuração do cypress-terminal-report para salvar os logs corretamente
      installLogsPrinter(on, {
        printLogsToFile: 'always',  // Salva os logs sempre em arquivo
        outputRoot: 'cypress/logs', // Diretório para os logs
        printLogsToConsole: 'always' // Imprime os logs no console
      });

      return config;
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",

    // Configuração do reporter
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
  },
});

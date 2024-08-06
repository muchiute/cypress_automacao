import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('o usuário está na página inicial', () => {
  cy.visit('https://www.advantageonlineshopping.com/#/')
});

When('o usuário busca por um produto', () => {
  cy.get('#laptopsImg').click()
});

Then('o produto deve ser exibido nos resultados da busca', () => {
  cy.contains('HP Chromebook 14 G1').should('be.visible')
});

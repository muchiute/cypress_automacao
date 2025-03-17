import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('o usuário adicionou um produto ao carrinho', () => {
  cy.visit('/');
  cy.get('#laptopsImg').click()  // Navega para a seção de laptops
  cy.contains('HP Chromebook 14 G1').click()  // Clica no produto específico
  cy.get('.fixedBtn > .roboto-medium').click()  // Clica no botão de compra
});

When('o usuário vai para a tela de pagamento', () => {
    // Verifica se o produto está no carrinho
  cy.get('#shoppingCartLink > .cart').should('be.visible')
});

Then('o produto deve estar listado na tela de pagamento', () => {
  cy.get('#shoppingCartLink').click().wait(1000)  // Navega para o carrinho
  
  // Verifica se o produto está no carrinho
  cy.contains('HP CHROMEBOOK 14 G1(ENERGY STAR)').should('be.visible')
});

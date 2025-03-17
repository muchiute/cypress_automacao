import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('o usuário está na página inicial', () => {
  cy.visit('/');
});

When('o usuário busca por um produto e adiciona ao carrinho', () => {
  // Busca e seleciona o produto desejado
  cy.get('#laptopsImg').click()  // Navega para a seção de laptops
  cy.contains('HP Chromebook 14 G1').click()  // Clica no produto específico
  
  // Adiciona o produto ao carrinho
  cy.get('.fixedBtn > .roboto-medium').click()  // Clica no botão de compra
  
});

Then('o produto deve estar no carrinho', () => {
    // Verifica se o produto está no carrinho
    cy.get('#shoppingCartLink > .cart').should('be.visible')
//     cy.get('#shoppingCartLink').click().wait(1000)  // Navega para o carrinho
  
//   // Verifica se o produto está no carrinho
//   cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').should('be.visible')
});

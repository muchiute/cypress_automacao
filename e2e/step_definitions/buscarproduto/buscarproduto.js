import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Definindo o passo para verificar se há um produto exibido nos resultados da busca
Given("Eu estou na página inicial do site Demo Blaze", () => {
  cy.visit('https://www.demoblaze.com/')
})
// Definindo o passo para clicar no produto e visualizar os detalhes
When("Eu busco por um produto específico usando a barra de categorias", () => {
    cy.contains('CATEGORIES').should("be.visible").wait(2000)
    cy.contains('Phones').should("be.visible").click()  
})
// Definindo o passo para adicionar o produto ao carrinho
Then("A lista de resultados deve mostrar produtos relacionados à busca", () => {
  cy.get('.card-title').contains('HTC One M9')
})
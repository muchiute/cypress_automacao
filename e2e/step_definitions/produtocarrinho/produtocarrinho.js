import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('Eu tenho um produto exibido nos resultados da busca', () => {
    // Visita a página principal
    cy.visit('https://www.demoblaze.com/')  
    // Navegar para a categoria de Phones
    cy.contains('CATEGORIES').should("be.visible")
    cy.contains('Phones').should("be.visible").click()
    // Verificar se o produto HTC está na lista
    cy.contains('.card-title', 'HTC One M9').should('be.visible')
})

When('Eu clico no produto para visualizar detalhes', () => {
    // Clicar no produto HTC
    cy.contains('.card-title', 'HTC One M9').click()
})

And('Eu clico no botão Add to cart para adicionar o produto ao carrinho', () => {
    // Verificar se a página do produto contém o botão "Add to cart"
    cy.contains('Add to cart').should('be.visible')
    cy.get('.col-sm-12 > .btn').contains('Add to cart').click()
})

Then('O produto deve ser adicionado ao carrinho', () => {
    // Esperar pela resposta da requisição de adicionar ao carrinho
    cy.intercept('POST', 'https://api.demoblaze.com/addtocart').as('addToCart')
    cy.wait('@addToCart').its('response.statusCode').should('eq', 200)

})

And('Verifico o produto dentro do carrinho', () => {
    // Verificar se o produto foi adicionado ao carrinho
    cy.contains('Cart').click()
    cy.contains('HTC One M9').should('be.visible')
})

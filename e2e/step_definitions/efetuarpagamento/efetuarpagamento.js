import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('Eu adicionei um produto ao carrinho', () => {
    // Visita a página principal
    cy.visit('https://www.demoblaze.com/')   
    // Navegar para a categoria de Phones
    cy.contains('CATEGORIES').should("be.visible")
    cy.contains('Phones').should("be.visible").click()
    // Clicar no produto HTC
    cy.contains('.card-title', 'HTC One M9').click()
    // Verificar se a página do produto contém o botão "Add to cart"
    cy.contains('Add to cart').should('be.visible')
    // Clicar no botão "Add to cart"
    cy.get('.col-sm-12 > .btn').contains('Add to cart').click()
    // Esperar pela resposta da requisição de adicionar ao carrinho
    cy.intercept('POST', 'https://api.demoblaze.com/addtocart').as('addToCart')
    cy.wait('@addToCart').its('response.statusCode').should('eq', 200)
})

When('Eu navego para a tela de pagamento', () => {
    // Verificar se o produto foi adicionado ao carrinho e ir para a tela de pagamento
    cy.contains('Cart').click().wait(1000)
    cy.get('.col-lg-1 > .btn').contains('Place Order').click()
})

Then('preencho todas as informações para pagamento', () => {
    // Verificar se o produto está na lista de produtos do carrinho
    cy.contains('Name:')
    cy.get('#name').wait(1000).type("lucas Teste Testando", { log: false });
    cy.get('#country').wait(1000).type("Brazil");
    cy.get('#city').wait(1000).type("São Paulo");
    cy.get('#card').wait(1000).type("1234567890000000");
    cy.get('#month').wait(1000).type("01/23");
    cy.get('#year').wait(1000).type("1234");
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').wait(1000).click()
    })

And('valido se a compra foi realizada com sucesso', () => {
    //Valida que a compra foi realizada
    cy.get('.sweet-alert').should('be.visible');
})
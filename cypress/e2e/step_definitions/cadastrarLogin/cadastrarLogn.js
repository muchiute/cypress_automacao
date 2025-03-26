import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('o usuário está na página inicial', () => {
  cy.visit('/' + '/register')
  cy.wait(1000)
  
});

When('preencher os dados', () => {
  cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer').click().type('Lucas')
  cy.get('[sec-name="userEmail"] > .inputContainer').click().type('admin@teste.com.br')
  cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer').click().type('a12345678*A@')
  cy.get('[a-hint="Confirm password"] > .inputContainer').click().type('a12345678*A@')
  cy.get('[sec-name="userFirstName"] > .inputContainer').click().type('Lucas')
  cy.get('[sec-name="userLastName"] > .inputContainer').click().type('Tester')
  cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer').click().type('11123456789')
  cy.get('[sec-name="userCountry"] > .inputContainer > .ng-valid').select('Brazil')
  cy.get('[sec-name="userCity"] > .inputContainer').click().type('São Paulo')
  cy.get('[sec-name="userAdress"] > .inputContainer').click().type('Rua Teste')
  cy.get('[sec-name="userState"] > .inputContainer').click().type('São Paulo')
  cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer').click().type('01234-012')
  cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click()
});

Then('será realizado a criação da conta', () => {
  cy.get('#register_btn').click()

});

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const apiUrl = 'https://fakestoreapi.com/products'; // Endpoint para buscar produtos
const productId = 1; // ID do produto que você deseja buscar

Given('Eu quero buscar um produto pelo ID', () => {
  // Aqui, você pode preparar qualquer coisa necessária para a busca, se necessário
  // Por exemplo, armazenar o ID do produto em uma variável global ou algo similar
});

When('Eu busco o produto com ID {int}', (id) => {
  // Realiza a requisição GET para buscar o produto específico pelo ID
  cy.request({
    method: 'GET',
    url: `${apiUrl}/${id}`, // URL para buscar o produto específico pelo ID
    failOnStatusCode: false, // Não falhar automaticamente para códigos de status não 200
  }).as('productRequest');
});

Then('O produto deve ser retornado com o ID correto e com as propriedades esperadas', () => {
  cy.get('@productRequest').then((response) => {
    // Log da resposta para depuração
    cy.log('Response Status:', response.status);
    cy.log('Response Headers:', response.headers);
    cy.log('Response Body:', response.body);

    // Validar o status code da resposta
    expect(response.status).to.eq(200);

    // Validar que a resposta contém os dados do produto com o ID correto
    expect(response.body).to.have.property('id', productId);
    expect(response.body).to.have.property('title').that.is.a('string');
    expect(response.body).to.have.property('price').that.is.a('number');
    expect(response.body).to.have.property('description').that.is.a('string');
    expect(response.body).to.have.property('image').that.is.a('string');
    expect(response.body).to.have.property('category').that.is.a('string');
  });
});

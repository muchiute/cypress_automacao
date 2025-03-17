import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const apiBaseUrl = Cypress.env('apiUrl'); // Obtém o apiUrl do ambiente
const apiUrl = `${apiBaseUrl}catalog/api/v1/product/image/703273701/45?product_id=2`;
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo3MDMyNzM3MDEsInN1YiI6ImV1c2VsZm81MSIsInJvbGUiOiJVU0VSIn0.gbdRSXHpOoelByNe-rHEwe7hrYA2e_o96vKVbYS_uDw';
const productId = 2; // ID do produto

Given('Eu tenho uma imagem de produto para atualizar', () => {
  // Carregar o arquivo de imagem
  cy.fixture('example.jpg', 'binary').then((fileContent) => {
    const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
    const formData = new FormData();
    formData.append('file', blob, 'example.jpg');
    formData.append('product_id', productId);

    cy.wrap(formData).as('formData');
  });
});

When('Eu atualizo a imagem do produto', () => {
  cy.get('@formData').then((formData) => {
    // Usar o comando customizado para enviar o arquivo
    cy.uploadFile(apiUrl, formData, token).then((response) => {
      const jsonResponse = JSON.parse(response);
      
      // Log da resposta para depuração
      cy.log('Update Response Status:', response.status);
      cy.log('Update Response Headers:', response.headers);
      cy.log('Update Response Body:', jsonResponse);

      // Validar o corpo da resposta
      expect(jsonResponse).to.have.property('success', true);
      expect(jsonResponse).to.have.property('imageId');
      expect(jsonResponse).to.have.property('imageColor');

      // Guardar o ID da nova imagem para verificação posterior, se necessário
      cy.wrap(jsonResponse.imageId).as('newImageId');
    });
  });
});

Then('A imagem do produto deve estar atualizada com sucesso', () => {
  cy.get('@newImageId').then((newImageId) => {
    cy.log('Imagem atualizada com sucesso, ID da nova imagem:', newImageId);
  });
});

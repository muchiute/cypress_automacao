import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const apiUrl = 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search';
const categoryName = 'mice'; // Nome da categoria a ser buscada

Given('Eu quero buscar produtos pela categoria', () => {
  // Configuração para a busca de produtos pela categoria
  // Neste caso, a configuração não requer alterações adicionais
});

When('Eu busco produtos com o nome da categoria', () => {
  // Realiza a requisição GET para buscar produtos com o nome da categoria especificado
  cy.request({
    method: 'GET',
    url: `${apiUrl}?name=${categoryName}&quantityPerEachCategory=-1`,
    headers: {
      'accept': '*/*'
    },
    failOnStatusCode: false, // Não falhar automaticamente para códigos de status não 200
  }).as('productRequest');
});

Then('A lista deve conter pelo menos uma categoria com o nome da busca e o status code deve ser 200', () => {
  cy.get('@productRequest').then((response) => {
    // Validar o status code da resposta
    expect(response.status).to.eq(200);

    // Validar que a resposta é um array
    expect(response.body).to.be.an('array');

    // Adicionar log da resposta para diagnóstico
    cy.log('Response Body:', JSON.stringify(response.body));

    // Verificar se a lista de categorias contém pelo menos uma categoria com o nome especificado
    let foundCategory = false;

    response.body.forEach(category => {
      // Adicionar log para cada categoria verificada
      cy.log('Checking category:', category.categoryName);

      if (category.categoryName.toLowerCase().includes(categoryName.toLowerCase())) {
        foundCategory = true;
        return; // Encerra a iteração sobre categorias se uma correspondente for encontrada
      }
    });

    // Confirmar que pelo menos uma categoria corresponde ao nome da busca
    expect(foundCategory).to.be.true;
  });
});

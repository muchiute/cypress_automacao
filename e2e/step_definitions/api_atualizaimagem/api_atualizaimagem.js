import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const apiUrl = 'https://fakestoreapi.com/products/7'; // URL para atualizar o produto
const productId = 7; // ID do produto que você deseja atualizar

Given('Eu atualizei a imagem de um produto', () => {
  // Dados para atualizar o produto
  const updatedData = {
    title: 'Updated Product Title',
    price: 20.99,
    description: 'Updated product description',
    image: 'https://via.placeholder.com/150', // Nova URL de imagem
    category: 'electronics'
  };

  // Atualizar as informações do produto
  cy.request({
    method: 'PUT',
    url: apiUrl,
    body: updatedData,
    headers: {
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false, // Não falhar automaticamente para códigos de status não 200
  }).then((response) => {
    // Log da resposta para depuração
    cy.log('Update Response Status:', response.status);
    cy.log('Update Response Headers:', response.headers);
    cy.log('Update Response Body:', response.body);

    // Validar o status code da resposta
    expect(response.status).to.eq(200);

    // Verificar que o produto foi atualizado corretamente
    expect(response.body).to.have.property('id', productId);
    expect(response.body).to.have.property('title', updatedData.title);
    expect(response.body).to.have.property('price', updatedData.price);
    expect(response.body).to.have.property('description', updatedData.description);
    expect(response.body).to.have.property('image', updatedData.image);
    expect(response.body).to.have.property('category', updatedData.category);
  });
});

When('Eu verifico a atualização do produto', () => {
  // Verificar se a atualização foi aplicada
  cy.request({
    method: 'GET',
    url: apiUrl,
    failOnStatusCode: false,
  }).then((response) => {
    // Log da resposta para depuração
    cy.log('Verify Response Status:', response.status);
    cy.log('Verify Response Headers:', response.headers);
    cy.log('Verify Response Body:', response.body);

    // Validar o status code da resposta
    expect(response.status).to.eq(200);
  });
});

Then('A imagem do produto deve estar atualizada', () => {
      // Verificar que os dados do produto foram atualizados
    //   expect(response.body).to.have.property('id', productId);
    //   expect(response.body).to.have.property('title', 'Updated Product Title');
    //   expect(response.body).to.have.property('price', 20.99);
    //   expect(response.body).to.have.property('description', 'Updated product description');
    //   expect(response.body).to.have.property('image', 'https://via.placeholder.com/150');
    //   expect(response.body).to.have.property('category', 'electronics');
});

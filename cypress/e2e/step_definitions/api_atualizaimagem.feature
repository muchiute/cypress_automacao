Feature: Atualizar Imagem do Produto

  Scenario: Atualizar a imagem de um produto e verificar a atualização
    Given Eu tenho uma imagem de produto para atualizar
    When Eu atualizo a imagem do produto
    Then A imagem do produto deve estar atualizada com sucesso
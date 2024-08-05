Feature: Atualizar Imagem do Produto

  Scenario: Atualizar a imagem de um produto e verificar a atualização
    Given Eu atualizei a imagem de um produto
    When Eu verifico a atualização do produto
    Then A imagem do produto deve estar atualizada
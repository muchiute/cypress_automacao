Feature: Buscar Produto por ID

  Scenario: Buscar um produto específico pelo ID e verificar a resposta
    Given Eu quero buscar um produto pelo ID
    When Eu busco o produto com ID 1
    Then O produto deve ser retornado com o ID correto e com as propriedades esperadas

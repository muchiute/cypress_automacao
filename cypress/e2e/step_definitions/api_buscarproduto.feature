Feature: Buscar Produto por ID

  Scenario: Buscar um produto específico pelo ID e verificar a resposta
    Given Eu quero buscar produtos pela categoria
    When Eu busco produtos com o nome da categoria
    Then A lista deve conter pelo menos uma categoria com o nome da busca e o status code deve ser 200

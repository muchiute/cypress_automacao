Feature: Incluir Produto no Carrinho

  Scenario: Adicionar um produto ao carrinho
    Given Eu tenho um produto exibido nos resultados da busca
    When Eu clico no produto para visualizar detalhes
    And Eu clico no botão Add to cart para adicionar o produto ao carrinho
    Then O produto deve ser adicionado ao carrinho
    And Verifico o produto dentro do carrinho

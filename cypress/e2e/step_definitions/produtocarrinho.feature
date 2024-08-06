Feature: Adicionar produtos ao carrinho

  Scenario: Incluir produto no carrinho
    Given o usuário está na página inicial
    When o usuário busca por um produto e adiciona ao carrinho
    Then o produto deve estar no carrinho

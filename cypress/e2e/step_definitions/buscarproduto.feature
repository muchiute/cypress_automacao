Feature: Buscar um Produto

Scenario: Realizar a busca de um produto
Given o usuário está na página inicial
When o usuário busca por um produto
Then o produto deve ser exibido nos resultados da busca

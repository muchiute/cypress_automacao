Feature: Efetuar Pagamento dos Produtos no Carrinho

  Scenario: Verificar produtos no carrinho na tela de pagamento
    Given Eu adicionei um produto ao carrinho
    When Eu navego para a tela de pagamento
    Then preencho todas as informações para pagamento
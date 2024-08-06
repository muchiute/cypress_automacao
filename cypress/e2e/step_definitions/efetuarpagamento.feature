Feature: Validar produtos no carrinho

  Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Given o usuário adicionou um produto ao carrinho
    When o usuário vai para a tela de pagamento
    Then o produto deve estar listado na tela de pagamento
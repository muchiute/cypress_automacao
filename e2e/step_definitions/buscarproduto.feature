Feature: Buscar um Produto na Demo Blaze

Scenario: Realizar a busca de um produto
Given Eu estou na página inicial do site Demo Blaze
When Eu busco por um produto específico usando a barra de categorias
Then A lista de resultados deve mostrar produtos relacionados à busca

# Critérios de Aceitação — Almacén DtMF

## Vitrine e Filtros (`index.html`)

Dado que o visitante acessa a vitrine da Almacén DtMF
Quando digita um termo na busca, seleciona uma regra física ou altera a ordenação
Então a grade de produtos deve ser atualizada em tempo real com a contagem acessível de resultados.

Dado que a combinação de filtros não retorna nenhum produto
Quando a vitrine é atualizada
Então deve exibir uma mensagem informativa e um botão para limpar os filtros rapidamente.

---

## Ficha Técnica do Produto (`produto.html`)

Dado que o visitante acessa `produto.html?id={id}` com um identificador válido
Quando a página é carregada
Então deve exibir a ilustração, a regra atendida, as especificações e o preço do artefato correspondente.

Dado que o visitante informa uma quantidade inteira entre 1 e 10
Quando clicar em "Continuar para o checkout"
Então o ID do produto e a quantidade devem ser salvos no `sessionStorage` e o navegador deve redirecionar para `checkout.html`.

Dado que o visitante acessa `produto.html?id=999` (ID inexistente)
Quando a página é carregada
Então deve exibir uma mensagem amigável de artefato não encontrado com link para retornar à vitrine.

---

## Checkout e Consulta ViaCEP (`checkout.html`)

Dado que o comprador está na tela de checkout com um produto selecionado
Quando altera a quantidade no resumo do pedido
Então o subtotal e o valor total (subtotal + frete) devem ser recalculados automaticamente.

Dado que o comprador informa um CEP válido com 8 dígitos
Quando clicar em "Buscar CEP"
Então o sistema deve consultar a API ViaCEP e preencher automaticamente logradouro, bairro, cidade e UF.

Dado que o comprador informa um CEP inexistente ou está sem conexão com a internet
Quando clicar em "Buscar CEP"
Então deve exibir um aviso claro sem quebrar a página, permitindo o preenchimento manual do endereço.

Dado que o comprador preenche todos os campos obrigatórios e aceita o termo de simulação
Quando clicar em "Concluir pedido simulado"
Então o resumo final do pedido deve ser salvo no `sessionStorage` e o navegador deve redirecionar para `sucesso.html`.

---

## Confirmação do Pedido (`sucesso.html`)

Dado que um pedido foi concluído na sessão atual
Quando o comprador acessa `sucesso.html`
Então deve visualizar o código único do pedido (`DTMF-XXXXXX`), o artefato, a quantidade, o destino e o total simulado.

Dado que nenhum pedido foi concluído na sessão atual
Quando alguém tenta acessar `sucesso.html` diretamente
Então o comprovante deve ser bloqueado e uma orientação com botão para a vitrine deve ser exibida.
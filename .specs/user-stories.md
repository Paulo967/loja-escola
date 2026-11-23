# Histórias de Usuário — Almacén DtMF

## US01 — Explorar e Filtrar o Catálogo Impossível
**Como** visitante da loja  
**Quero** visualizar os artefatos catalogados, buscar por nome, filtrar pela regra física atendida e ordenar por preço ou título  
**Para** encontrar rapidamente o objeto impossível que mais combina comigo.

**Critérios de aceite:**
- Exibir os 6 artefatos da **Almacén DtMF** com ilustração SVG, categoria, selo da regra criativa e preço em BRL.
- Atualizar a vitrine em tempo real ao digitar na busca, trocar a regra no seletor ou alterar a ordenação.
- Exibir mensagem acessível (`aria-live`) e botão de limpeza quando nenhum item corresponder ao filtro.

## US02 — Consultar a Ficha Técnica do Artefato
**Como** visitante interessado em um item  
**Quero** abrir a página de detalhes carregada dinamicamente pelo `id` da URL  
**Para** conhecer a descrição completa, o material, as dimensões, o modo de uso e escolher a quantidade desejada.

**Critérios de aceite:**
- Carregar o produto correto a partir de `produto.html?id={id}` usando `URLSearchParams`.
- Exibir mensagem amigável de erro 404 com link para voltar à vitrine caso o `id` seja inválido ou inexistente.
- Validar a quantidade entre 1 e 10 unidades antes de avançar para o checkout.

## US03 — Preencher Entrega com Consulta Automática de CEP
**Como** comprador  
**Quero** revisar o resumo dinâmico do meu pedido e preencher meu endereço automaticamente pelo CEP  
**Para** concluir a simulação de compra com agilidade e sem erros de digitação.

**Critérios de aceite:**
- Recalcular subtotal, frete e total automaticamente sempre que a quantidade for alterada no checkout.
- Formatar telefone e CEP durante a digitação e consultar a API **ViaCEP** ao clicar em "Buscar CEP".
- Tratar CEP incompleto, CEP inexistente e falhas de conexão sem quebrar a página, permitindo preenchimento manual.

## US04 — Visualizar o Comprovante do Pedido Concluído
**Como** comprador que finalizou o formulário  
**Quero** visualizar um resumo completo com código do pedido, artefato, quantidade, destino e total simulado  
**Para** confirmar que minha solicitação foi registrada corretamente.

**Critérios de aceite:**
- Bloquear o acesso direto à página `sucesso.html` caso nenhuma compra tenha sido finalizada na sessão.
- Exibir os dados consolidados do pedido salvo no `sessionStorage` e oferecer botão para retornar à vitrine.
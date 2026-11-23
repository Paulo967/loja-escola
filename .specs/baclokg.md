# Product Backlog — Almacén DtMF

## Prioridade Alta (MVP Entregue)

- **Catálogo Impossível (`js/produtos.js` + `index.html`)**: Cadastro centralizado dos 6 artefatos atendendo às 6 regras físicas do desafio, com ilustrações vetoriais em SVG.
- **Busca, Filtro por Regra e Ordenação (`js/main.js`)**: Filtragem em tempo real por palavra-chave, seletor de regra criativa e ordenação por nome ou preço com feedback acessível (`aria-live`).
- **Ficha Técnica Dinâmica (`produto.html` + `js/product.js`)**: Carregamento via `URLSearchParams` (`?id=`), validação de quantidade (1 a 10) e tratamento amigável de Erro 404 para IDs inexistentes.
- **Checkout com Cálculo Dinâmico e ViaCEP (`checkout.html` + `js/checkout.js`)**: Persistência no `sessionStorage`, recálculo instantâneo de subtotal e total, máscaras de telefone/CEP e preenchimento automático de endereço via API ViaCEP.
- **Comprovante Protegido (`sucesso.html` + `js/success.js`)**: Bloqueio contra acesso direto sem pedido concluído na sessão e exibição do resumo completo com código único (`DTMF-XXXXXX`).

## Prioridade Média (Próximas Sprints)

- **Carrinho Multi-Itens**: Permitir adicionar múltiplos stickers impossíveis diferentes no mesmo pedido antes de ir para o checkout.
- **Álbum de Fotos Reveladas (`localStorage`)**: Histórico persistente dos pedidos simulados já realizados pelo visitante no navegador.
- **Favoritos da Cartela**: Opção para marcar artefatos favoritos na vitrine e filtrar apenas os itens salvos.

## Prioridade Baixa (Evoluções Futuras)

- **Avaliações de Colecionadores**: Comentários e notas temáticas em cada ficha técnica.
- **Calculadora de Frete Interplanetário e Marítimo**: Prazo de entrega estimado conforme a natureza do objeto (ex.: órbita terrestre vs. transporte monumental).
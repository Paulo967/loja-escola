# Roadmap — Almacén DtMF

## Sprint 1 — Identidade Visual e Estrutura Base
- Definição do conceito **Almacén DtMF** (*De Puerto Rico para el Mundo*) inspirado na estética analógica de *DeBÍ TiRAR MáS FOToS*.
- Criação da paleta de cores temática em variáveis CSS (amarelo-sol `#f8d948`, azul-Porto Rico `#1d63b8`, vermelho `#e63946`, verde-bananeira `#2d6a4f`) e tipografia editorial (`Fredoka`, `Plus Jakarta Sans`, `Courier Prime`).
- Reestruturação semântica e acessível dos documentos HTML (`index.html`, `produto.html`, `checkout.html`, `sucesso.html`) com Bootstrap 5 e `skip-link`.

## Sprint 2 — Catálogo Impossível e Vitrine Dinâmica
- Modelagem do catálogo centralizado em `js/produtos.js` com 6 artefatos inéditos atendendo às 6 regras físicas do desafio e ilustrações vetoriais em SVG.
- Renderização dinâmica da vitrine (`js/main.js`) com busca em tempo real, filtro por regra criativa e ordenação por nome ou preço.
- Implementação da página de ficha técnica (`js/product.js`) via `URLSearchParams` com tratamento de erro amigável para IDs inexistentes (`?id=999`).

## Sprint 3 — Jornada de Compra, Checkout e ViaCEP
- Persistência do item e da quantidade selecionada no `sessionStorage` entre vitrine, ficha técnica e checkout.
- Cálculo dinâmico de subtotal, frete e total conforme alteração de quantidade no resumo do pedido (`js/checkout.js`).
- Máscaras não-intrusivas de telefone e CEP, validação acessível de formulário e consulta assíncrona à API **ViaCEP** (`fetch` + `try/catch/finally`).
- Proteção contra acesso direto à página de confirmação (`js/success.js`) e exibição do comprovante completo.

## Sprint 4 — Testes, Ajustes e Documentação Final
- Execução do checklist completo de testes (navegação por teclado, responsividade mobile/tablet/desktop, filtros sem resultado, falhas de rede na ViaCEP e console limpo).
- Ajustes de contraste, foco visível (`:focus-visible`) e suporte a `@media (prefers-reduced-motion: reduce)`.
- Atualização da documentação técnica (`README.md`, `PRD.md`, `user-stories.md` e `visual-identity.md`) para apresentação.
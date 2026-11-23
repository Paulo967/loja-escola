# Almacén DtMF — Loja Impossível

Projeto de front-end desenvolvido sobre a base da **Loja Escola**, transformando-a na **Almacén DtMF (De Puerto Rico para el Mundo)** — uma loja conceitual inspirada na cartela de stickers e na estética visual do álbum *DeBÍ TiRAR MáS FOToS* (Bad Bunny).

## Melhorias realizadas

### Nome e conceito da loja
- **Nome:** Almacén DtMF (`PR · 2025`)
- **Conceito:** Uma vitrine em formato de cartela de adesivos (stickers recortados em azul e branco sobre fundo amarelo-ouro `#f8d948`) reunindo objetos impossíveis criados para guardar memórias antes que o tempo passe.

### Lista dos produtos e regras atendidas
1. **Rolo de Filme DtMF 35mm (1 Pose)** (`R$ 110,00`) — *Regra:* **Ser de uso único**.
2. **Sapo Concho de Algibeira** (`R$ 260,00`) — *Regra:* **Caber em um bolso**.
3. **Monumento Duas Cadeiras Brancas** (`R$ 142.000,00`) — *Regra:* **Não caber em um avião**.
4. **Câmera Analógica para Formiga** (`R$ 320,00`) — *Regra:* **Servir em uma formiga**.
5. **Vitrola Orbital Baile Inolvidable** (`R$ 4.900,00`) — *Regra:* **Ser usado no espaço sideral**.
6. **Zumbido de Plena em Ampola** (`R$ 155,00`) — *Regra:* **Começar com a letra Z** (e ser de uso único).

### Principais mudanças de HTML, CSS e JavaScript
- **HTML:** Atualização completa de títulos (`<title>`), `meta description`, tags Open Graph, favicon SVG inline, hierarquia semântica (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), associação de todos os `label` aos campos e regiões `aria-live="polite"`.
- **CSS:** Paleta inspirada na cartela oficial do álbum (`#f8d948`, `#1d63b8`, `#e63946`, `#2d6a4f`), tipografia mista (`Fredoka` + `Plus Jakarta Sans` + `Courier Prime`), cartões estilo adesivo recortado com sombras duras, foco visível (`:focus-visible`), áreas de toque confortáveis (`min-height: 44px`) e suporte a `@media (prefers-reduced-motion: reduce)`.
- **JavaScript:**
  - `js/produtos.js`: Catálogo único com os 6 produtos, especificações técnicas e stickers SVG vetoriais.
  - `js/main.js`: Renderização dinâmica da vitrine, busca por texto, filtro por regra criativa e ordenação por nome/preço.
  - `js/product.js`: Leitura do `id` via `URLSearchParams` e tratamento amigável para IDs inexistentes (`produto.html?id=999`).
  - `js/checkout.js`: Cálculo dinâmico de subtotal, frete e total conforme alteração de quantidade, máscaras de CEP e telefone, validação acessível e integração assíncrona com a API **ViaCEP** (`try/catch/finally`).
  - `js/success.js`: Bloqueio contra acesso direto sem pedido concluído e exibição do comprovante completo.

### APIs utilizadas
- **ViaCEP (`https://viacep.com.br/ws/{cep}/json/`):** Utilizada no checkout para preenchimento automático de logradouro, bairro, cidade e UF, com tratamento de CEP inválido, CEP inexistente e falha de rede.

### Testes realizados
- [x] Navegação completa utilizando apenas o teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`) e `skip-link`.
- [x] Responsividade testada no DevTools em celular (360px), tablet (768px) e desktop (1280px+) sem rolagem horizontal.
- [x] Filtro sem resultados exibindo mensagem acessível e botão de limpeza rápida.
- [x] Navegação entre produtos distintos (`produto.html?id=1` e `produto.html?id=3`).
- [x] Tratamento de ID inexistente (`produto.html?id=999`) com mensagem de erro e link de retorno.
- [x] Alteração de quantidade no checkout recalculando subtotal e total em tempo real.
- [x] Submissão de formulário vazio e e-mail inválido exibindo mensagens específicas e focando o primeiro campo inválido.
- [x] Consulta de CEP incompleto, CEP real (`01001-000`), CEP inexistente (`99999-999`) e simulação de modo Offline no DevTools.
- [x] Atualização de página (`F5`) mantendo dados do fluxo no `sessionStorage`.
- [x] Acesso direto a `sucesso.html` sem pedido concluído bloqueado com orientação para retornar à vitrine.
- [x] Console do navegador limpo, sem erros de execução.

### Dificuldades encontradas e como foram resolvidas
- **Sincronização entre vitrine, detalhes e checkout:** Resolvida centralizando o catálogo em `js/produtos.js` e persistindo apenas o `id` e a `quantidade` no `sessionStorage`.
- **Tratamento de falhas na consulta de CEP:** Resolvido encapsulando o `fetch` em `try/catch/finally`, desabilitando o botão durante a requisição e permitindo preenchimento manual caso a API esteja indisponível.

### desenvolvedor
- Paulo Henrique Petrit de Souza
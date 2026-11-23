# PRD - Almacén DtMF
## Loja de Objetos Impossíveis e Nostalgia Analógica Caribenha

**Versão:** 1.0  
**Tipo:** MVP Web Front-End  
**Stack:** HTML5, CSS3, Bootstrap 5, JavaScript (ES6+)  
**Integração Externa:** API Pública ViaCEP  
**Persistência Local:** `sessionStorage`  

---

# 1. Visão do Produto

A **Almacén DtMF** (*De Puerto Rico para el Mundo*) é uma loja virtual conceitual inspirada na estética visual de cartela de stickers e na nostalgia analógica 35mm do álbum *DeBÍ TiRAR MáS FOToS* (Bad Bunny).

O objetivo do MVP é oferecer uma experiência web responsiva, acessível e criativa onde visitantes exploram artefatos inéditos que desafiam as leis da física, consultam fichas técnicas dinâmicas e concluem uma simulação completa de pedido com preenchimento automático de endereço via CEP.

---

# 2. Problema

Memórias afetivas se perdem rápido no cotidiano digital, enquanto objetos comuns não atendem a necessidades extraordinárias (como fotografar em escala de formiga, ouvir vinil em gravidade zero ou guardar um instante em uma única pose).

Além disso, interfaces de e-commerce didáticas costumam ser genéricas, estáticas e sem tratamento adequado de erros ou acessibilidade. Precisamos de uma vitrine com identidade marcante e fluxo funcional ponta a ponta.

---

# 3. Objetivos do MVP

- Exibir catálogo dinâmico com 6 artefatos inéditos distribuídos entre todas as 6 regras criativas do desafio.
- Permitir busca por texto, filtro por regra física atendida e ordenação por nome ou preço.
- Carregar detalhes de cada produto dinamicamente via `URLSearchParams` (`produto.html?id={id}`) e tratar IDs inexistentes.
- Manter consistência de produto, quantidade e preços até o checkout via `sessionStorage`.
- Calcular subtotal, frete e total em tempo real conforme alteração de quantidade.
- Consultar endereços automaticamente pela API **ViaCEP** com máscaras e tratamento completo de falhas.
- Proteger a página de confirmação contra acesso direto sem pedido concluído.

---

# 4. Personas

## Mateo Rivera (Colecionador Analógico)
- 24 anos, entusiasta de fotografia 35mm e música caribenha.
- Busca artefatos nostálgicos únicos como o *Rolo de Filme DtMF (1 Pose)* e o *Sapo Concho de Algibeira*.
- Acessa principalmente pelo celular e valoriza interfaces rápidas e visuais marcantes.

## Dra. Valentina Colón (Engenheira Orbital & Curadora)
- 32 anos, projeta missões espaciais e instalações monumentais.
- Adquire itens de alta complexidade como a *Vitrola Orbital Baile Inolvidable* e o *Monumento Duas Cadeiras Brancas*.
- Valoriza especificações técnicas claras, cálculo transparente de frete e preenchimento automático de CEP.

---

# 5. Funcionalidades

## Catálogo e Filtros (`index.html` + `js/main.js`)
Como visitante, quero visualizar os artefatos da loja, buscar por palavra-chave, filtrar pela regra criativa e ordenar os resultados para encontrar o item desejado.

### Critérios de Aceite
- Renderização dinâmica a partir do array central `PRODUTOS_DTMF` (`js/produtos.js`).
- Cartão com ilustração SVG codada, selo da regra física, categoria, nome, descrição curta, preço em BRL e botão para ficha técnica.
- Filtro combinado em tempo real e feedback acessível via `aria-live="polite"`.

## Ficha Técnica do Produto (`produto.html` + `js/product.js`)
Como visitante, quero abrir os detalhes do produto selecionado pela URL para ler suas especificações e escolher a quantidade.

### Critérios de Aceite
- Leitura do parâmetro `id` via `URLSearchParams`.
- Exibição de tela amigável de Erro 404 com botão de retorno caso o `id` não exista (ex.: `produto.html?id=999`).
- Validação de quantidade inteira entre 1 e 10 unidades antes de salvar no `sessionStorage` e seguir para o checkout.

## Checkout e Consulta ViaCEP (`checkout.html` + `js/checkout.js`)
Como comprador, quero revisar o resumo dinâmico do pedido e preencher meu endereço automaticamente pelo CEP para concluir a compra simulada.

### Critérios de Aceite
- Recálculo automático de subtotal e total ao alterar a quantidade no resumo.
- Máscaras não-intrusivas para telefone `(00) 00000-0000` e CEP `00000-000`.
- Requisição `fetch` à ViaCEP (`https://viacep.com.br/ws/{cep}/json/`) com estado de carregamento, tratamento de CEP inválido/inexistente e fallback manual em caso de falha de rede.

## Confirmação de Pedido (`sucesso.html` + `js/success.js`)
Como comprador, quero visualizar o comprovante do meu pedido simulado com código único e resumo completo.

### Critérios de Aceite
- Bloqueio de acesso direto caso não exista `dtmf_pedido_concluido` no `sessionStorage`.
- Exibição do número do pedido (`DTMF-XXXXXX`), cliente, artefato, quantidade, regra atendida, cidade/UF, pagamento e valor total.

---

# 6. Fluxo Principal

1. Usuário acessa a vitrine (`index.html`).
2. Filtra ou ordena os artefatos impossíveis.
3. Seleciona um item e abre a ficha técnica (`produto.html?id={id}`).
4. Define a quantidade (1 a 10) e avança para o checkout (`checkout.html`).
5. Preenche dados pessoais, busca o endereço pelo CEP via ViaCEP e escolhe o pagamento.
6. Submete o formulário validado e visualiza o comprovante (`sucesso.html`).

---

# 7. Telas do MVP

## Vitrine (`index.html`)
- Cabeçalho com identidade **Almacén DtMF (`PR · 2025`)** e navegação acessível (`skip-link`).
- Hero temático com stickers vetoriais flutuantes (dominó, globo *Puerto Rico para el Mundo* e bandeira).
- Painel de busca, filtro por regra e ordenação + grade responsiva de cartões.

## Ficha Técnica (`produto.html`)
- Breadcrumb de navegação.
- Ilustração ampliada em moldura de sticker, selo de regra, descrição detalhada, especificações do laboratório e seletor de quantidade.

## Checkout (`checkout.html`)
- Formulário dividido em fieldsets semânticos (Dados Pessoais, Endereço ViaCEP e Pagamento Simulado).
- Resumo lateral fixo (`sticky`) com atualização instantânea de valores.

## Pedido Concluído (`sucesso.html`)
- Painel centralizado com ícone de confirmação, dados consolidados do pedido e link para retornar à loja.

---

# 8. Modelo de Dados (`js/produtos.js` e `sessionStorage`)

## Produto (`PRODUTOS_DTMF`)
- `id` (Number)
- `nome` (String)
- `categoria` (String)
- `regra` (String)
- `carimbo` (String)
- `preco` (Number)
- `freteBase` (Number)
- `descricaoCurta` (String)
- `descricaoDetalhada` (String)
- `especificacoes` (Array de Strings)
- `altImagem` (String)
- `svg` (String SVG)

## Estado da Sessão (`sessionStorage`)
- `dtmf_produto_id`: ID do artefato selecionado.
- `dtmf_quantidade`: Quantidade escolhida (1 a 10).
- `dtmf_pedido_concluido`: Objeto JSON com número do pedido, cliente, produto, regra, quantidade, total, cidade/UF e forma de pagamento.

---

# 9. Requisitos Não Funcionais

- **Responsividade:** Layout fluido em mobile (360px), tablet (768px) e desktop (1280px+) utilizando o Grid do Bootstrap 5 sem rolagem horizontal.
- **Acessibilidade:** Navegação completa por teclado (`:focus-visible`), `skip-link`, associação explícita entre `label` e `input`, regiões `aria-live="polite"` e suporte a `prefers-reduced-motion`.
- **Desempenho:** Ilustrações vetoriais em SVG inline leves, scripts carregados com `defer` e zero bibliotecas externas pesadas além do Bootstrap 5.
- **Organização:** Separação clara entre estrutura (HTML), apresentação (CSS) e comportamento (módulos JS).

---

# 10. Métricas de Sucesso

- 100% das 6 regras criativas representadas no catálogo.
- Fluxo completo (`Vitrine -> Produto -> Checkout -> Sucesso`) operando sem erros no Console.
- Todos os 12 cenários de testes obrigatórios validados com sucesso.

---

# 11. Futuras Evoluções

- Carrinho multi-itens permitindo combinar vários stickers impossíveis no mesmo pedido.
- Cálculo de prazo de entrega interplanetário e marítimo conforme a regra do produto.
- Modo galeria de fotos reveladas com histórico de pedidos salvos em `localStorage`.
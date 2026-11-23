# Modelo de Dados — Almacén DtMF

## Product (`PRODUTOS_DTMF` em `js/produtos.js`)

Representa cada artefato impossível catalogado na vitrine.

- `id` (Number) — Identificador único utilizado nas rotas (`produto.html?id={id}`)
- `nome` (String) — Título do artefato
- `categoria` (String) — Categoria temática da loja
- `regra` (String) — Regra física criativa atendida pelo item
- `carimbo` (String) — Etiqueta técnica estilo filme analógico
- `preco` (Number) — Valor unitário em BRL
- `freteBase` (Number) — Valor fixo de envio calculado para o item
- `descricaoCurta` (String) — Resumo exibido no cartão da vitrine
- `descricaoDetalhada` (String) — História e funcionamento na ficha técnica
- `especificacoes` (Array<String>) — Lista de características técnicas (regra, material, dimensões, modo de uso)
- `altImagem` (String) — Texto alternativo descritivo para acessibilidade
- `svg` (String) — Ilustração vetorial codada em SVG inline

---

## SessionSelection (`sessionStorage`)

Armazena o item escolhido durante a navegação entre `produto.html` e `checkout.html`.

- `dtmf_produto_id` (String) — ID do produto selecionado
- `dtmf_quantidade` (String) — Quantidade inteira escolhida (1 a 10)

---

## EnderecoViaCEP (Resposta `GET https://viacep.com.br/ws/{cep}/json/`)

Estrutura consumida no formulário de entrega (`checkout.html`).

- `cep` (String) — CEP formatado (`00000-000`)
- `logradouro` (String) — Rua, praça ou avenida
- `bairro` (String) — Bairro
- `localidade` (String) — Cidade
- `uf` (String) — Unidade Federativa (2 letras)
- `erro` (Boolean, opcional) — Indica CEP inexistente na base

---

## OrderCompleted (`dtmf_pedido_concluido` no `sessionStorage`)

Registro consolidado gerado após validação e envio do checkout para exibição em `sucesso.html`.

- `numero` (String) — Código único do pedido simulado (`DTMF-XXXXXX`)
- `cliente` (String) — Nome completo do comprador
- `produto` (String) — Nome do artefato adquirido
- `regra` (String) — Regra criativa associada ao item
- `quantidade` (Number) — Quantidade final confirmada
- `total` (String) — Valor total formatado em moeda (`R$ 0,00`)
- `cidadeUf` (String) — Cidade e UF de destino (`Cidade - UF`)
- `pagamento` (String) — Forma de pagamento simulada escolhida
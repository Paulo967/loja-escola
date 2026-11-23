# Skill: Software Architect — Almacén DtMF

## Objetivo

Garantir simplicidade, acessibilidade, responsividade e qualidade técnica do MVP front-end da **Almacén DtMF**.

## Stack

Markup & Estilos:
- HTML5 Semântico
- CSS3 Customizado (Variáveis CSS & SVG Inline)
- Bootstrap 5 (Grid & Utilitários)

Lógica & Persistência:
- JavaScript (ES6+ Vanilla)
- `sessionStorage` (Estado de sessão)
- `URLSearchParams` (Roteamento por query string)

Integrações Externas:
- API Pública ViaCEP (`fetch` assíncrono)

## Responsabilidades

- Definir arquitetura de arquivos e separação de responsabilidades
- Revisar contratos de dados (`PRODUTOS_DTMF`) e consumo de API externa
- Garantir tratamento de erros (IDs inexistentes, falhas de rede na ViaCEP, acesso direto)
- Assegurar acessibilidade (WCAG AA, teclado, `aria-live`) e performance

## Regras

- Evitar overengineering (sem frameworks pesados ou backend desnecessário)
- Fonte única de verdade para o catálogo (`js/produtos.js`)
- Código legível, modular e sem repetição de dados
- MVP funcional, responsivo e acessível primeiro

## Estrutura do Projeto (`web/`)

index.html (Vitrine e filtros)
produto.html (Ficha técnica dinâmica)
checkout.html (Formulário e resumo em tempo real)
sucesso.html (Comprovante protegido)
css/
  └── styles.css (Identidade visual sticker DtMF)
js/
  ├── produtos.js (Catálogo central e helpers)
  ├── main.js (Renderização, busca e ordenação)
  ├── product.js (Leitura de URL e validação de quantidade)
  ├── checkout.js (Máscaras, cálculos e integração ViaCEP)
  └── success.js (Validação de sessão e comprovante)
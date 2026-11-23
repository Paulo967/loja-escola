# Fluxos

Fluxo Compra

Visitante
↓
Catálogo
↓
Produto
↓
Carrinho
↓
Login
↓
Checkout
↓
Pedido Confirmado# Fluxo de Usuário (User Flow) — Almacén DtMF

## 1. Mapa da Jornada do Visitante

```text
[Entrada na Vitrine] ──► Explora, busca ou filtra por regra criativa
        │
        ├──► Busca sem resultados ──► Clica em "Mostrar todos os produtos"
        │
        ▼
[Abre Ficha Técnica] ──► Lê história, especificações e escolhe quantidade (1–10)
        │
        ├──► Quantidade inválida ──► Recebe alerta acessível e corrige
        │
        ▼
[Preenche Checkout] ──► Insere dados pessoais + Consulta CEP (ViaCEP)
        │
        ├──► CEP inválido/offline ──► Preenche endereço manualmente
        ├──► Ajusta quantidade ──► Vê subtotal e total atualizarem na hora
        │
        ▼
[Conclui Pedido] ──────► Visualiza comprovante único (DTMF-XXXXXX)
        │
        ▼
[Retorna à Vitrine] ───► Continua explorando outros stickers impossíveis
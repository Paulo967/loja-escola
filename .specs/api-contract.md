# API e Integrações — Almacén DtMF

## Integração Externa (REST API)

### `GET https://viacep.com.br/ws/{cep}/json/`

Consulta o endereço completo a partir de um CEP brasileiro de 8 dígitos no checkout (`js/checkout.js`).

**Parâmetro de rota:**
- `{cep}`: string numérica com 8 dígitos (ex.: `01001000`).

**Resposta de sucesso (`200 OK`):**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
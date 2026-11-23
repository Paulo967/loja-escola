const painelSucesso = document.querySelector("#painelSucesso");
const dadosSalvos = sessionStorage.getItem("dtmf_pedido_concluido");

if (!dadosSalvos) {
  document.title = "Almacén DtMF | Nenhum pedido ativo";
  if (painelSucesso) {
    painelSucesso.innerHTML = `
      <p class="eyebrow-sticker mb-2">Acesso Restrito</p>
      <h1 id="titulo-sucesso" class="h2 fw-bold mb-3">Nenhum pedido concluído encontrado</h1>
      <p class="lead text-secondary mb-4">
        Para visualizar um comprovante, escolha primeiro um artefato na vitrine e finalize o formulário de checkout.
      </p>
      <a class="btn btn-dtmf btn-lg" href="index.html">Ir para a vitrine</a>
    `;
  }
} else {
  const pedido = JSON.parse(dadosSalvos);

  if (painelSucesso) {
    painelSucesso.innerHTML = `
      <div class="success-icon" aria-hidden="true">✓</div>
      <p class="eyebrow-sticker mb-2">Arquivo Registrado · San Juan</p>
      <h1 id="titulo-sucesso" class="fw-bold mb-3">Pedido simulado concluído!</h1>
      <p class="lead text-secondary">
        <strong>${pedido.cliente}</strong>, seu sticker impossível já entrou na fila de despacho.
      </p>

      <dl class="order-data">
        <div>
          <dt>Código do Pedido</dt>
          <dd class="font-mono-dtmf">${pedido.numero}</dd>
        </div>
        <div>
          <dt>Artefato Escolhido</dt>
          <dd>${pedido.produto} (${pedido.quantidade}x)</dd>
        </div>
        <div>
          <dt>Regra Atendida</dt>
          <dd>${pedido.regra}</dd>
        </div>
        <div>
          <dt>Destino</dt>
          <dd>${pedido.cidadeUf}</dd>
        </div>
        <div>
          <dt>Pagamento Simulado</dt>
          <dd>${pedido.pagamento}</dd>
        </div>
        <div>
          <dt>Total Simulado</dt>
          <dd>${pedido.total}</dd>
        </div>
      </dl>

      <div class="d-flex flex-wrap justify-content-center gap-3">
        <a class="btn btn-dtmf btn-lg" href="index.html">Voltar para a vitrine</a>
      </div>
    `;
  }
}
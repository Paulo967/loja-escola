const areaProduto = document.querySelector("#areaProduto");
const breadcrumbProduto = document.querySelector("#breadcrumbProduto");

const params = new URLSearchParams(window.location.search);
const idParam = params.get("id");
const produtoAtual = idParam ? buscarProdutoPorId(idParam) : PRODUTOS_DTMF[0];

if (!produtoAtual) {
  document.title = "Almacén DtMF | Artefato não encontrado";
  if (breadcrumbProduto) breadcrumbProduto.textContent = "Artefato não encontrado";

  if (areaProduto) {
    areaProduto.innerHTML = `
      <section class="learning-note text-center py-5 my-4" role="alert">
        <p class="eyebrow-sticker mb-2">Erro 404 · Arquivo Extraviado</p>
        <h1 class="h2 fw-bold mb-3">Este artefato não existe no nosso catálogo.</h1>
        <p class="text-secondary col-md-7 mx-auto mb-4">
          O código <code>${idParam || ""}</code> não corresponde a nenhum item catalogado na Almacén DtMF.
        </p>
        <a class="btn btn-dtmf btn-lg" href="index.html">Voltar para a vitrine</a>
      </section>
    `;
  }
} else {
  document.title = `Almacén DtMF | ${produtoAtual.nome}`;
  if (breadcrumbProduto) breadcrumbProduto.textContent = produtoAtual.nome;

  if (areaProduto) {
    const listaSpecs = produtoAtual.especificacoes
      .map((item) => `<li class="mb-2">${item}</li>`)
      .join("");

    areaProduto.innerHTML = `
      <article class="row g-5 align-items-start">
        <div class="col-lg-6">
          <div class="product-detail-illustration" role="img" aria-label="${produtoAtual.altImagem}">
            ${produtoAtual.svg}
            <span class="stamp-date" aria-hidden="true">${produtoAtual.carimbo}</span>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="mb-2">
            <span class="rule-badge">${produtoAtual.regra}</span>
          </div>
          <p class="fw-bold text-uppercase small mb-1" style="color: var(--sticker-blue);">${produtoAtual.categoria}</p>
          <h1 class="fw-bold mb-3">${produtoAtual.nome}</h1>
          <p class="lead hero-card-note mb-3">${produtoAtual.descricaoDetalhada}</p>
          <p class="price price-large my-3">${formatarMoeda(produtoAtual.preco)}</p>

          <section aria-labelledby="titulo-detalhes" class="checkout-fieldset mb-4">
            <h2 id="titulo-detalhes" class="h5 fw-bold mb-3" style="color: var(--sticker-blue);">Especificações do Laboratório</h2>
            <ul class="mb-0">${listaSpecs}</ul>
          </section>

          <form id="formProduto" class="checkout-fieldset" novalidate>
            <div class="mb-3">
              <label for="quantidade" class="form-label fw-bold">Quantidade desejada (1 a 10)</label>
              <input class="form-control quantity-field" id="quantidade" name="quantidade" type="number" min="1" max="10" value="1" required>
            </div>
            <button class="btn btn-dtmf btn-lg" type="submit">Continuar para o checkout</button>
          </form>

          <div id="produtoFeedback" class="mt-3 fw-bold text-danger" role="status" aria-live="polite"></div>
        </div>
      </article>
    `;

    const formProduto = document.querySelector("#formProduto");
    const quantidadeInput = document.querySelector("#quantidade");
    const feedback = document.querySelector("#produtoFeedback");

    formProduto?.addEventListener("submit", (event) => {
      event.preventDefault();
      const qtd = Number(quantidadeInput.value);

      if (!Number.isInteger(qtd) || qtd < 1 || qtd > 10) {
        feedback.textContent = "Escolha uma quantidade inteira entre 1 e 10 unidades.";
        quantidadeInput.focus();
        return;
      }

      sessionStorage.setItem("dtmf_produto_id", String(produtoAtual.id));
      sessionStorage.setItem("dtmf_quantidade", String(qtd));
      window.location.href = "checkout.html";
    });
  }
}